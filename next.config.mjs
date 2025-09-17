/** @type {import('next').NextConfig} */
const nextConfig = {

    trailingSlash: true,

  
    output: 'export',


    images: {
        unoptimized: true, // Required for static export
        domains: ['gluckswealth.com'], // Add your image domains
        formats: ['image/webp', 'image/avif'],
    },


    experimental: {
        images: {
            unoptimized: true
        }
    },


    generateStaticParams: true,

    distDir: 'out',
};

export default nextConfig;
