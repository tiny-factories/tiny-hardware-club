import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          alt="OpenAI GPT-4"
          className="w-full"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-black dark:text-gray-100">
            {" "}
            {post.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </div>
      </div>
      <article key={post.id} className="mb-6 md:mb-8">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline"></header>
      </article>
    </Link>
  );
};

export default BlogPost;
