/** @type {import('next').NextConfig} */
const securityHeaders = [
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
    {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
    {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
];

const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {protocol: 'https', hostname: 'cdn.sanity.io'}
        ]
    },
    reactStrictMode: true,
    poweredByHeader: false,
    trailingSlash: true,
    experimental: {
        optimizePackageImports: ['framer-motion'],
    },
    async headers() {
        return [
            {source: '/:path*', headers: securityHeaders},
            {
                // Statyczne zasoby z /public i ikony – cache w przeglądarce
                source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)',
                headers: [{key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400'}],
            },
        ];
    },
    async redirects() {
        return [
            {source: '/oferta', destination: '/', permanent: true},
            {source: '/aktualnosci', destination: '/', permanent: true},
            {source: '/uslugi', destination: '/', permanent: true}
        ];
    }
};
export default nextConfig;
