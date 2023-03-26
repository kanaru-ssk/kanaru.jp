import NavItem from "./NavItem";

const PCNav = () => {
  return (
    <nav className="flex gap-4">
      <NavItem text="about" href="/#about" />
      <NavItem text="project" href="/#project" />
      <NavItem text="contact" href="/#contact" />
      <NavItem text="resume" href="/resume.pdf" />
    </nav>
  );
};

export default PCNav;
