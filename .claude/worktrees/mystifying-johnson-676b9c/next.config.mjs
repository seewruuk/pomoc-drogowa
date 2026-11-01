const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'images.pexels.com', pathname: '/photos/**'},
            {protocol: 'https', hostname: 'cdn.sanity.io'}
        ]
    },
    reactStrictMode: false,
    trailingSlash: true,
    async redirects() {
        return [
            {source: '/oferta', destination: '/', permanent: true},
            {source: '/aktualnosci', destination: '/', permanent: true},
            {source: '/uslugi', destination: '/', permanent: true}
        ];
    }
};
export default nextConfig;