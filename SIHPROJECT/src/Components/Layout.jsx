
// src/components/Layout.jsx

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Placeholder imports - you will need to create these files
import Header from './Header';     // Your site's header component
import Sidebar from './Sidebar';   // Your site's sidebar/navigation component
import Footer from './Footer';     // Your site's footer component

function Layout({ children }) {
  // State to manage the sidebar visibility on mobile
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  // State to check if the view is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Effect to handle window resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // If resizing to desktop, ensure sidebar is open
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial render

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" min-h-screen flex">
      {/* This is the main container for the Sidebar.
        On desktop, it's always visible.
        On mobile, it appears as an overlay.
      */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="
              fixed top-0 left-0 h-full z-40 md:relative md:translate-x-0
             
            "
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} isMobile={isMobile} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {/* Your page content will be rendered here */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
