import { useState } from "react";
import MenuIcon from "@/components/atoms/MenuIcon";
import NavItem from "./NavItem";
import SlideIn from "./SlideIn";

const SPNav = () => {
  const [open, setOpen] = useState(false);
  const hide = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      <SlideIn isShown={open} onHide={hide}>
        <nav className="flex flex-col gap-4 p-8">
          <NavItem text="about" href="/#about" onClick={hide} />
          <NavItem text="project" href="/#project" onClick={hide} />
          <NavItem text="contact" href="/#contact" onClick={hide} />
          <NavItem text="resume" href="/resume.pdf" onClick={hide} />
        </nav>
      </SlideIn>
    </>
  );
};

export default SPNav;
