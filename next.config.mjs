/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },

        ],


    },
    reactStrictMode: false,
    trailingSlash: true,


    async redirects() {
        return [
            {
                source: '/oferta',
                destination: '/',
                permanent: true,
            },
            {
                source: '/uslugi',
                destination: '/',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
