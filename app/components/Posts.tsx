import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
  }

  // Sort posts based on _createdAt field in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime());

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white py-10 mx-auto grid grid-cols-1">
      <p className="text-gray-500">Nýjustu færslur:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sortedPosts.map((post) =>
        {console.log("post: ", post.slug)
        return (
          <Link
            className="p-4 flex flex-row items-center justify-between hover:opacity-90"
            key={post._id}
            href={`/${post.slug.current}`}
          >
            <div>
              <h2 className="font-medium text-xl">{post.title}</h2>
              <p className="py-2 text-gray-400 text-xs font-light uppercase">{convertDate(post._createdAt)} • {post.authorName}</p>
            </div>
            {post?.mainImage &&
              <Image
                className="w-32 object-fill rounded-lg"
                src={post.imageURL}
                alt={post.mainImage.alt}
                width={350}
                height={350}
                priority
              />
            }
          </Link>
        )}
        )}
      </div>
    </div>
  )
}

export default Posts
