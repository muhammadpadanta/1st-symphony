import withVideos from 'next-videos';

const nextConfig = {
  images: {
    domains: [
      'media.suara.com',
      'images3.alphacoders.com',
      'assets.aceternity.com',
      'www.suarasurabaya.net',
      'static.promediateknologi.id',
      'i.ytimg.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
      'e7.pngegg.com',
      'w7.pngwing.com',
      'i.pinimg.com',
      'cdn.pixabay.com',
      'spng.pngfind.com',
      'asset.kompas.com',
      'thebiaslistcom.files.wordpress.com',
      'www.billboard.com',
      'media.matamata.com',
      'www.rukita.co',
      's-light.tiket.photos',
      'next.config.js',
      'awsimages.detik.net.id',
      'cdn1-production-images-kly.akamaized.net',
      'i.scdn.co',
      'akcdn.detik.net.id',
      'cdn.britannica.com',
      'picsum.photos',
      'cdn.antaranews.com',
    ],
  },
  // Merge withVideos configuration
  ...withVideos(),
};

export default nextConfig;