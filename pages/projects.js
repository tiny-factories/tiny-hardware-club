import { getAllPosts, getAllTagsFromPosts } from "@/lib/notion";
import GalleryLayout from "@/layouts/gallery";

export default function search({ tags, posts }) {
  return <GalleryLayout tags={tags} posts={posts} />;
}
export async function getStaticProps() {
  const posts = await getAllPosts({ includePages: false });
  const tags = getAllTagsFromPosts(posts);
  return {
    props: {
      tags,
      posts,
    },
    revalidate: 1,
  };
}
