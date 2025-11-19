import "./globals.css";

// htmlタグのlang属性を動的に切り替えるため、htmlタグはpage.tsxで設定する
export default async function Layout({ children }: LayoutProps<"/">) {
  return <>{children}</>;
}
