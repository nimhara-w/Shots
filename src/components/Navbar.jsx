import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-10">
      <div className="flex flex-row justify-start items-center gap-10">
        <a href="#home" className="flex items-center gap-2">
          <img src="/icon.png" alt="logo" className="w-10 h-10" />
          <p className="font-gothic text-white text-2xl"> Shots </p>
        </a>

        <ul className="font-base flex flex-row items-center gap-10">
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
