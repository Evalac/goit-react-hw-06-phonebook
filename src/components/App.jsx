import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import ContactBook from './Pages/ContactBook';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
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
