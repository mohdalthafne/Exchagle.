/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flagsapi.com',
            port: '',
            pathname: '/**/**/**',
          },
        ],
      },
};

export default nextConfig;
