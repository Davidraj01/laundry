import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#12061f] via-[#1a0b2e] to-[#12061f] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="
        max-w-7xl mx-auto
        px-4 sm:px-6
        py-14 sm:py-18 lg:py-20
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-12 sm:gap-14
      ">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="
              w-11 h-11
              rounded-full
              bg-purple-600
              flex items-center justify-center
              font-bold
              text-lg
              shadow-md
            ">
              D
            </div>
            <div>
              <p className="font-semibold text-lg">Divine Laundry</p>
              <p className="text-xs text-white/70">
                Laundry | Ironing | Dry Clean
              </p>
            </div>
          </div>

          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Professional laundry service committed to delivering clean, fresh
            and perfectly pressed clothes.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 mt-6">
            <SocialIcon>
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon>
              <Facebook size={18} />
            </SocialIcon>
            <SocialIcon>
              <MessageCircle size={18} />
            </SocialIcon>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/75">
            {["Home", "About Us", "Services", "Pricing", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Laundry</li>
            <li>Dry Cleaning</li>
            <li>Steam Ironing</li>
            <li>Shoe Cleaning</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-purple-400 shrink-0" />
              <span className="break-all sm:break-normal">
                +91 99942 64467
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-purple-400 shrink-0" />
              <span className="break-all">
                info@divinelaundry.in
              </span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-purple-400 mt-1 shrink-0" />
              <span className="leading-relaxed">
                31/15, IAF Rd, Vinoba Nagar,<br />
                East Tambaram, Chennai – 600059
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-white/10" />

      {/* ================= BOTTOM BAR ================= */}
      <div className="
        max-w-7xl mx-auto
        px-4 sm:px-6
        py-5
        flex flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        text-sm
        text-white/60
        text-center
        md:text-left
      ">
        <p>© 2026 Divine Laundry. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
        </div>
      </div>

      {/* ================= FLOATING ACTION BUTTONS ================= */}
      <div className="
        fixed
        right-4 sm:right-6
        bottom-4 sm:bottom-6
        flex flex-col gap-3
        z-50
        safe-bottom
      ">
        {/* WHATSAPP */}
        <button
          aria-label="WhatsApp"
          className="
            w-11 h-11 sm:w-12 sm:h-12
            rounded-full
            bg-green-500
            flex items-center justify-center
            shadow-xl
            transition-transform
            hover:scale-105
          "
        >
          <MessageCircle className="text-white" />
        </button>

        {/* CALL */}
        <button
          aria-label="Call"
          className="
            w-11 h-11 sm:w-12 sm:h-12
            rounded-full
            bg-purple-600
            flex items-center justify-center
            shadow-xl
            transition-transform
            hover:scale-105
          "
        >
          <Phone className="text-white" />
        </button>
      </div>
    </footer>
  );
}

/* ================= SOCIAL ICON ================= */
function SocialIcon({ children }) {
  return (
    <div className="
      w-10 h-10
      rounded-full
      bg-white/10
      flex items-center justify-center
      cursor-pointer
      transition-colors
      hover:bg-white/20
    ">
      {children}
    </div>
  );
}
