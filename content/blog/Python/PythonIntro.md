---
title: (Python) Basic Statement, Datatype
date: "2020-08-18"
description: 
---


아래 내용은 <a href="https://docs.python.org/ko/3.8/tutorial/index.html">파이썬 자습서</a> 및 <a href="https://docs.python.org/ko/3.8/library/stdtypes.html">파이썬 라이브러리 내장형</a> 의 내용을 개인적인 사용 목적과 빈도에 따라 요약, 정리한 내용입니다. 

# 1. <a href="https://docs.python.org/ko/3.8/tutorial/controlflow.html">제어 흐름 도구</a>
## 1.(1) if 문
```py
if condition:
  code to run
elif condition:
  code to run
else:
  code to run
```

- 논리 연산 및 비교
  - == 
  - != 
  - <=, >=
  - and  / or / not

## 1.(2) for문
- 사용 방법

```py
for val in Data
  if (True):
    continue
  else:
    break 
  # 반복문 자체를 빠져나감.
else:
  print("for문이 끝나면 실행될 코드")
```
- 여기서 Data자리에 들어갈 수 있는 것들
  - range(start, end, interval)
  - str
  - list
  - tuple
  - dict
  - ...

## 1.(3) while문
```py
while conditon:
  if(not True):
    continue
  else:
    break
```

## 1.(4) 함수 정의

- 키워드 인자

```py
def keywordfunc(positionalArg, keywordArg="DefaultValue"):
  print(positionalArg, keywordArg)
keywordfunc("arg1") 
# 두번째는 default값이 나옴
keywordfunc("arg1", "arg2") 
# 두번째는 내가 넣은 값이 나옴
```


- 임의의 인자 목록: 인자의 개수가 불명확할 경우 (= javascript의 rest parameter)

```py
def thisisfunction(arg, *args):
  print(arg, args) # args는 튜플의 형식으로 출력
```

- list나 dict에 담긴 값을 인자로 전달할 때 (= javascript의 spread syntax)
  - list를 전달하기: *를 통해 전달 가능
  - dict를 전달하기: **를 통해 전달 가능. dict의 key값은 parameter의 이름이어야 하고, dict의 value값은 argument이어야 함.

```py
listArg = [1,2,3]
thisisfunction(arg, *arg)
dictArg = {"positionalArg":"argvalue", "keywordArg":"argvalue2"}  
# parameter : argument인 형태.
keywordfunc(**dictArg)
```

- 람다 표현식
  - lambda arg1,arg2: arg1*arg2
  - 함수의 인자로 들어갈 수 있음

```py
def make_incrementor(n):
  return lambda x: x + n
lamb = make_incrementor(42) 
# n값이 정해진 함수를 리턴
lamb(0) # 42
lamb(1) # 43
```

# 2.<a href="https://docs.python.org/ko/3.8/library/stdtypes.html#numeric-types-int-float-complex">내장형 연산자, 메서드</a>

## 2.(1) Numeric Types
- int, long: 정수 / float: 실수

- 연산
  - divmod(x,y): 몫, 나머지
    - x % y: 나머지
    - x // y: 몫
  - x**y: 거듭제곱 (또는 pow(x,y))
  - int(x) 정수변환, float(x) 실수변환
  - abs(x) 절대값
  - math.ceil(x) / math.floor(x): 올림 / 내림
  - round(x,[,n]): x를 n의 자리로 반올림.

## 2.(2) String Type
- 일종의 불변 시퀀스. 시퀀스 연산 가능.

- <a href="https://docs.python.org/ko/3.8/library/stdtypes.html#string-methods">Method</a>
  - str.find(substr[, start[, end]])
  - str.islower() / 
  - str.lower() / str.upper()
  - str.replace
  - str.split
  - str.join


## 2.(3) Sequence Types
- range
- List
- Tuple : 리스트와 같지만, 값을 변경할 수 없음

- <a href="https://docs.python.org/ko/3.8/library/stdtypes.html#common-sequence-operations">공통 시퀀스 연산</a>
  - x in s (x not in s)
  - s * n (= n * s)
  - s + t
  - s.count(x) : s에 등장하는 x의 총 수 

- <a href="https://docs.python.org/ko/3.8/library/stdtypes.html#mutable-sequence-types">가변 시퀀스 연산</a>
  - del s[i:j]
  - s.copy()
  - s.[i,i] = k
  - s.reverse()
  - s.remove(x)

- Formatting
  - % operation
  - str.format
  - f-string (python3.6~): f'{variable},{3+6}'

## 2.(4) Mapping Type
- Dict : key와 value로 이루어짐. javascript의 객체

- <a href="https://docs.python.org/ko/3.8/library/stdtypes.html#mapping-types-dict">operator</a>
  - len(dict)
  - del dict[key]
  - key in dict
  - dict.copy()
  - dict.keys() / dict.values() / dict.items() / dict.popitem()

## 2.(5) Set Types
- set: 'a = set([1, 2])'
- fronzenset

- <a href="https://docs.python.org/ko/3.8/library/stdtypes.html#set-types-set-frozenset">operator</a>
  - len(s)
  - x in s
  - set.add(element)
  - set.remove(element)
  - set.pop()
  - set `|` otherSet `|` ... (합집합)
  - set - otherSet - ... (차집합)
  - set & otherSet & ... (교집합) 

## 2.(6) 타입 간 전환
- list into a set: setval = set(listval)
- set into a list: list(setval)
