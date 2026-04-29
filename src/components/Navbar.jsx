import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex-1">
          <p> Shots Coffee </p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
