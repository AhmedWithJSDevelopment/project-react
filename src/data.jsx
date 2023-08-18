import React from 'react';
import ToggleChallenge from './imagesAli';
import LoanForm from "./LoanForm";
import SlowComponent from "./SlowComponent";

import {
// import Testimonials from './Testimonals';
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
    content: <SlowComponent />,

  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
    content: <SlowComponent />,

  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
    content: <SlowComponent />,

  },
  {
    id: 6,
    url: '/Messenger',
    text: 'Messenger',
    icon: <FaFacebookMessenger />,
    content: <SlowComponent />,

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



export const members = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png',
    name:'Shirley Fultz' ,
    job:'Designer' ,
    say:" It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site" ,
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png',
    name:'Daniel Keystone' ,
    job:'Designer' ,
    say:" The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers." ,
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png',
    name:'Theo Sorel' ,
    job:'Designer' ,
    say:" I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!" ,
  },

];
