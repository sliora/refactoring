import fs from 'fs';

const fileName = process.argv[2];
if (!fileName) {
  throw new Error('파일 이름을 입력하세요');
}

const filePath = `./${fileName}.json`;
if (!fs.existsSync(filePath)) {
  throw new Error('파일이 존재하지 않습니다');
}

const rawData = fs.readFileSync(filePath);
const orders = JSON.parse(rawData);

let count;
if (process.argv.includes('-r')) {
  count = orders.filter((order) => order.status === 'ready').length;
} else {
  count = orders.length;
}
console.log(count);
