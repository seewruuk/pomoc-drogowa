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
};

export default nextConfig;
