import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    name?: string;
    type?: string;
    image?: string;
}

export const SEO = ({
    title,
    description = "Own your business software forever. Rxio builds lifetime-licensed, offline-first applications for Indian businesses.",
    keywords = "pharmacy software India, offline pharmacy management, GST billing software, lifetime software license",
    canonical,
    name = "Rxio",
    type = "website",
    image = "https://rxio.online/og-image.png"
}: SEOProps) => {
    const siteUrl = 'https://rxio.online';
    const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};
