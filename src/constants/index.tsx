import {
    ArrowTrendingUpIcon,
    CalendarDaysIcon,
    CurrencyDollarIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    SpeakerWaveIcon,
    ClockIcon,
} from "@heroicons/react/20/solid";
import React from 'react';
import Musicicon from "@/components/icon/musicicon";
import '../../styles/globals.css'


export const artistData = [
    {
        icon: Musicicon,
        title: "Tulus",
        content: "Artist, SongWriter, Producer, and Performer.",
        backgroundImage: "/images/artistList1.webp",
    },
    {
        icon: Musicicon,
        title: "Twice",
        content: "Artist, SongWriter, Producer, and Performer, Production Team.",
        backgroundImage: "images/artistList2.webp",
    },
    {
        icon: Musicicon,
        title: "Virgoun",
        content: "Artist, SongWriter, Producer, and Performer.",
        backgroundImage: "images/artistList3.webp",
    },
    {
        icon: Musicicon,
        title: "Mahalini",
        content: "Artist, SongWriter.",
        backgroundImage: "images/artistList4.webp",
    },
    {
        icon: Musicicon,
        title: "Yoasobi",
        content: "Artist, SongWriter.",
        backgroundImage: "images/artistList5.webp",
    },
    {
        icon: Musicicon,
        title: "BTS",
        content: "Artist, SongWriter, Producer, and Performer, Production Team.",
        backgroundImage: "images/artistList6.webp",
    },
];



export const upcomingTicket = [
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/67a6796a993c4ea3cee9f14f7500044b.jpg#67a6796a993c4ea3cee9f14f7500044b",
        name: "Tulus - Monokrom",
        title: "A Tale of Two Cities",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/43818788ba8ae7e47962d12703f5e357.jpg#43818788ba8ae7e47962d12703f5e357",
        name: "Newjeans - OMG",
        title: "Hamlet",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/8c77e9f509c4dd3bca8d3ac6b5344ce5.jpg#8c77e9f509c4dd3bca8d3ac6b5344ce5",
        name: "Imagine Dragon - Believer",
        title: "A Dream Within a Dream",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/3b1ea8e1539f8e492155ab85079f8b73.jpg#3b1ea8e1539f8e492155ab85079f8b73",
        name: "Yoasobi - Idol",
        title: "Pride and Prejudice",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/462378a051090cdde996f5ffd54380a3.jpg#462378a051090cdde996f5ffd54380a3",
        name: "Virgoun - Bukti",
        title: "Moby-Dick",
    },
];

export const mostPopularTicket = [
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/73715c062bd38bebc6ca7b0d8f8aef20.jpg#73715c062bd38bebc6ca7b0d8f8aef20",
        name: "Ed Sheeran - Perfect",
        title: "A Tale of Two Cities",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/8cd5ceabe5e4c6b84b822d36346fe370.jpg#8cd5ceabe5e4c6b84b822d36346fe370",
        name: "Twice - What is Love?",
        title: "Hamlet",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/af42d6f1256554c4c4876da512d0dfc7.jpg#af42d6f1256554c4c4876da512d0dfc7",
        name: "Coldplay - Paradise",
        title: "A Dream Within a Dream",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/3e6e0107d3f30db91f3017b82147b395.jpg#3e6e0107d3f30db91f3017b82147b395",
        name: "Mahalini - Sial",
        title: "Pride and Prejudice",
    },
    {
        imageUrl:
            "https://lastfm.freetls.fastly.net/i/u/770x0/b399cf783718f80aad16b8a1b61c3fe2.jpg#b399cf783718f80aad16b8a1b61c3fe2",
        name: "ITZY - Checkmate",
        title: "Moby-Dick",
    },
];

// ---------------------------------

