import { Metadata } from 'next';

export function buildMetadata({ title, description, url, image }: { title: string; description: string; url?: string; image?: string; }): Metadata {
    return {
        title,
        description,
        openGraph: { title, description, url, images: image ? [{ url: image }] : [] },
        twitter: { card: 'summary_large_image', title, description, images: image ? [image] : [] },
    };
}
