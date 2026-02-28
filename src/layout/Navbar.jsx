import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#experience",
    label: "Experience",
  },
];

const Navbar = () => {
  const [isMobileMenueOpen, setIsMobileMenueOpen] = useState(false);

  const [isScorlled, setIsScorlled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScorlled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScorlled ? "glass py-3 rounded-b-lg" : "bg-transparent py-5"}  z-50`}
      >
        <nav className="container mx-auto px-6 justify-between flex">
          <a
            href="#"
            className="text-2xl font-bold tracking-tight hover:text-primary transition duration-100 ease-in-out mt-1"
          >
            PS<span className="text-primary">.</span>
          </a>

          {/* desktop */}
          <div className="hidden md:flex items-center gap-1 bg-gray-800 rounded-full">
            <div className="galss rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition duration-100 ease-in-out"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {/* Contact Button */}

          <div className="hidden md:block">
            <Button size="sm">Contact Me</Button>
          </div>

          {/* Mobile Menue button*/}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenueOpen((prev) => !prev)}
          >
            <motion.div
              animate={{ rotate: isMobileMenueOpen ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenueOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menue */}
        {isMobileMenueOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setIsMobileMenueOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <div>
                <Button onClick={() => setIsMobileMenueOpen(false)}>
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
