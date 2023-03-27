import NavItem from "./NavItem";
import ResumeLink from "./ResumeLink";

const PCNav = () => {
  return (
    <nav className="flex">
      <NavItem text="about" href="/#about" />
      <NavItem text="projects" href="/#projects" />
      <NavItem text="contact" href="/#contact" />
      <ResumeLink />
    </nav>
  );
};

export default PCNav;
