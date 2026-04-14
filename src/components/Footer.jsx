// function Footer() {
//     return (
//       <div className="bg-[#fff1b8]">
//         <a href="">
//           <img src="/create.png" alt="" />
//         </a>
//         <p className="mt-5">
//           <img src="/eventporte.png" alt="" />
//         </p>

//         <div className="bg-[#f4e6bb]">
//           <p>We outside!</p>
//           <p>
//             Get first access to early bird tickets to the hottest <br /> 
//             events, pro
//             tips on selling tickets, and exclusive <br />
//              access to our newest products& features
//           </p>
//           <input type="text" placeholder="Email address"/>
//         </div>
//       </div>
//     );
// }

// export default Footer

import {
  FaArrowRight,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#fff4c6]">
      <a href="">
        <img src="/create.png" alt="" />
      </a>

      <p className="mt-5 bg-[#fff4c6]">
        <img src="/eventporte.png" alt="" />
      </p>
      <footer className="bg-[#fff4c6] flex flex-col md:flex-row border-t border-black/10">
        <div className="p-10 md:w-1/3 bg-[#F5F2D9]/50 border-r border-dashed border-black/20">
          <h2 className="text-3xl font-serif mb-4">We outside!</h2>
          <p className="text-xs opacity-70 mb-8 max-w-xs leading-relaxed">
            Get first access to early bird tickets to the hottest events, pro
            tips, and exclusive access.
          </p>
          <div className="relative border-b border-black/30 pb-2 flex items-center">
            <input
              type="text"
              placeholder="Email address"
              className="bg-transparent outline-none w-full text-sm italic"
            />
            <FaArrowRight className="text-xs cursor-pointer" />
          </div>
        </div>

        <div className="p-10 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold tracking-widest opacity-50 uppercase">
                Menu
              </h3>
              <ul className="text-xs font-bold space-y-2 uppercase tracking-tight cursor-pointer">
                <li>Pricing</li>
                <li>About Us</li>
                <li>My Tickets</li>
                <li>Discover Events</li>
                <li>Eventporte for Creators</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold tracking-widest opacity-50 uppercase">
                Support
              </h3>
              <ul className="text-xs font-bold space-y-2 uppercase tracking-tight cursor-pointer">
                <li>Blog</li>
                <li>Faqs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[11px] mb-4">© 2026 Eventporte</p>
              <div className="flex gap-4 opacity-70 text-sm">
                <FaTiktok /> <FaLinkedinIn /> <FaXTwitter /> <FaYoutube />
              </div>
            </div>
            <div className="text-[10px] flex items-center gap-6">
              <span>📍 All Locations</span>
              <span className="cursor-pointer">Privacy</span>
              <span className="cursor-pointer">Terms</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex border-l-2 border-dashed border-black/20 px-8 items-center bg-[#FDF9ED]">
          <div className="h-4/5 w-12 bg-[repeating-linear-gradient(to_bottom,#000,#000_1px,transparent_1px,transparent_4px)] opacity-80" />
        </div>
      </footer>
    </div>
  );
}
