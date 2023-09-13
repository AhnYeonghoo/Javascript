// 문자열 함수들
const textObj = new String('Hello world');
const text = 'hello world';
console.log(textObj);
console.log(text);

console.log(text.substring(0, 2));
console.log(text[0]);
console.log(text[10]);
console.log(text[1]);
console.log(text.charAt(0));
console.log(textObj.toString().charAt(0));
console.log(text.length);

console.log(text.indexOf('l')); // 첫번째로 찾은 문자의 인덱스 번호 반환
console.log(text.lastIndexOf('l'));
console.log(text.includes('tx'));
console.log(text.includes('H'));
console.log(text.includes('h'));

console.log(text.startsWith('h'));

console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text);
const upperText = text.toUpperCase();
console.log(upperText);

console.log(text.substring(0, 3)); // 0 이상 3 미만
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '              space';
console.log(space.trim());

const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2));
