import { useState } from "react";
import MenuIcon from "@/components/atoms/MenuIcon";
import NavItem from "./NavItem";
import ResumeLink from "./ResumeLink";
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
          <NavItem text="projects" href="/#projects" onClick={hide} />
          <NavItem text="contact" href="/#contact" onClick={hide} />
          <ResumeLink />
        </nav>
      </SlideIn>
    </>
  );
};

export default SPNav;
