## 과정명

(디지털컨버전스) AWS 클라우드 융합 웹 프레임워크 개발자 양성과정A

## 인적사항

이름: 김강문  
평가일자: 2024-06-18  
전공: 컴퓨터공학

## 문제풀이 시작

### 다음 나열된 태그에 대해 간략히 설명하라.

- \<div> : 블록으로 해당 줄을 차지하는 태그.
- \<p> : 문단으로 나눌 때 쓰는 태그.
- \<a> : 링크를 달기위해 쓰는 태그.
- \<img> : 이미지를 불러올때 쓰는 태그.
- \<ul> / \<ol> / \<li> : ul은 (unordered)순서가 없는 리스트, ol은 (ordered)순서가 있는 리스트, li는 ul이나 ol에 속한 각각의 리스트 아이템 요소.

### Display 속성은 어떤 역할이며, 어떤 값들이 사용될 수 있는가?

요소의 레이아웃, grid, flex, table, block, inline 등등 다양한 값들을 이용할 수 있다.

### Margin과 padding 속성은 어떤 차이가 있는가?

margin은 해당 요소의 border 밖에서 자리를 차지하고, padding은 border 안에서 자리를 차지한다.

### Position 속성은 어떤 역할이며, 어떤 값들이 사용될 수 있는가?

문자그대로 자리를 차지하는 방식을 정의하며,

- static은 기본으로 설정된 요소의 position
- sticky는 다른 요소들에 영향을 받으면서 사용자가 화면의 스크롤을 올리거나 내리면 화면을 따라다닌다.
- fixed는 sticky와 달리 다른 요소들에 상관없이 항상 화면의 자리를 차지한다.
- absolute는 브라우저의 화면을 따라다니진 않고, 부모의 요소 중 relative를 가진 가장 가까운 요소에 따라 자리를 차지한다.

### Box-sizing 속성은 어떤 역할이며, 어떤 값들이 사용될 수 있는가?

요소의 height나 width에 padding이나 border값을 포함하는지 여부를 결정하는 속성이다.

- border-box는 height와 width의 값 안에 padding과 border가 포함되도록 한다.
- content-box는 height와 width의 값은 내용물만 계산하며, padding과 border가 추가될 경우, width와 height의 값과는 별개로 추가적으로 늘어난다.

### HTML과 CSS를 활용하여 다음과 같은 예시를 구현하라.

login 폴더로

### 전역변수와 지역변수에 대하여 설명하라.

전역변수는 최상위 스코프에서 선언된 변수이며, 지역변수는 최상위 스코프가 아닌 객체 내에서나 함수 내에서 선언된 변수다.

### Function Declaration / Function Expression / ArrowFunction에 대하여 각각의 예시코드를 작성하고 차이점을 기술하라.

```js
function example1() {} // Function Declaration
const example2 = function () {}; // Function Expression
const example3 = () => {}; // ArrowFunction
() => {}; // ArrowFunction
```

- Fucnction Declaration은 함수 선언식,
- function Expression은 함수를 변수에 대입한다.
- ArrowFunction은 Function Declaration의 익명함수 선언 방식 중 하나다.

### 다음과 같은 코드가 있을 때 출력되는 결과와 그 이유를 서술하라.

- 1번 코드

```js
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}

foo();
```

출력결과

```
10
```

이유는 함수는 호출되지 않으면 실행되지 않는다.

- 2번 코드

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```

출력결과

```
4
4
4
4
```

js는 비동기로 실행을 한다. 그러므로 setTimeout 함수가 종료될 때까지 기다리는 것이 아니라, setTimeout 함수를 실행시킨 이후에 return을 기다리지 않고 다음 줄로 넘어간다.  
그리고 약 1초 후에 4개의 console.log(i)가 일괄 실행되며, i는 4이기 때문에 4가 4번 출력되게 된다.

### 경일이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 경일이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 경일이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

- 1위 ~ 3위 학생은 여러명일 수 있고 1~3 위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
- 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하라

```js
// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6
const input = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];
const rank = new Set(input.sort((a, b) => b - a)).keys().toArray();
const output = input
  .map((item) => rank.indexOf(item) + 1)
  .filter((item) => item < 4).length;
console.log(output);
```

### 문자 pineapple 에는 apple 이라는 문자가 숨어 있다... 경일이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 한다.

- 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 한다.
- 그 문자가 시작하는 index를 반환하는 코드를 작성하라.

```js
function searchStr(str, search) {
  return str.search(search);
}
```

### 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고, 곱할 수 없다면 -1을 출력하는 코드를 작성하라.

```js
function matrixMul(a, b) {
  if (a[0].length != b.length) {
    return -1;
  }
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    let temp = [];
    for (let j = 0; j < b[0].length; j++) {
      temp.push(0);
    }
    arr.push(temp);
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      for (let k = 0; k < b[0].length; k++) {
        arr[i][k] += a[i][j] * b[j][k];
      }
    }
  }
  return arr;
}
```

### HTML,CSS,JavaScript를 사용하여 간단한 이미지 갤러리를 구현하라.

- 단, 이미지를 클릭했을 때 모달창을 띄워 보여주고 닫을 수 있어야 한다.

imgGallary 폴더로

### 사칙연산을 수행하는 계산기를 구현하라

calculator 폴더로

### ToDo 리스트를 구현하라.

- 각 ToDo 항목에는 완료 버튼이 존재하고 사용자가 완료한 항목을 체크할 수 있다.
- 사용자가 항목을 삭제할 수 있는 삭제버튼도 포함된다.
- 저장 기능을 구현하여 사용자의 Todo 항목을 브라우저의 로컬스토리지에 저장하고 페이지를 다시 로드해도 항목이 유지되도록 한다.

todo 폴더로

### 사진 슬라이더를 구현하라.(구현 실패)

- 여러 장의 이미지를 슬라이드로 보여주는 사진 슬라이더를 구현
- 사용자는 이전 및 다음 버튼을 클릭하여 이미지 전환 할 수 있다.
- 슬라이더는 일정 시간마다 자동으로 이미지를 전환할 수 있도록 설정한다.
