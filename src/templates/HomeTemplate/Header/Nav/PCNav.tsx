import { NavItem } from "./NavItem";
import { ResumeLink } from "./ResumeLink";

export const PCNav = () => {
  return (
    <nav className="flex items-center gap-12">
      <NavItem href="/#about">about</NavItem>
      <NavItem href="/#project">project</NavItem>
      <NavItem href="/#contact">contact</NavItem>
      <NavItem href="/resume_v4.pdf">
        <ResumeLink />
      </NavItem>
    </nav>
  );
};
