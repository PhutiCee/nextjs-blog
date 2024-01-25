import Link from "next/link";
import { posts } from "./data/posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-xl mb-4">Blogs</h1>
      <hr className="border-gray-600 mb-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {posts.map(post => (
          <Link href={`/blog/${post.id}`} key={post.id} className="bg-gray-400 p-2 rounded-lg shadow-lg">
            <Image src={post.image} alt={post.title} width={600} height={400} />
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>by: {post.username}</p>
            <br />
            <article>
              {post.content.slice(0, 63)}...
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
