# Craft Code Mizu — 個人事業主公式サイト

個人事業主として行う IT エンジニアリング業の公式サイトです。GMO あおぞらネット銀行の個人事業主口座開設時の事業内容説明、および将来的な取引先向けの事業紹介・問い合わせ窓口として利用します。

## 使用技術

- Vite
- React
- TypeScript
- Tailwind CSS
- pnpm
- ESLint
- Prettier
- GitHub Pages
- GitHub Actions

## 必要環境

- Node.js 22
- pnpm 10

## pnpm のインストール

### 方法 1: Corepack を使用（推奨）

```bash
corepack enable
corepack prepare pnpm@10.28.0 --activate
```

### 方法 2: npm 経由

```bash
npm install -g pnpm
```

## ローカル起動

```bash
pnpm install
pnpm dev
```

ブラウザで `http://localhost:5173` を開いてください。

## ビルド

```bash
pnpm build
```

ビルド成果物は `dist/` に出力されます。ローカルで確認する場合:

```bash
pnpm preview
```

## 品質確認

```bash
pnpm format
pnpm lint
pnpm build
```

## GitHub Pages への公開方法

1. このリポジトリを GitHub に push する
2. GitHub リポジトリの **Settings** → **Pages** を開く
3. **Build and deployment** の **Source** を **GitHub Actions** に設定する
4. `main` ブランチへ push すると `.github/workflows/deploy.yml` が自動実行され、ビルド・デプロイされます

初回デプロイ後、数分でサイトが公開されます。

## 想定される公開 URL

```
https://{GitHubユーザー名}.github.io/mizushima-web-studio/
```

リポジトリ名を変更した場合は、URL も変わります。

## 公開前に変更すべき項目

### 氏名・住所・メールアドレス

`src/config/business.ts` を編集してください。`TODO` コメントの付いた項目を必ず確認・変更してください。屋号は `tradeName` で変更できます。

### 契約形態・料金の説明文

`src/data/pricing.ts` を編集してください。具体的な金額は掲載していません。金額を公開する場合は `billingUnit` や説明文を変更してください。

### 開発経験・対応実績

`src/data/works.ts` を編集してください。会社員としての経験を含む場合は、注記文（`worksDisclaimer`）を維持してください。

### canonical URL と OGP URL

`index.html` 内の `TODO` コメント付き箇所を、実際の公開 URL に変更してください。

```html
<meta
  property="og:url"
  content="https://YOUR_GITHUB_USERNAME.github.io/mizushima-web-studio/"
/>
<link
  rel="canonical"
  href="https://YOUR_GITHUB_USERNAME.github.io/mizushima-web-studio/"
/>
```

### ページタイトル・メタ情報

必要に応じて `index.html` の `title` や `meta description` も更新してください。

## 独自ドメインを利用する場合

- GitHub Pages のカスタムドメイン設定を行う
- `index.html` の canonical URL と OGP URL を独自ドメインに更新する
- `vite.config.ts` の `base` は `'./'` のままで問題ないことが多いですが、デプロイ後にアセットの読み込みを必ず確認してください

## 注意事項

- 本サイトの公開だけで、銀行口座開設や取引先との契約が保証されるものではありません。審査や契約条件は各機関の規定に従います。
- 公開前に掲載内容が実態と一致しているか必ず確認してください。

## 公開前チェックリスト

- [ ] 氏名が申込内容と一致している
- [ ] メールアドレスが正しい
- [ ] 契約形態・料金の説明が実態に合っている
- [ ] 開発経験・対応実績を実態に合わせて確認した
- [ ] 公開 URL を canonical と OGP に設定した
- [ ] 誤字脱字を確認した
- [ ] スマートフォン表示を確認した
- [ ] `pnpm lint` が成功する
- [ ] `pnpm build` が成功する
- [ ] GitHub Pages でリンクとアセットを確認した
