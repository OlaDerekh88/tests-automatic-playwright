# Tests for GAD application

## GAD Application

Repository: https://github.com/jaktestowac/gad-gui-api-demo
Follow instructions in app README

## Prepare

### Local recommended tools:

- VSC
- Git
- Node >16

### Installation and setup

- (optional) install VSC recommended plugins
- install dependencies: `npm install`
- setup Playwright with: `npx playwright install --with-deps chromium`
- install Husky:`npx husky init`
- added a lint command to Husky pre-commit hook: `echo "npm run lint" > .husky/pre-commit`
- UTF-8: `Set-Content -Path .husky/pre-commit -Value "npm run lint" -Encoding utf8`
  or `node -e "fs.writeFileSync('.husky/pre-commit', 'npm run lint\n', 'utf8')"`
- prepare local env file: 'cp .env-template .env'
- copy application main URL as value of 'BASE_URL' variable in '.env' file

## Use

Run all tests:

```
npx playwright test

```

Run all tests with tags:

```
npx playwright test --grep "@GAD-R01-02"

```

Run all tests without tags:

```
npx playwright test --grep-invert "@GAD-R01"

```

Run test with tags several times:

```
npx playwright test --grep "@GAD-R03-01" --repeat-each=5
```

For more usage cases look in `package.json` scripts section.
