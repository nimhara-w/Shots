import { CakeSlice, MessageCircleCheck, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-smoky text-white px-8 pt-12 pb-7">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg font-gothic tracking-widest">Shots Coffee</p>
            <p className="text-sm text-white/40 mt-3 mb-5 max-w-xs leading-relaxed">
              Specialty coffee roasted with care. Visit us in the heart of the
              city.
            </p>
            <div className="flex gap-3">
              {[CakeSlice, MessageCircleCheck, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center
                             text-white/50 hover:text-white hover:border-white/40 transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              heading: "Visit",
              links: ["Our locations", "Hours", "Events", "Reservations"],
            },
            {
              heading: "Company",
              links: ["About us", "Blog", "Careers", "Contact"],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-medium tracking-widest text-white/35 uppercase mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Shots Coffee. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy policy", "Terms of service", "Cookie settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-white/30 hover:text-white/60 transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
