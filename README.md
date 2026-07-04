# Expo SDK 56 Sample App 🚀

This repository is a sandbox environment designed to experiment with and verify the features and behavior of **Expo SDK 56**.

It features a modern React Native configuration, including dynamic environment swapping via TypeScript configuration (`app.config.ts`), local EAS builds (`eas.json`), and ultra-fast static analysis tools (`oxlint` and `oxfmt`).

For the Japanese version of this document, see [README.ja.md](./README.ja.md).

---

## 🛠 Key Features & Installed Tools

- **Expo SDK 56** & React Native 0.85
- **Dynamic Configuration (`app.config.ts`)**: Dynamically switches app name and bundle identifier (`development` / `preview` / `production`) based on the `APP_VARIANT` environment variable.
- **EAS Build Ready (`eas.json`)**: Pre-configured build profiles. Local building (`eas build --local`) has been fully verified and is ready to use.
- **Ultra-fast Linting & Formatting**:
  - `oxlint` & `oxlint-config-universe` (for extremely fast static analysis)
  - `oxfmt` (for blazing-fast code formatting)
- **Pre-commit Automation**: Managed via `husky` & `lint-staged` to automatically run linter/formatter on staged files and prevent direct commits to protected branches (like `main`/`develop`).

---

## 🚀 Getting Started

### 1. Install Dependencies

Using `bun` is recommended for this project:

```bash
bun install
```

### 2. Set Up Environment Variables

Copy the example file to create your local environment configuration:

```bash
cp .env.example .env.local
```

### 3. Start the Development Server

To start the Expo development server under the `development` variant:

```bash
bun run start
```

---

## 📦 Local EAS Builds

This project has been tested and verified to work with local EAS builds.

### Push Environment Variables to Expo Dashboard

```bash
eas env:push
# Choose `development` when prompted
```

### Build Android App Locally (.apk)

```bash
eas build --local --platform android --profile development
```

Upon completion, an `.apk` file will be generated in your project root, which can be installed on an emulator or a physical device.

### Build iOS App Locally (.ipa)

```bash
eas build --local --platform ios --profile development
```

Upon completion, an `.ipa` (or simulator build) will be generated, ready to run on your device or simulator.

---

## 🧹 Code Quality (Linting & Formatting)

### Lint with oxlint

```bash
bun run lint
bun run lint:format # Automatic fixing
```

### Format with oxfmt

```bash
bun run format
bun run format:check # Dry-run format check
```

These checks are also triggered automatically during your `git commit` process via Husky.
