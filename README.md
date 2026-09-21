# Tests for GAD application

## Prepare

### Local recommended tools:

-   VSC
-   Git
-   Node >16

### Installation and setup

-   (optional) install VSC recommended plugins
-   install dependencies: `npm install`
-   setup Playwright with: `npx playwright install --with-deps chromium`
- install Husky:`npx husky init`
- added a lint command to Husky pre-commit hook: `echo "npm run lint" > .husky/pre-commit`
- UTF-8: `Set-Content -Path .husky/pre-commit -Value "npm run lint" -Encoding utf8`
or `node -e "fs.writeFileSync('.husky/pre-commit', 'npm run lint\n', 'utf8')"`