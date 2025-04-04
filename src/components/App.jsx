import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import ContactBook from './Pages/ContactBook';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header_app}>
        <nav className={css.nav_menu}>
          <ul className={css.nav_menu_list}>
            <li className={css.nav_menu_list_item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={css.nav_menu_list_item}>
              <NavLink to="contactBook">Contact-book</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactBook" element={<ContactBook />} />
      </Routes>
    </div>
  );
};
