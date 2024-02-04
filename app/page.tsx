import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { postType } from "./lib/postType";

export const revalidate = 60 //refresh

async function fetchData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "slug": slug.current,
      titleImage
  }
  `

  const data = await client.fetch(query)

  return data
}

export default async function Home() {
  const posts: postType[] = await fetchData()
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-xl mb-4">Blogs</h1>
      <hr className="border-gray-300 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {posts.map(post => (
          <div key={post.slug} className="bg-gray-100 p-2 rounded-lg border border-gray-200 shadow-2xl dark:shadow-lg">
            <Image src={urlFor(post.titleImage).url()} alt={post.title} loading="lazy" width={600} height={200} objectFit="cover" className="h-44 bg-gray-100 rounded-md" />
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl text-gray-800 font-bold line-clamp-2 px-2 hover:text-blue-500 cursor-pointer">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-2 px-2">by: Admin</p>
            <p className="line-clamp-3 text-sm text-gray-800 px-2">{post.smallDescription}</p>
            <Link href={`/blog/${post.slug}`}>
              <button className="mt-2 bg-blue-500 text-gray-100 p-1 w-full rounded-lg hover:bg-blue-600 cursor-pointer">Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
