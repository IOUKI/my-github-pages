/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/my-github-pages' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    assetPrefix: isProd ? '/my-github-pages/' : '',
};

export default nextConfig;
