# kanaru-jp

## プロジェクト概要

個人サイト「kanaru.jp」のソースコード。

Astroで静的サイトを出力し、GitHub Actions / Pagesでホスティング。

## 公開URL

[kanaru.jp](https://kanaru.jp)

## 技術スタック

- [Astro v5](https://astro.build/)
- [TypeScript v5](https://www.typescriptlang.org/)
- [GitHub](https://github.com/) (Actions and Pages)

## プロジェクト構成

```
/
├── .github/
│   └── workflows/
│       ├── deploy.yaml          # CD
│       └── static-analysis.yaml # CI
├── src/
│   ├── assets/                  # 画像などのアセット
│   ├── layouts/                 # ページで再利用するラッパーやHTMLテンプレート
│   ├── lib/                     # ヘルパーやクライアントスクリプトなどの共有ユーティリティ。
│   ├── pages/                   # ページルート
│   └── styles/global.css        # グローバルスタイル
├── .prettierrc                  # Prettier設定
├── astro.config.ts              # Astro設定
├── eslint.config.mjs            # Eslint設定
└── tsconfig.json                # TypeScript設定
```

## 必要要件

- Node.js v24.x（LTS）
- npm v10 以上

## セットアップ

```sh
git clone https://github.com/kanaru-ssk/kanaru-jp.git

cd kanaru-jp

npm ci

npm run dev
```

http://localhost:4321 で開発サーバーが起動します。

## ビルド・開発コマンド

```sh
npm run dev     # Astro開発サーバーを `http://localhost:4321` で起動しホットリロードを提供。
npm run build   # 本番向け静的サイトを最適化して `dist/` に生成。
npm run preview # `dist/` をローカルで配信し、本番挙動を検証。
npm run lint    # Prettierチェック後にESLintを実行し、整形や構文の問題を検知。
npm run format  # Prettierで整形しESLintの自動修正を適用。コミット前に必ず実行。
```

## CI/CD

- PRを作成するとGitHub Actions(`.github/workflows/static-analysis.yaml`)が自動テスト。
- main ブランチへマージすると GitHub Actions（`.github/workflows/deploy.yaml`）が自動デプロイ。
