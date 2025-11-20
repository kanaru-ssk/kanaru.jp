# Repository Guidelines

## エージェント向け共通指示

このリポジトリにアクセスするエージェントは、以降のやり取りを含め常に日本語で応答してください。
英語の入力があっても回答は日本語に統一します。
PRを作成するときは、指示がなければ最新のmainからブランチを切ってください。

## プロジェクト構成

```
/
├── .github/
│   └── workflows/
│       ├── deploy.yaml          # CD
│       └── static-analysis.yaml # CI
├── src/
│   ├── layouts/                 # ページで再利用するラッパーやHTMLテンプレート。
│   ├── lib/                     # ヘルパーやクライアントスクリプトなどの共有ユーティリティ。
│   ├── pages/                   # ページルート
│   └── styles/global.css        # グローバルスタイル
├── .prettierrc                  # Prettier設定
├── astro.config.ts              # Astro設定
├── eslint.config.mjs            # Eslint設定
└── tsconfig.json                # TypeScript設定
```

## ビルド・開発コマンド

- `npm run dev`：Astro開発サーバーを `http://localhost:4321` で起動しホットリロードを提供。
- `npm run build`：本番向け静的サイトを最適化して `dist/` に生成。
- `npm run preview`：`dist/` をローカルで配信し、本番挙動を検証。
- `npm run lint`：Prettierチェック後にESLintを実行し、整形や構文の問題を検知。
- `npm run format`：Prettierで整形しESLintの自動修正を適用。コミット前に必ず実行。

## コーディングスタイル

コンポーネントファイルはパスカルケース（例 `HeroBlock.astro`）、その他はケバブケース（例 `about-us.astro`）とする。

## コミット・PRガイドライン

- 1行目は英語の命令形・50文字以内（例 `feat: add hero animation`）。必要に応じて空行を挟み、72文字幅で背景や実装方針を本文に記述する。
- Issue/PRは `Refs #166` のようにフッターへ追記。論点が異なる変更は別コミット化し、微修正はローカルでスカッシュしてからpush。
- PR本文には変更概要、設定・依存差分、UI変更のスクリーンショット、`npm run lint` と `npm run build` の結果、関連レビュアーのメンションを含める。
