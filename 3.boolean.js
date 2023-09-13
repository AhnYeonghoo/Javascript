// Boolean
const isTrue = new Boolean(true); // Boolean 래퍼 객체로 생성
console.log(isTrue);
console.log(isTrue.valueOf());

/**
 * Falshy
 * 0, NaN, -0, null, undefined, ''
 */

// if (0.valueOf()) {
//     console.log("false");
// } else {
//     console.log('true');
// }

/**
 * Truthy
 * 1, -1, '0', 'false', [], {}
 */
