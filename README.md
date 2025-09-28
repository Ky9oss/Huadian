# Huadian

# Quickstart

```bash
git clone https://github.com/Ky9oss/Huadian
cd Huadian
npm install
npx playwright install --with-deps chromium
npm run dev -- --host 0.0.0.0
```

# Build

```bash
cd Huadian
npm install
npm run build
npx playwright install --with-deps chromium
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```
