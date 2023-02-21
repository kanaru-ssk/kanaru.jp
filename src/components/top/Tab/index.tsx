import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import About from "./About";
import Menu from "./Menu";

import Blog from "components/common/Blog";
import Loading from "components/common/Loading";
import Works from "components/common/Works";

export type TabStatus = "/" | "/works" | "/blog";

const Tab = () => {
  const router = useRouter();
  const [tabStatus, setTabStatus] = useState<TabStatus | undefined>(undefined);

  useEffect(() => {
    if (/^\/blog/.test(router.asPath)) {
      setTabStatus("/blog");
    } else if (/^\/works/.test(router.asPath)) {
      setTabStatus("/works");
    } else {
      setTabStatus("/");
    }
  }, [router.asPath]);

  return (
    <div>
      <nav className="sticky top-12 z-10 flex h-12 justify-evenly bg-white md:top-20">
        <Menu name="about" path="/" tabStatus={tabStatus} />
        <Menu name="works" path="/works" tabStatus={tabStatus} />
        <Menu name="blog" path="/blog" tabStatus={tabStatus} />
      </nav>

      {!tabStatus && <Loading />}
      {tabStatus === "/" && <About />}
      {tabStatus === "/works" && (
        <>
          <Works />
        </>
      )}
      {tabStatus === "/blog" && (
        <>
          <Blog />
        </>
      )}
    </div>
  );
};

export default Tab;
