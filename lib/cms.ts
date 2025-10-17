// app/lib/cms.ts

export type Post = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    ogImage: string;
};

// For now, we’ll use a simple in-memory array.
// Later, you can replace this with a fetch() call or database.
const posts: Post[] = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js',
        excerpt: 'Learn how to build your first app with Next.js 14 and TypeScript.',
        content: `
      <h2>Introduction</h2>
      <p>Next.js is a React framework that makes building fullstack apps simple.</p>
      <p>In this tutorial, we’ll set up a project, add TypeScript, and deploy it.</p>
    `,
        ogImage: '/images/nextjs-guide.jpg',
    },
    {
        slug: 'smooth-scroll-with-lenis',
        title: 'Smooth Scrolling with Lenis in Next.js',
        excerpt: 'Add buttery-smooth scrolling to your Next.js site using Lenis.',
        content: `
      <h2>Setup</h2>
      <p>Install <code>@studio-freight/lenis</code> and wrap your layout with the SmoothScroll component.</p>
      <p>Lenis provides physics-based smooth scroll with minimal setup.</p>
    `,
        ogImage: '/images/lenis-scroll.jpg',
    },
];

// Fetch one post by slug
export async function getPost(slug: string): Promise<Post | null> {
    const post = posts.find((p) => p.slug === slug);
    return post || null;
}

// Optional: fetch all posts (for listing/blog index page)
export async function getAllPosts(): Promise<Post[]> {
    return posts;
}
