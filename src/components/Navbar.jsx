import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  return (
    <nav className="w-full py-5 px-10">
      <div className="flex flex-row justify-start items-center gap-10">
        <a href="#home">
          <p className="font-gothic text-white text-xl"> Shots </p>
        </a>

        <ul className="font-base flex flex-row items-center gap-6">
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
