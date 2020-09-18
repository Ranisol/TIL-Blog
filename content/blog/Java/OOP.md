---
title: Java OOP
date: "2020-08-28"
description: 
---
# 생성자

## 생성자를 구현하는 방법

```java
class Calculator {
    int left, right;
    public Calculator(int left, int right) {
    this.left = left;
    this.right = right;
    }
}
```

## 상속시, default값의 필요성
위클래스가 상속받을 때, 사용자가 설정한 아래의 생성자가 아닌 기본생성자(Default)를 받도록 설정되어 있다.
따라서 기본생성자가 없다면 오류가 나게 되므로 따로 기본생성자를 생성해야 한다.

```java
class Calculator {
    int left, right;
    public Calculator(){     /*기본 생성자*/
    }
    public Calculator(int left, int right) {
    this.left = left;
    this.right = right;
    }
}
```

# 상속
- `class child extends parent`

## (1) Overriding
- Scope chain의 메소드 버전

- Overriding이 이루어졌다면, 자식 클래스에서 부모 클래스를 생성하더라도 부모 인스턴스는 Overriding이 이루어진 메소드를 사용한다.

```java
package org.opentutorials.javatutorials.polymorphism;
class A{
    public String x(){return "A.x";}
}
class B extends A{
    public String x(){return "B.x";}
    public String y(){return "y";}
}
class B2 extends A{
    public String x(){return "B2.x";}
}
public class PolymorphismDemo1 {
    public static void main(String[] args) {
        A obj = new B();
        A obj2 = new B2();
        System.out.println(obj.x()); //B.x를 뱉는다
        System.out.println(obj2.x()); // B2.x를 뱉는다
    }
```

## (2) Overloading
- 변수명이 같아도, 자료형이 다르면 공존할 수 있어.

### (3) 접근 제어자

#### 클래스 맴버의 접근제어자
- 클래스간 관계에 있어, 클래스 맴버의 scope를 강제하는 역할

1) public

2) protectecd
- 생성된 클래스 밖에서는 접근할 수 없음.
- 이를 해제하려면, 상속받으면 됨.

3) default: 제어자가 없는 경우
- 생성된 클래스 밖에서는 접근할 수 없음.
- 해제하려면 "상속관계 & 같은 패키지"이어야 가능.

4) private
- 생성된 클래스 밖에서는 접근할 수 없음 (클래스 내에서는 상호작용 가능)
- 해제 x

#### 클래스 자체의 접근제어자
- 패키지간 관계에 있어, 해당 클래스 자체의 접근 권한에 대한 설정.
- 클래스를 다른 패키지에서도 사용가능하게 할지를 결정할 수 있음.

1) public
- 파일명(`helloboy.java`)과 클래스명(`public class helloboy{}`)이 같다면, 다른 패키지에서도 사용가능.

2) default: 제어자가 없는 경우.
- 클래스를 같은 패키지에서만 사용가능하다.



# 인터페이스
- interface키워드로 생성하고 implements키워드로 인터페이스를 받아옴

- 내부 로직은 작성하지 않고, 변수명과 파라미터의 타입(메서드의 서명)만 정의해 둠.

- 인터페이스끼리 상속 가능하고, 인터페이스의 맴버는 public만 가능함. 

```java
interface {
    public void setOprands(int first, int second, int third) ;
    public int sum();
}
class A implements I{
    public void setOprands(int first, int second, int third){
    this.first = first;
    this.second = second;
    this.third = third;
    }
}
```

# 추상클래스
- 인터페이스 + 클래스. 따라서 서명만 정의해도 되고, 메서드의 로직을 적는 것도 된다.

- 사용하려면 클래스처럼 상속 필요.

```java
abstract class A{
// 추상클래스 내에는 추상 메소드와 메소드 모두 설정할 수 있다.
    public abstract int b();
// 추상메소드는 실행할 코드가 없어 상속받아야 한다. (상속을 강제한다고 볼 수 있다)
    public void d(){
        System.out.println("world");
    }
}
```