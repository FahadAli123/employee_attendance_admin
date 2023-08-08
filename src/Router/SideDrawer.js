import React, { useState, useEffect, useRef } from 'react';
import SideBar from '../Components/SideBar';
import { Link, Routes, Route } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

import logo from '../Assets/Images/logo.png';


function PageLayout({ children }) {

  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);


  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <SideBar />
      </div>

      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setToggleSideBar(true)}
          />

          <Link to="/">
            <img src={logo} alt="logo" className="w-32" />
          </Link>


        </div>

        {toggleSideBar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSideBar(false)}
              />
            </div>
            <SideBar closeToggle={setToggleSideBar} />
          </div>
        )}
      </div>

      <div className="p-4 flex-1 h-screen overflow-y-scroll " ref={scrollRef}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;