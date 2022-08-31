import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {

  useEffect(() => {
    AOS.init(
      {
        duration: 3000,
        once: true

      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout;