import nc from "next-connect";
import { all } from "@/middlewares/index";
import { getProducts, insertProduct } from "@/db/index";

const handler = nc();

handler.use(all);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req, res) => {
  const products = await getProducts(
    req.db,
    req.query.from ? new Date(req.query.from) : undefined,
    req.query.by,
    req.query.limit ? parseInt(req.query.limit, 10) : undefined
  );

  if (req.query.from && products.length > 0) {
    // This is safe to cache because from defines
    //  a concrete range of products
    res.setHeader("cache-control", `public, max-age=${maxAge}`);
  }

  res.send({ products });
});

handler.post(async (req, res) => {
  if (!req.user) {
    return res.status(401).send("unauthenticated");
  }

  if (!req.body.content)
    return res.status(400).send("You must write something");

  const product = await insertProduct(req.db, {
    content: req.body.content,
    creatorId: req.user._id,
  });

  return res.json({ product });
});

export default handler;
