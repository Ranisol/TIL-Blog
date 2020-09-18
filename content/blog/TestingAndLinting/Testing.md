# Test Framework
- 테스트 프레임워크의 종류는 다양함
  - mocha, <a href = https://www.chaijs.com/api/bdd>chai</a> 뿐만 아니라,
  - jest, should, supertest 등.

- 테스트 프레임워크의 구성요소는 대체로 세가지로 구성됨
  - 유닛 테스트 / Assertion / Matcher
  - 아래에서는 이 세가지에 대해 알아보도록 함.

- 1) 유닛테스트
  - 전체가 아닌 부분들 각각이 제 역할을 하는지 단위별로 테스트함.

- 2) 주장(Assertion): A는 B가 되어야 한다.
  - 이를 위해 'to.equal'이라는 chai의 Matcher를 사용할 수 있음 
    ```js
    let expected = 25
    let actual = square(5);
    expect(actual).to.equal(expected); // output은 equal안의 값과 같아야 한다.
    ```
  - 이러한 assertion은 다음과 같은 코드로 직접 만들 수도 있음
    ```js
    function assertEqual(actual, expected, testName) {
      if (actual === expected) {
          console.log("passed");
    } else {
          console.log(
            "FAILED " + testName + ": Expected " + expected + ", but got " + actual
      );
    }
    }
    ```

- 3) Matcher: 그리고 위 코드에서 "to.equal" 부분이 Matcher

- 4) 문제점: 배열과 객체는 비교하기가 힘들다.
  - 이를 해결하기 위해서는 JSON.stringify를 사용할 수 있다. 하지만 실제 서비스하는 코드로는 안전하지 않다고 한다. 
  - 또한 JSON.stringify를 쓰더라도, 객체는 순서가 없어서 이를 해결할 필요가 있다. 


# Tester
karma, mocha, chai, jest, jasmine

## Chai
- assert와 expect
  - assert
  - expect
```js
expect(actual).to.equal(expected);
```

## Mocha
- Chai와 병행해서 사용할 수 있다.
- descript와 it
  - descript: 테스트의 범위를 결정한다.
  - it: 테스트의 범위 내에서 단위 테스트를 실행한다.
```js
describe("카드번호가 어느 카드사인지 확인합니다.", function(){
      it("12자리수의 카드번호는 A사의 카드번호입니다."function(){
        return dectectcard(cardnumber) === "A카드사"  
  })
})
```