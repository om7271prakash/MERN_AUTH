/** @type {import('next').NextConfig} */

// console.log("env >>> ", process.env.NEXTAUTH_SECRET);
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
}

module.exports = nextConfig
