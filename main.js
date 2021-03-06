const { countReset } = require('console');
const fs = require('fs');

async function print(path) {
  const files = await fs.promises.readdir(path);
  for (const file of files) {
    core.info(file);
  }
}
print('./').catch(console.error);