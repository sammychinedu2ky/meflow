const { countReset } = require('console');
const fs = require('fs');

async function print(path) {
  const files = fs.readdirSync(path);
  for (const file of files) {
    console.log(file);
  }
}
print('./').catch(console.error);