import NavItem from "./NavItem";
import ResumeLink from "./ResumeLink";

export const PCNav = () => {
  return (
    <nav className="flex items-center gap-8 md:gap-16">
      <NavItem text="about" href="/#about" />
      <NavItem text="projects" href="/#projects" />
      <NavItem text="contact" href="/#contact" />
      <ResumeLink />
    </nav>
  );
};
