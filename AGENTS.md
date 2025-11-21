# Repository Guidelines

## 応答ルール

- 常に日本語で応答

## コーディングルール

- コンポーネントファイルはパスカルケース（例 `HeroBlock.astro`）、その他はケバブケース（例 `about-us.astro`）とする
- 型定義はinterfaceではなくtypeを使う
- 可能な限り余分なコードを排除し、シンプルに保つ
- 可能な限り余分なpackageを排除し、シンプルに保つ

## コミット/PRルール

- 作業開始時は最新の `main` を取得し、トピックブランチ `feature/<topic>` を切る
- 複数のトピックを混在させない
- 大きな変更は段階的にブランチを分ける
- コミット前に`npm run format` → `npm run build`の順でチェック
- 1行目は英語の命令形・50文字以内（例 `feat: add hero animation`）。必要に応じて空行を挟み、72文字幅で背景や実装方針を本文に記述する
- Issue/PRは `Refs #166` のようにフッターへ追記
- 論点が異なる変更は別コミット化
- `gh pr`コマンドで`.github/pull_request_template.md`に則ってPRを作成する
