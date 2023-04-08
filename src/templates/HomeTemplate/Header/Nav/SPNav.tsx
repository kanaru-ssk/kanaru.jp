import { ReactNode, useState } from "react";
import { MenuIcon } from "@/components/atoms/MenuIcon";
import { NavItem } from "./NavItem";
import { ResumeLink } from "./ResumeLink";
import { SlideIn } from "./SlideIn";

export const SPNav = () => {
  const [open, setOpen] = useState(false);
  const hide = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      <SlideIn isShown={open} onHide={hide}>
        <nav className="flex flex-col gap-8 pl-8 pt-14">
          <div onClick={hide} className="ml-6">
            <NavItem href="/#about">about</NavItem>
          </div>
          <div onClick={hide} className="ml-6">
            <NavItem href="/#projects">projects</NavItem>
          </div>
          <div onClick={hide} className="ml-6">
            <NavItem href="/#contact">contact</NavItem>
          </div>
          <NavItem href="/resume.pdf">
            <ResumeLink />
          </NavItem>
        </nav>
      </SlideIn>
    </>
  );
};
