"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (<>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          <Link href="/login" className="hover:underline pr-2">
            Login
          </Link>
          <Link href="/registration" className="hover:underline pr-2">
            Signup
          </Link>
          <Link href="/newsletter" className="hover:underline">
            Newsletter
          </Link>
          {/* <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link> */}
          </p></div></footer>
  </>
  );
}
