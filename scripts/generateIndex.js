import fs from 'fs'
import path from 'path'

const content = `<!doctype html>
<html lang="nl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kerstcadeau</title>
    <!-- Preconnect and load Google Fonts for Reenie Beanie (improves mobile reliability) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`

const cwd = (typeof globalThis !== 'undefined' && globalThis.process && typeof globalThis.process.cwd === 'function') ? globalThis.process.cwd() : '.'
const outPath = path.resolve(cwd, 'index.html')

function writeIfNeeded(filePath, text) {
  try {
    if (fs.existsSync(filePath)) {
      const existing = fs.readFileSync(filePath, 'utf8')
      if (existing === text) {
        console.log('index.html is up-to-date')
        return
      }
    }
    fs.writeFileSync(filePath, text, 'utf8')
    console.log('Generated index.html')
  } catch (err) {
    console.error('Failed to write index.html:', err)
    // Bubble up so npm dev fails visibly
    throw err
  }
}

writeIfNeeded(outPath, content)
