import { sanityFetch } from "@/sanity/lib/fetch";
import { categoryQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "@/app/components/Posts";
export default async function Home({ params }: { params: any }) {
  const posts = await sanityFetch<Array<SanityDocument>>({ query: categoryQuery, params })
  console.log(posts)
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white max-w-7xl min-h-screen mx-auto px-4">
      <Posts posts={posts} />
    </main>
  );

}
