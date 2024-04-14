/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: 'https', hostname: 'cdn.sanity.io', port: ''
            },
            {protocol: 'https', hostname: 'picsum.photos', port: ''
            }
        ]
    },
    experimental: {
        taint: true,
    },
};

export default nextConfig;
