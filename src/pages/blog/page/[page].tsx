import Head from "next/head";

import type { NextPage, GetStaticProps } from "next";

import Blog from "components/common/Blog";
import Breadcrumbs from "components/common/Breadcrumbs";
import Pagination from "components/common/Pagination";

type Props = {
  blogPosts: PostNode[];
  pageNum: number;
  blogCount: number;
};

const BlogPage: NextPage<Props> = ({
  blogPosts,
  pageNum,
  blogCount,
}: Props) => {
  const title = "Kanaru | ブログ一覧 ページ" + pageNum;
  const description =
    "webエンジニア佐々木哉瑠のブログ一覧ページです。このページは" +
    pageNum +
    "ページ目です。";

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_URL + "/blog/page/" + pageNum}
        />

        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_URL + "/img/ogp.webp"}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />

        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main>
        <Breadcrumbs bread={[{ name: "blog" }]} />
        <Blog blogPosts={blogPosts} />
        <Pagination count={blogCount} category="blog" pageNum={pageNum} />
      </main>
    </>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  };
};
