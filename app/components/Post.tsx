"use client"

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {

  return (
    
    <main className="bg-white text-black dark:bg-black dark:text-white max-w-7xl container mx-auto prose prose-xl px-5 py-16 dark:prose-invert ">

      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {post?.mainImage ? (
        <Image
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post?.mainImage?.alt}
          width={300}
          height={300}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  )
}

export default Post