import React from "react";
import FooterNav from "../components/FooterNav";

function Footer() {
  return (
    <div className="bg-[#a08679] p-8 sm:p-20">
      <div className="grid grid-cols-2 justify-items-center gap-10 p-10 sm:grid-cols-3 sm:gap-24 sm:p-24 lg:grid-cols-4">
        <div>
          <h1 className="mb-4 text-2xl text-black">Get In Touch</h1>
          <div className="mb-3 flex gap-2 text-xl text-white">
            <span>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <span>123 Street, New York, USA</span>
          </div>
          <div className="mb-3 flex gap-2 text-xl text-white">
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span>+012 345 67890</span>
          </div>
          <div className="mb-3 flex gap-2 text-xl text-white">
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span>info@gmail.com</span>
          </div>
          <div className="flex gap-2 text-white">
            <a
              href="https://www.youtube.com/channel/UCPLFNJnvveD4BpvzVB-clrg"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 text-lg text-white"
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/bodymirror_bysema?igsh=cmw2ZXIwamllY2Fj&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 text-lg text-white"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-2xl text-black">Quick Links</h1>
          <FooterNav />
        </div>

        <div>
          <h1 className="mb-4 text-2xl text-black">Regular Links</h1>
          <FooterNav />
        </div>

        <div>
          <h1 className="mb-4 text-2xl text-black">Opening Hours</h1>
          <div className="mb-4 flex flex-col text-xl text-white">
            <strong className="mb-2">Monday - Friday</strong>
            <time>8.00 AM - 8.00 PM</time>
          </div>
          <div className="mb-4 flex flex-col text-xl text-white">
            <strong className="mb-2">Saturday - Sunday</strong>
            <time>2.00 PM - 8.00 PM</time>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-white">
        <hr className="mx-auto mb-8 w-[70%]" />
        <p className="text-lg">
          &copy; Body mirror by Sema. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
