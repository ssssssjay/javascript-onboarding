function problem1(pobi, crong) {
  var answer;
  // 5) 예외사항을 처리하는 과정
  if (isException(pobi) || isException(crong)) {
    answer = -1;
    return answer;
  }
  // 3) 플레이어 각각의 점수를 계산하는 과정
  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);
  // 4) 플레이어 점수를 비교하는 과정
  if (pobiScore > crongScore) {
    answer = 1;
  } else if (pobiScore === crongScore) {
    answer = 0;
  } else if (pobiScore < crongScore) {
    answer = 2;
  }
  return answer;
}

// 1) 페이지 숫자를 주면 합/곱중 큰 수를 리턴하는 함수
function calculatePage(pageNum) {
  let temp = [];
  while (pageNum > 0) {
    temp.unshift(pageNum % 10);
    pageNum = Math.floor(pageNum / 10);
  }
  const sum = temp.reduce((acc, cur) => acc + cur, 0);
  const multiply = temp.reduce((acc, cur) => acc * cur, 1);

  return sum > multiply ? sum : multiply;
}
// 2) 페이지 배열을 주면 가능한 4가지 케이스중 가장 큰 수를 리턴하는 함수
function calculateScore(pageArr) {
  const left = calculatePage(pageArr[0]);
  const right = calculatePage(pageArr[1]);
  return left > right ? left : right;
}

// 5) 예외사항을 처리하는 과정
// 짝홀로 입력된다(이건 제한사항에서 걸러진다고 생각한다)
function isException(pageArr) {
  const PAGE_LEFT = pageArr[0];
  const PAGE_RIGHT = pageArr[1];
  if (PAGE_RIGHT - PAGE_LEFT !== 1) {
    // 페이지차이가 1이 아니다
    return true;
  } else if (PAGE_LEFT < 1 || PAGE_RIGHT > 400) {
    // 1 ~ 400을 넘긴다
    return true;
  } else {
    return false;
  }
}

module.exports = problem1;
