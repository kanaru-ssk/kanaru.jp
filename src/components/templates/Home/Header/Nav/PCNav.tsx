import NavItem from "./NavItem";
import ResumeLink from "./ResumeLink";

const PCNav = () => {
  return (
    <nav className="flex gap-8 md:gap-16">
      <NavItem text="about" href="/#about" />
      <NavItem text="projects" href="/#projects" />
      <NavItem text="contact" href="/#contact" />
      <ResumeLink />
    </nav>
  );
};

export default PCNav;
