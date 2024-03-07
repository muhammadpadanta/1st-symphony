import withVideos from 'next-videos';

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'media.suara.com' },
      { hostname: 'images3.alphacoders.com' },
      { hostname: 'assets.aceternity.com' },
      { hostname: 'www.suarasurabaya.net' },
      { hostname: 'static.promediateknologi.id' },
      { hostname: 'i.ytimg.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'e7.pngegg.com' },
      { hostname: 'w7.pngwing.com' },
      { hostname: 'i.pinimg.com' },
      { hostname: 'cdn.pixabay.com' },
      { hostname: 'spng.pngfind.com' },
      
      
      
     
    ],
  },
  // Merge withVideos configuration
  ...withVideos(),
};

export default nextConfig;
