// app/components/PostContent.tsx
'use client';

import { Post } from '@/lib/cms';

export default function PostContent({ post }: { post: Post }) {
    return (
        <article className="prose prose-lg max-w-3xl mx-auto py-12">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-gray-500">{post.excerpt}</p>
                <img
                    src={post.ogImage}
                    alt={post.title}
                    className="w-full h-auto mt-6 rounded-lg"
                />
            </header>

            {/* Since the content is stored as HTML in our mock data */}
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
