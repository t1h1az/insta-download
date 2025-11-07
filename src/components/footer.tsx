"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (<>
    <footer className="flex justify-between w-full text-white py-4">
      <div className="container mx-auto text-center md:flex md:items-center md:justify-between px-4 ">
        <p className="text-lg md:flex-col md:justify-center">
          {/* <Link href="/login" className="hover:underline pr-2">
            Login
          </Link>
          <Link href="/registration" className="hover:underline pr-2">
            Signup
          </Link> */}
          {/* <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link> */}
        </p>
        <Link href="https://aey-studios.com" className="footer__aey-link">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} AEY Studios LLC. All rights reserved.
          </span></Link>
      </div></footer>
  </>
  );
}
