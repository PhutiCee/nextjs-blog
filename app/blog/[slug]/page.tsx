import CommentForm from '@/app/components/CommentForm'
import Comments from '@/app/components/Comments'
import { blogType } from '@/app/lib/postType'
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export const revalidate = 3600 //refresh 

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const data = await fetchBlog(params.slug);

        if (!data) {
            throw new Error('Post not found');
        }

        return {
            title: data.title,
            description: data.content[0].children[0].text,
        };
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return {
            title: 'Error Loading Post',
            description: 'An error occurred while fetching the post. Please try again later.',
        };
    }
}

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
    try {
        const post = await fetchBlog(params.slug);

        if (!post) {
            return <div className='flex flex-col items-center justify-center min-h-96'>
                <h1 className='text-2xl font-mono'>Post not found!</h1>
            </div>;
        }

        return (
            <article className="max-w-4xl mx-auto p-8">
                <Head>
                    <title>{post.title}</title>
                    <meta name="description" content={post.content[0].children[0].text} />
                </Head>
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <p>Written by: Admin</p>
                <div>
                    <Image
                        src={urlFor(post.titleImage).url()}
                        alt={post.title}
                        objectFit='cover'
                        loading="lazy"
                        width={800}
                        height={800}
                        className="rounded-lg mt-5 border"
                    />
                </div>
                <div className="mt-16 prose prose-lg prose-pre">
                    <PortableText value={post.content} />
                </div>
                <CommentForm />
                <Comments />
            </article>
        );
    } catch (error) {
        console.error('Error fetching post:', error);
        return <div>An error occurred while fetching the post. Please try again later.</div>;
    }
}
