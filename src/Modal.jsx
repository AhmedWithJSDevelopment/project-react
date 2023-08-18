import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

import imageR from './assets/ali.jpg'
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(useGlobalContext.value)
    const {  openModal } = useGlobalContext();

  return (
    <>
      <div className='btnModal'>
         <button onClick={openModal} className='btn '>
        show modal
      </button>
      </div>
      
     <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <img src={imageR} alt="imageR" className='img' srcset="" />
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
    </>
   
  );
};
export default Modal;
