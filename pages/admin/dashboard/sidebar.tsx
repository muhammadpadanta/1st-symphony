import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {BsMusicNoteBeamed} from "react-icons/bs";

const Sidebar = () => {
  const router = useRouter();

  return (
      <div className="h-full bg-gray-800 bg-opacity-80 w-56 new-rocker-regular flex flex-col justify-between">
        <div className="p-6" style={{filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 1))"}}>
          <div className="flex items-center mb-10 hover:opacity-70 transition-all">
            <BsMusicNoteBeamed className="w-5 h-5 text-yellow-400 mr-2 mt-2"/>
            <div className="text-[#FFC107] font-bold text-lg flex justify-between xl:text-xl">1st Symphony</div>
          </div>

          <ul>
            <Link href="/">
              <li className={`mb-4 flex items-center space-x-2 group ${router.pathname === '/' ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/home.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname === '/' ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname === '/' ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>HOME</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/accounts">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith('/admin/accounts') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/users.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith('/admin/accounts') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith('/admin/accounts') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>USER</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/artists">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith ('/admin/artists') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/singer.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith ('/admin/artists') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith ('/admin/artists') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>ARTIST</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/songs">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith ('/admin/songs') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/songlist.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith ('/admin/songs') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith ('/admin/songs') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>ARTIST SONG</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/concerts">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith ('/admin/concerts') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/concerts.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith ('/admin/concerts') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith ('/admin/concerts') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>CONCERT</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/tickets">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith ('/admin/tickets') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/ticket.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith ('/admin/tickets') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith ('/admin/tickets') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>TICKET</label>
                </div>
              </li>
            </Link>

            <Link href="/admin/orders">
              <li className={`mb-4 flex items-center space-x-2 group hover:bg-gray-800 ${router.pathname.startsWith ('/admin/orders') ? 'bg-gray-800' : ''} rounded-full p-1 transition-all`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image src="/images/png/order.png" width={40} height={40} alt="concert" className={`bg-white ${router.pathname.startsWith ('/admin/orders') ? 'bg-yellow-300' : ''} group-hover:bg-yellow-300 rounded-full group-hover:scale-110 transition-all`}/>
                  <label className={`text-prime ${router.pathname.startsWith ('/admin/orders') ? 'text-yellow-300' : ''} group-hover:text-yellow-300 transition-all transform cursor-pointer font-bold`}>ORDER</label>
                </div>
              </li>
            </Link>





          </ul>
        </div>
      </div>
  );
};

export default Sidebar;