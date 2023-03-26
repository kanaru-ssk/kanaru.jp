import { useState } from "react";
import NavItem from "./NavItem";
import SlideIn from "./SlideIn";

const SPNav = () => {
  const [open, setOpen] = useState(false);
  const hide = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <svg width="48" height="48" fill="black">
          <rect x="14" y="23" width="20" height="2" />
          <rect x="14" y="17" width="20" height="2" />
          <rect x="14" y="29" width="20" height="2" />
        </svg>
      </button>
      <SlideIn isShown={open} onHide={hide}>
        <nav className="flex flex-col gap-4 p-8">
          <NavItem text="about" href="/#about" onClick={hide} />
          <NavItem text="project" href="/#project" onClick={hide} />
          <NavItem text="contact" href="/#contact" onClick={hide} />
          <NavItem text="resume" href="/#resume" onClick={hide} />
        </nav>
      </SlideIn>
    </>
  );
};

export default SPNav;
