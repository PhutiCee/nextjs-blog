import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "./lib/sanity";
import { postType } from "./lib/postType";

export const revalidate = 60 //refresh after 60 seconds

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
      <hr className="border-gray-600 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {posts.map(post => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-gray-100 p-2 rounded-lg shadow-2xl dark:shadow-lg dark:bg-gray-200">
            <Image src={urlFor(post.titleImage).url()} alt={post.title} objectFit= 'cover' priority width={600} height={400} />
            <h2 className="text-2xl text-gray-800 font-bold line-clamp-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">by: Admin</p>
            <p className="line-clamp-3 text-sm text-gray-800">{post.smallDescription}</p>
            <button className="mt-1 bg-blue-500 text-gray-100 p-2 w-full rounded-lg hover:bg-blue-600">Read more</button>
          </Link>
        ))}
      </div>
    </main>
  );
}
