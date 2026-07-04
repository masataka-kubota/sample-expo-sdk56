# Expo SDK 56 Sample App 🚀

このリポジトリは、**Expo SDK 56** の新機能や挙動を検証するためのサンプル・サンドボックス環境です。
`app.json` を `app.config.ts` に移行し、環境変数（`APP_VARIANT`）による動的な設定切り替え、EAS Local Build、さらに高速な Linter/Formatter である `oxlint` や `oxfmt` を導入したモダンな構成になっています。

## 🛠 主な特徴・導入済みツール

- **Expo SDK 56** & React Native 0.85
- **TypeScript 構成 (`app.config.ts`)**: `process.env.APP_VARIANT` で `development`, `preview`, `production` のビルドバリアントを動的切り替え
- **EAS Build 構成 (`eas.json`)**: 各環境に応じたビルドプロファイルの設定、ローカルでの `eas build --local` の動作確認済み
- **高速な静的解析 / 整形**:
  - `oxlint` & `oxlint-config-universe` (超高速 Linter)
  - `oxfmt` (超高速 Formatter)
- **コミット前自動検証**: `husky` & `lint-staged` による Pre-commit フックの整備（保護ブランチへの直接コミット防止および自動Lint&Format）

---

## 🚀 開発の始め方

### 1. 依存関係のインストール

```bash
bun install
```

### 2. 環境変数の設定

`.env.example` を参考に、ローカル環境変数を用意します。

```bash
cp .env.example .env.local
```

### 3. アプリケーションの起動

開発用（Development）として Expo 開発サーバーを起動する場合：

```bash
bun run start
```

---

## 📦 EAS ローカルビルドの手順

本プロジェクトでは `eas-cli` を使用したローカルビルドが動作検証済みです。

### 環境変数を Expo 管理画面にプッシュ

```bash
eas env:push
# プロンプトが表示されたら `development` を選択
```

### Android 開発ビルドの作成 (Local)

```bash
eas build --local --platform android --profile development
```

ビルドが完了すると、プロジェクトのルートディレクトリに `.apk` ファイルが生成されます。これを実機やエミュレータにインストールしてテスト可能です。

### iOS 開発ビルドの作成 (Local)

```bash
eas build --local --platform ios --profile development
```

ビルドが完了すると、プロジェクトのルートディレクトリに `.ipa` ファイルが生成されます。これを実機やエミュレータにインストールしてテスト可能です。

---

## 🧹 リンター・フォーマッターの実行

### oxlint によるチェック

```bash
bun run lint
bun run lint:fix # 自動修正
```

### oxfmt によるコード整形

```bash
bun run format
bun run format:check # oxfmt によるチェック
```

これらは、コミット時に `husky` と `lint-staged` を通じて自動的にも実行されます。
