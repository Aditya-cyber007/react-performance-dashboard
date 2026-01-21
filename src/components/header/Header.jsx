import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../utils/navLinks';
const Header = () => {

  return (
    <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
      {/* Logo */}
      <Link to="/" className="text-lg font-semibold">
        ProMart
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-sm ${
                isActive ? 'text-blue-600 font-medium' : 'text-gray-700'
              } hover:text-blue-600`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default memo(Header);
