/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['www.lendingtree.com', 'uvx955b2.directus.app', 'linking.zakadev.com', 'compare.zaka.pro']
  }
}

module.exports = nextConfig
