import { useWindowSize } from "@/hooks/useWindowSize";
import PCNav from "./PCNav";
import SPNav from "./SPNav";

const Nav = () => {
  const { width } = useWindowSize();
  if (width < 640) return <SPNav />;
  return <PCNav />;
};

export default Nav;
