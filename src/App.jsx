import Home from './Home';
// import Modal from './Modal';
import Sidebar from './Sidebar';
// import SideBbar from './SideBbar';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <Home />
      {/* <Modal /> */}
      <Sidebar />
      
            <Outlet />

      {/* <SideBbar /> */}
    </>
  );
};
export default Product;
