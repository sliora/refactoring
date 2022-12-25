let area = height * width;

const companyName = '애플';

let _title = '제목없음';
let result = `<h1>${_title}</h1>`;

function title() {
    return _title;
}

function setTitle(arg) {
    _title = arg;
}