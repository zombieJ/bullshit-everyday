const bullshit = require('@lwys-pkg-releaser/node-bullshit-generator');
const fs = require('fs-extra');
const dayjs = require('dayjs');
const titleList = require('./title.json');

const title = titleList[Math.floor(Math.random() * titleList.length)];

let article = new bullshit().生成(title);

console.log(title, article);

article = `
# 每天一篇废话

> 使用 \`@lwys-pkg-releaser/node-bullshit-generator\` 生成，纯属娱乐。

## ${title}

\`${dayjs().format('YYYY-MM-DD')}\`

${article}
`.trim();

fs.writeFileSync('./README.md', article, 'utf8');
