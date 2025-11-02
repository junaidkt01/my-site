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
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build your first app with Next.js 14 and TypeScript.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js is a React framework that makes building fullstack apps simple.</p>
      <p>In this tutorial, we’ll set up a project, add TypeScript, and deploy it.</p>
    `,
    ogImage: "/images/nextjs-guide.jpg",
  },
  {
    slug: "smooth-scroll-with-lenis",
    title: "Smooth Scrolling with Lenis in Next.js",
    excerpt: "Add buttery-smooth scrolling to your Next.js site using Lenis.",
    content: `
      <h2>Setup</h2>
      <p>Install <code>@studio-freight/lenis</code> and wrap your layout with the SmoothScroll component.</p>
      <p>Lenis provides physics-based smooth scroll with minimal setup.</p>
    `,
    ogImage: "/images/lenis-scroll.jpg",
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

export const faqs = [
  {
    title: "Process & Timeline",
    accordian: [
      {
        title: "What defines your design approach?",
        desc: [
          "We create spatial harmony through Vaastu-compliant layouts blended with contemporary aesthetics. Each design emerges from deep client collaboration, ensuring spaces reflect personal narratives while maintaining architectural integrity.",
        ],
      },
      {
        title: "How long does a typical project take?",
        desc: [
          "Timelines vary by scope: ",
          "• Interior transformations: 8-12 weeks",
          "• Custom residences: 8-14 months We maintain transparent",
          "communication throughout, with regular progress updates and milestone tracking.",
        ],
      },
    ],
  },
  {
    title: "Quality & Assurance",
    accordian: [
      {
        title: "How do you ensure construction quality?",
        desc: [
          "Through rigorous protocols: ",
          "• Premium material selection and verification",
          "• Skilled artisan craftsmanship",
          "• Multi-stage quality inspections",
          "• Continuous project supervision",
        ],
      },
      {
        title: "Can you work with existing structures?",
        desc: [
          "Absolutely. Our 'Home Renewal' service specializes in transforming existing spaces while respecting their original character. We enhance flow, update aesthetics, and optimize functionality.",
        ],
      },
    ],
  },
  {
    title: "Financial Transparency",
    accordian: [
      {
        title: "How is project costing structured?",
        desc: [
          "We provide: ",
          "• Preliminary budget assessment during consultation",
          "• Detailed transparent costing after design finalization",
          "• Clear breakdown of all project components",
          "• No hidden charges or surprise additions",
        ],
      },
    ],
  },
];
