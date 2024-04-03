import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
console.log("posts: ", posts)
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white max-w-7xl min-h-screen mx-auto px-4">
      <Posts posts={posts} />
    </main>
  );
}
