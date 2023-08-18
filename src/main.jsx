import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './App';
import { AppProvider } from './context';
import './index.css';
// import './Testimonal.css';
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import ToggleChallenge from './imagesAli';
import LoanForm from "./LoanForm";
import SlowComponent from "./SlowComponent";
import { social, links } from './data';
import Error from './Error';
// import Modal from './Error';
import Modal from './Modal';
import Testimonials from './Testimonals';

links.map((link) => {
  const { id, url, text, icon } = link;
}
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       

   
    {/* <BrowserRouter>
      <AppProvider>
      <App />
      </AppProvider> */}

<BrowserRouter>
 <Routes>
        <Route path='/' element={ <AppProvider>
      <Product />
        </AppProvider>}
        >
          <Route index element={<ToggleChallenge />} />
          <Route path='team' element={<LoanForm />} />

          <Route path='projects' element={<SlowComponent />}/>
          <Route path='calendar' element={<Testimonials />}/>
          <Route path='documents' element={<Testimonials/>}/>
          <Route path='Messenger' element={<Modal/>}/>
          
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>


    </BrowserRouter>
  </React.StrictMode>
);
