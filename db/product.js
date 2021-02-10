import { nanoid } from "nanoid";

export async function getProducts(db, from = new Date(), by, limit) {
  return db
    .collection("products")
    .find({
      // Pagination: Fetch posts from before the input date or fetch from newest
      ...(from && {
        createdAt: {
          $lte: from,
        },
      }),
      ...(by && { creatorId: by }),
    })
    .sort({ createdAt: -1 })
    .limit(limit || 10)
    .toArray();
}

export async function insertProduct(db, { content, creatorId }) {
  return db
    .collection("products")
    .insertOne({
      _id: nanoid(12),
      name,
      content,
      creatorId,
      createdAt: new Date(),
    })
    .then(({ ops }) => ops[0]);
}