export const ticketDetails = [
    {
        name:'JAN 19',
        id: '1',
        date: 'Sat | 07.00 PM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5 "/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name:'FEB 15',
        id: '1',
        date: 'Wed | 09.00 PM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name:'MAR 15',
        id: '1',
        date: 'Tue | 06.00 AM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name:'APR 5',
        id: '1',
        date: 'Mon | 09.00 AM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name:'MAY 3',
        id: '1',
        date: 'Sun | 08.00 PM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },
    {
        name:'JUN 25',
        id: '1',
        date: 'Sat | 11.00 AM',
        price: 'Rp 200.000 - Rp 500.000',
        location: 'Jakarta, Indonesia. BSD City',
        icon1: <MapPinIcon className="w-5 h-5"/>,
        icon2: <ClockIcon className="w-5 h-5"/>,
        icon3: <CurrencyDollarIcon className="w-5 h-5"/>,

    },

]

// ---------------------------------


export const songs = [
    {
        name: 'Monokrom',
        id: '1',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Monokrom.mp3",

    },
    {
        name: 'Sewindu',
        id: '2',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Sewindu.mp3",
    },
    {
        name: 'Ruang Sendiri',
        id: '3',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Ruangsendiri.mp3",
    },

    {
        name: 'Hati-Hati Di Jalan ',
        id: '4',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Hatihatidijalan.mp3",
    },
    {
        name: 'Gajah',
        id: '5',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Gajah.mp3",
    },
    {
        name: 'Pamit',
        id: '5',
        duration: '0:00',
        volumeIcon: <SpeakerWaveIcon className="w-5 h-5"/>,
        music: "/music/Pamit.mp3",
    },






]

// ---------------------------------

export const purchasedTickets = [
    {
        image: "/images/sampleTicket.png",
        inventory: {
            purchaseDate: "2024-01-01",
            price: "Rp600.000",
            category: "VIP-I",
        },
    },
    {
        image: "/images/sampleTicket.png",
        inventory: {
            purchaseDate: "2024-01-02",
            price: "Rp400.000",
            category: "VIP-II",
        },
    },
    {
        image: "/images/sampleTicket.png",
        inventory: {
            purchaseDate: "2024-01-03",
            price: "Rp240.000",
            category: "REGULAR",
        },
    },
    {
        image: "/images/sampleTicket.png",
        inventory: {
            purchaseDate: "2024-01-03",
            price: "Rp240.000",
            category: "REGULAR",
        },
    },



];

// ---------------------------------

export const featuredArtist = [

    // --------------- row1 ---------------
    {
        title: "Justin Bieber",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist1.webp",
    },
    {
        title: "Yoasobi",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist2.webp",
    },
    {
        title: "Newjeans",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist3.webp",
    },

    {
        title: "Tulus",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist4.webp",
    },
    {
        title: "Blackpink",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist5.webp",
    },

// --------------- row1 ---------------

// --------------- row2 ---------------
    {
        title: "Twice",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist6.webp",
    },

    {
        title: "Imagine Dragons",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist7.webp",
    },
    {
        title: "Virgoun",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist8.webp",
    },
    {
        title: "Raisa",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist9.webp",
    },
    {
        title: "Armada",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist10.webp",
    },

    // --------------- row2 ---------------

    // --------------- row3 ---------------
    {
        title: "Coldplay",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist11.webp",
    },

    {
        title: "BTS",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist12.webp",
    },
    {
        title: "Charlie Puth",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist13.webp",
    },
    {
        title: "Mahalini",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist14.webp",
    },
    {
        title: "Tiara Andhini",
        link: "",
        thumbnail:
            "/images/homeFeaturedArtist15.webp",
    },

// --------------- row3 ---------------
];

// ---------------------------------

export const ticketFeatures = [
    {
        name: 'Find By Artist',
        description:
            'Search Ticket by Finding your Favorite Artist.',
        icon: MagnifyingGlassIcon,
        link: 'swiperCard',
    },
    {
        name: 'Find by Upcoming',
        description: 'Search Ticket Based on Upcoming Events.',
        icon: CalendarDaysIcon,
        link: 'upcomingConcerts',

    },
    {
        name: 'FInd by Most Popular',
        description: 'Search Ticket Based on Most Popular Events.',
        icon: ArrowTrendingUpIcon,
        link: 'mostPopularConcerts',
    },
]

export const textBlocks = [
    {
        text: "Find your Ticket Faster!",
        className: "text-white font-semibold text-8xl w-[40rem]",
    },



];

// ---------------------------------

export const socialMedia = [
    {
        id: 1,
        name: "Facebook",
        designation: "1st Symphony",
        image: "https://cdn.pixabay.com/photo/2016/11/05/08/42/facebook-1799691_1280.png",
        url: "https://www.facebook.com/MuhammadPadantaTarigan"
    },
    {
        id: 2,
        name: "Discord",
        designation: "1stSymphony",
        image: "https://i.pinimg.com/736x/8b/70/50/8b70503d7ffc26ad5a89ce4c4ce231f9.jpg",
        url: "https://discord.gg/6CsZXs2DxN"
    },
    {
        id: 3,
        name: "Github",
        designation: "muhammadpadanta",
        image: "https://assets.dryicons.com/uploads/icon/svg/8312/cc33248a-e56e-4e7f-93f4-0e16350e5768.svg",
        url: "https://github.com/muhammadpadanta"
    },


];

export const asideParagraphs = [
    {
        text: 'Copyright © 2024',
        className: 'text-center',
    },
    {
        text: '1st Symphony',
        className: '',
    },
    {
        text: '. All Right Reserved.',
        className: '',
    },


];

// ---------------------------------

export const faqs = [
    {
        question: "What is 1st Symphony exactly?",
        answer:
            'we make getting tickets to your favorite concerts easy. Browse our curated selection of live music events, choose your seats, and book with confidence.',
    },

    { question: "How To receive my tickets after purchasing them?",
        answer: "After you complete your ticket purchase on our website, you will receive a confirmation email with details about your order. Your concert tickets will be delivered to you electronically via email." },

    { question: "Can I cancel or exchange my concert tickets after purchasing them?",
        answer: "Unfortunately, we are unable to offer cancellations or exchanges for concert tickets once they have been purchased." },

    { question: "Are there any age restrictions for attending concerts listed on your website?",
        answer: "Age restrictions for concerts vary depending on the event and venue. Some concerts may be open to all ages, while others may have age restrictions imposed by the artist or venue." },

    { question: "How do I know if my concert tickets are authentic?",
        answer: "We take the authenticity of concert tickets very seriously. When you purchase tickets through our website, you can rest assured that you are buying genuine tickets directly from authorized sellers or official ticketing partners." },

];

// ---------------------------------

export const artistDataold = [
    {
        title: "Twice",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/d98b6e954551c972386080b98ad7b60d.jpg#d98b6e954551c972386080b98ad7b60d",
    },
    {
        title: "Virgoun",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/462378a051090cdde996f5ffd54380a3.jpg#462378a051090cdde996f5ffd54380a3",
    },
    {
        title: "Mahalini",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/e319c808bb2538b77e02cb667c1f7394.jpg#e319c808bb2538b77e02cb667c1f7394",
    },
    {
        title: "BTS",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/0b1292a13c9a56b54886ebd58d452122.jpg#0b1292a13c9a56b54886ebd58d452122",
    },


    {
        title: "Yoasobi",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/76b01e2f38be328ea61dd752e1c69d63.jpg#76b01e2f38be328ea61dd752e1c69d63",
    },
    {
        title: "Newjeans",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/0970eefb5a3f0444f85429c2ddb5907c.jpg#0970eefb5a3f0444f85429c2ddb5907c",
    },
    {
        title: "Armada",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/2ecde8495a2b9b3dddef9e0afaf98897.jpg#2ecde8495a2b9b3dddef9e0afaf98897",
    },
    {
        title: "Blackpink",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/9663125192c3ba383344d0cbc5107f98.jpg#9663125192c3ba383344d0cbc5107f98",
    },

    {
        title: "Raisa",
        icon: <Musicicon />,
        image: "https://lastfm.freetls.fastly.net/i/u/770x0/f1ff45f4bb60312b3da0749d88a820e8.jpg#f1ff45f4bb60312b3da0749d88a820e8",
    },




];

// ---------------------------------

export const userInfo = [
    { label: 'Email:', value: 'danta.mail.com' },
    { label: 'Phone:', value: '+62 821 7577 4102' },
    { label: 'Address:', value: 'Batam, Indonesia' },
];

export const userProfile = [
    {
        type: 'image',
        src: 'https://avatars.githubusercontent.com/u/115600378?v=4',
        alt: 'Profile Picture',
        width: 128,
        height: 128,
    },
    {
        type: 'h2',
        text: 'Muhammad Padanta Tarigan',
        className: 'text-3xl font-bold text-center mb-4 text-white'
    },
    {
        type: 'p',
        text: 'Customer',
        className: 'text-center text-gray-400 mb-6'
    },
];
// ---------------------------------

export const heroWords = [
    {
        text: "We Are Ready To",
        className: "bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-xl xl:text-[2rem] 2xl:text-[3rem] drop-shadow-xl",
    },

    {
        text: "Tune in with You.",
        className: "bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl xl:text-[2rem]  2xl:text-[3rem] drop-shadow-xl",
    },
];

export const heroImages = [
    "/images/heroImages1.webp",
    "/images/heroImages2.webp",
    "/images/heroImages3.webp",
];

// ---------------------------------

export const PurpleImages = [
    {
        src: "/images/homeFeaturedArtist1.webp",
    },
    {
        src: "/images/homeFeaturedArtist2.webp",
    },
    {
        src: "/images/homeFeaturedArtist3.webp",
    },
    {
        src: "/images/homeFeaturedArtist4.webp",
    },
    {
        src: "/images/homeFeaturedArtist5.webp",
    },
    {
        src: "/images/homeFeaturedArtist6.webp",
    },
    {
        src: "/images/homeFeaturedArtist7.webp",
    },
    {
        src: "/images/homeFeaturedArtist8.webp",
    },
    {
        src: "/images/homeFeaturedArtist9.webp",
    },



];

export const OrangeImages = [
    {
        src: "/images/homeFeaturedArtist10.webp",
    },
    {
        src: "/images/homeFeaturedArtist11.webp",
    },
    {
        src: "/images/homeFeaturedArtist12.webp",
    },
    {
        src: "/images/homeFeaturedArtist13.webp",
    },
    {
        src: "/images/homeFeaturedArtist14.webp",
    },
    {
        src: "/images/homeFeaturedArtist15.webp",
    },
    {
        src: "/images/homeFeaturedArtist1.webp",
    },
    {
        src: "/images/homeFeaturedArtist2.webp",
    },
    {
        src: "/images/homeFeaturedArtist3.webp",
    },
];

// ---------------------------------

// ---------------------------------
export const PurplesImages = [
    {
        src: "/images/homeFeaturedArtist1.webp",
    },
    {
        src: "/images/homeFeaturedArtist2.webp",
    },
    {
        src: "/images/homeFeaturedArtist3.webp",
    },
    {
        src: "/images/homeFeaturedArtist4.webp",
    },
    {
        src: "/images/homeFeaturedArtist5.webp",
    },
    {
        src: "/images/homeFeaturedArtist6.webp",
    },
    {
        src: "/images/homeFeaturedArtist7.webp",
    },
    {
        src: "/images/homeFeaturedArtist8.webp",
    },
    {
        src: "/images/homeFeaturedArtist9.webp",
    },



];

export const OrangesImages = [
    {
        src: "/images/homeFeaturedArtist10.webp",
    },
    {
        src: "/images/homeFeaturedArtist11.webp",
    },
    {
        src: "/images/homeFeaturedArtist12.webp",
    },
    {
        src: "/images/homeFeaturedArtist13.webp",
    },
    {
        src: "/images/homeFeaturedArtist14.webp",
    },
    {
        src: "/images/homeFeaturedArtist15.webp",
    },
    {
        src: "/images/homeFeaturedArtist1.webp",
    },
    {
        src: "/images/homeFeaturedArtist2.webp",
    },
    {
        src: "/images/homeFeaturedArtist3.webp",
    },
];
// ---------------------------------