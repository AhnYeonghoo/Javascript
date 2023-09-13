// 날짜 관련 함수들
console.log(new Date());
// 현재 시간이 출력
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-16T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay()); // 0 ㅇ일요일부터, 1... 6: 토요일
console.log(now);
console.log(now.getSeconds());
console.log(now.getTime());
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
