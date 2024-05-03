module.exports = {
  basePath: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
    unoptimized: true,
  },
  // output: 'export',
  swcMinify: true,
  transpilePackages: [
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons',
  ],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://timeapi.io/api/:path*`
      },
    ]
  }
};
