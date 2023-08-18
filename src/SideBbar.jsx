import React, { useState } from 'react';
import ToggleChallenge from './imagesAli';
import LoanForm from "./LoanForm";
import SlowComponent from "./SlowComponent";

// import React from 'react';
import logo from './logo.svg';
// import { social, links } from './data';
// import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaFacebookMessenger,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
    content: <LoanForm />,

  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
    content: <ToggleChallenge />,
   
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
    content: <ToggleChallenge />,

  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
    content: <LoanForm />,

  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
    content: <LoanForm />,

  },
  {
    id: 6,
    url: '/Messenger',
    text: 'Messenger',
    icon: <FaFacebookMessenger />,
    content: <ToggleChallenge />,

  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
  {
    id: 6,
    url: 'https://www.twitter.com',
    icon: <FaFacebookMessenger />,
  },
];


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const [activeLinkId, setActiveLinkId] = useState(null); // To track the active link
  const [isContentVisible, setContentVisible] = useState(false);

  const handleLinkClick = (id) => {
    if (activeLinkId === id) {
      setActiveLinkId(null);
      setContentVisible(false);
    } else {
      setActiveLinkId(id);
      setContentVisible(true);
    }
  };


  // useEffect(() => {
  //   if (!isContentVisible) return; // If content is not visible, no need to set a timeout
  //   const timeoutId = setTimeout(() => {
  //     setContentVisible(false);
  //   }, 3000); // Set the timeout duration (in milliseconds), e.g., 3000 ms = 3 seconds

  //   return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount or when content visibility changes
  // }, [isContentVisible]);
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      {/* ... sidebar header */}
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon, content } = link;
          return (
            <li key={id}                
>
              <a
                href={url}  onClick={() => handleLinkClick(id)} // Call the handleLinkClick function
              
              >
                {icon}
                {text}
              </a>
             {activeLinkId === id && isContentVisible && content}
            </li>
          );
        })}
      </ul>
      {/* ... social links */}
    </aside>
  );
};

export default Sidebar;
