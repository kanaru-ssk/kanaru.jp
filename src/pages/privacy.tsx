import Head from "next/head";

import type { NextPage, GetStaticProps } from "next";

import { Privacy } from "types/wpPrivacy";

type Props = {
  privacy: Privacy;
};

const Privacy: NextPage<Props> = ({ privacy }: Props) => {
  const title = "プライバシーポリシー | Kanaru";
  const description =
    "佐々木哉瑠HPのプライバシーポリシーについて、個人情報保護に関する基本方針などをご案内しています。";

  return (
    <>
      <Head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_URL + "/privacy"} />

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

      <main className="min-h-[75vh] px-4">
        <h1>プライバシーポリシー</h1>
        <article>
          <h2>個人情報の取り扱いについて</h2>
          <p>
            当サイトでは、お問い合わせフォームにおいてメールアドレスを入力いただく欄ございます。
          </p>
          <p>
            入力頂いたメールアドレス及びお問い合わせ内容は、お問い合わせへの回答のために利用させていただくものであり、それ目的以外では利用いたしません。
          </p>
          <h2>広告について</h2>
          <p>
            当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
          </p>
          <p>
            クッキーを使用することで当サイトは訪問者のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
          </p>
          <p>
            Cookieを無効にする方法やGoogleアドセンスに関する詳細は「
            <a href="https://policies.google.com/technologies/ads?gl=jp">
              広告 - ポリシーと規約 - Google
            </a>
            」をご確認ください。
          </p>
          <h2>アクセス解析ツールについて</h2>
          <p>
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <h2>免責事項</h2>
          <p>
            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
          </p>
          <p>
            また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
          </p>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <h2>著作権について</h2>
          <p>
            当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止しています。
          </p>
          <p>
            当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
          </p>
          <h2>リンクについて</h2>
          <p>
            当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
          </p>
          <p>
            ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
          </p>
        </article>
      </main>
    </>
  );
};

export default Privacy;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
