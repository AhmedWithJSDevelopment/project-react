import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='coding addict' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            // <li key={id}>
            //   <a href={url}>
            //     {icon}
            //     {text}
            //   </a>
            // </li>

             <NavLink key={id}
        to={url}
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
                {icon}
                {text}
      </NavLink>
          );
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            // <li key={id}>
            //   <a href={url}>{icon}</a>
            // </li>
              <NavLink key={id}
        to={url}
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
                {icon}
      </NavLink>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
