import { useState } from 'react';
// import Avator from '../../../assets/avator.jpg'
import ali7 from './assets/ali7.jpg'
import ali from './assets/ali.jpg'
import ali1 from './assets/ali1.jpg'
import ali2 from './assets/ali2.jpg'
import ali3 from './assets/ali3.jpg'
import ali4 from './assets/ali4.jpg'
import ali5 from './assets/ali5.jpg'
import ali6 from './assets/ali6.jpg'
import '../src/image.css';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className='modal-container' style={{background:"none"}}>
      <button className='btn' onClick={() => setShowAlert(!showAlert)}>
        Ali’s Images <span>🖼️ 👇</span> 
      </button>
      {showAlert && <Alert />}
    </div>
  );
};


const Alert = () => {
  return <div className='users'>
   
    <img className=''

    src={ali7} alt="ali7" />
    <img className=''
    src={ali} alt="ali" />
    <img className=''
    src={ali1} alt="ali1" />
    <img className=''
    src={ali2} alt="ali2" />
    <img className=''
    src={ali3} alt="ali3" />
    <img className=''
    src={ali4} alt="ali4" />
    <img className=''
    src={ali5} alt="ali5" />
    <img className=''
      src={ali6} alt="ali6" />
    
  </div>;
};
export default ToggleChallenge;
