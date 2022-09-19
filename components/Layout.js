import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Script from "next/script";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id={`${process.env.MICROANALYTICS}`}
        async
        defer
      />
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
