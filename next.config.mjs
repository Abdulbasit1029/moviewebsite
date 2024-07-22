/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      output:"export",
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
