import withFonts from 'next-fonts';
import withVideos from 'next-videos';

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images3.alphacoders.com' },
      { hostname: 'assets.aceternity.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'upload.wikimedia.org' },
      { hostname: 'e7.pngegg.com' },
      { hostname: 'w7.pngwing.com' },
      { hostname: 'i.pinimg.com' },
      { hostname: 'cdn.pixabay.com' },
      { hostname: 'aceternity.com' },
      { hostname: 'lastfm.freetls.fastly.net' },
      { hostname: 's9.gifyu.com' },
      { hostname: 'assets.dryicons.com' },
      { hostname: 's12.gifyu.com' },
      { hostname: 'daisyui.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'localhost' },
      { hostname: 'via.placeholder.com'},
    ],
  },
  // Merge withVideos and withFonts configuration
  ...withVideos(),
  ...withFonts(),
};

export default nextConfig;