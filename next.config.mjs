import withVideos from 'next-videos';

const nextConfig = {
  images: {
    domains: [
      'images3.alphacoders.com',
      'assets.aceternity.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
      'e7.pngegg.com',
      'w7.pngwing.com',
      'i.pinimg.com',
      'cdn.pixabay.com',
      'aceternity.com',
      'lastfm.freetls.fastly.net',
        's9.gifyu.com',
        'assets.dryicons.com',
        's12.gifyu.com',
        'daisyui.com',
        'avatars.githubusercontent.com',
      
      
    ],
  },
  // Merge withVideos configuration
  ...withVideos(),
};

export default nextConfig;