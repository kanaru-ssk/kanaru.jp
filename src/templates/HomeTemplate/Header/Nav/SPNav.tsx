import Image from "next/image";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { ResumeLink } from "./ResumeLink";
import { SlideIn } from "./SlideIn";

export const SPNav = () => {
  const [open, setOpen] = useState(false);
  const hide = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="py-3 px-4">
        <Image
          src="/img/menu-icon.svg"
          alt="menu-icon"
          aria-label="menu"
          width={20}
          height={14}
        />
      </button>
      <SlideIn isShown={open} onHide={hide}>
        <nav className="flex flex-col gap-8 pl-8 pt-14">
          <div onClick={hide} className="ml-6">
            <NavItem href="/#about">about</NavItem>
          </div>
          <div onClick={hide} className="ml-6">
            <NavItem href="/#project">project</NavItem>
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
