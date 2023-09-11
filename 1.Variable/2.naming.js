// Naming
// 저장된 값을 잘 나타낼 수 있는 의미있는 이름을 짓는다.
// 이 변수에는 어떤 값이 들어있는가?를 바로 알 수 있도록 짓기!
/**
 *  변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분한다.
 * 추천: camelCase (likeThis)
 * 한국어 XX
 * 주석은 국내에서는 한국어로 작성 괜찮
 * 예약어 XX (ex: if, let etc)
 * 숫자로 시작 X
 * 특수문자 X, (_, & 두가지는 예외)
 * 이모지 X
 *
 */

let apple;
let redApple; // -> camelCase

// 나쁜 예제
let num = 20;
let audio1;
let audio2;

// 좋은 예제
let backgroundAudio;
let windAudio;

// 꿀팁!
let audioBackground;
let audioWind;
// 나중에 audio만 치면 여러 변수들을 알 수 있어서 이 방법 선호하기
