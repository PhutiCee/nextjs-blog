import CommentForm from '@/app/components/CommentForm'
import Comments from '@/app/components/Comments'
import { blogType } from '@/app/lib/postType'
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React from 'react'

export const revalidate = 60 //refresh after 60 seconds

async function fetchBlog(slug: string) {
    const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
        "slug": slug.current,
        titleImage,
        title,
        content
    }[0]`;
    const data = await client.fetch(query);

    return data;
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
    console.log(params.slug)
    const post: blogType = await fetchBlog(params.slug)

    return (
        <div className='max-w-4xl mx-auto p-8'>
            <h2 className='text-3xl font-bold'>{post.title} </h2>
            <p>written by: Admin</p>
            <div>
                <Image src={urlFor(post.titleImage).url()} alt="blog image" width={800} height={800} priority className='rounded-lg mt-5 border' />
            </div>
            <div className='mt-16 prose prose-lg'>
                <PortableText value={post.content} />
            </div>

            <Comments />
            <CommentForm />
        </div>
    )
}
