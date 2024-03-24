/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${process.env.BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${process.env.BLOG_URL}/blog/:path*`,
      },
    ]
  },
}

export default nextConfig
