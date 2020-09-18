# 입출력

## 입력할때까지 실행 대기
- 이후 한 번 입력하면 끝

```java
import java.util.Scanner;
public class Scanner2Demo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i = sc.nextInt(); //실행되면 입력 있을때까지 값을 할당하지 않고 대기상태로 있게됨
        System.out.println(i*1000);
        sc.close();
    }
}
```

## 입력할때까지 실행 유보
- 입력할때마다 받아줌. 다시 실행할필요x

```java
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(sc.hasNextInt()) {
            System.out.println(sc.nextInt()*1000);
//sc.hasNextInt()는 입력값이 생기기 전까지 실행을 유보시키는 역할.
        sc.close();
        }
    }
```

- 파일 입력 받기

```java
package ...
impor java.util.Scanner;
public static void main(String[] args) {
    try {
        File file = new File("out.txt");
        Scanner sc = new Scanner(file);
            while(sc.hasNextInt()) {
            System.out.println(sc.nextInt()*1000);
            }
        sc.close();
        } 
    catch(FileNotFoundException e){
            e.printStackTrace();
    }
}
```

# 자료형
## Number
## Boolean
## Char, String
## Collection Frameworks
### List
### Array
- List + 정적 길이(길이제한)
### Generics
- Array + 타입 설정
### Map
- javascript의 객체

# 제어문
## if문
= javascript
- && / || / !
## switch case문
= <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch">javascrip</a>
## while문
= javascript
- 반복문은 모두 break, continue를 가지고 있음.
## for문
= javascript
## for each문
javascript의 for of나 for in과 똑같음.

# Scope
- 클래스 바로 아래 선언되었으면 일종의 전역 변수로 취급되는 반면, 메서드 내에서 선언된 변수라면 지역 변수로 취급됨.

# 예외 처리

## try catch (finally)
```java
try{
 예외 발생이 예상되는 로직(= 실행할 로직)
} catch (예외클래스의 인스턴스) {
    예외 발생시의 로직
} catch (예외클래스의 인스턴스) {
    예외 발생시의 로직
} finally {
    예외 여부와 상관없이 실행되는 로직
}
```

## throws: 예외 떠넘기기
- `throws 떠넘길 예외`로 기입하게 되면, 해당 예외가 발생시 상속받은 클래스에 이 예외처리를 떠넘기게 된다.

```java
class B{
    void run() throws FileNotFoundException, IOException {
        BufferedReader bReader = null;
        String input = null;
        System.out.println(input);
    }
}
class C{
    void run() throws IOException {
        B b = new B();
        try {
            b.run();
        } catch (FileNotFoundException e){
            e.printStackTrace();
        }
    }
}
public class ThrowExceptionDemo {
    public static void main(String[] args) {
        C c = new C();
        try {
            c.run();
        }catch (IOException e) {
            e.printStackTrace();
        }    
    }   
}
```

## throw: 예외 만들기
- 예외의 종류에는 Unchecked와 checked가 있다.
    - Unchecked의 경우, 예외만 발생시켜도 된다.
    - (must) Checked의 경우, throws로 넘기든, try catch로 해결하든 해야한다.

- 그렇다면 어떻게 예외가 Unchecked인지 Check인지 알 수 있는지?
    - 상위클래스에 RuntimeException이 있다면, Uncheck이다.

```java
public void divide(){
        if(this.right == 0){
            throw new ArithmeticException("0으로 나누는 것은 허용되지 않습니다.");
        }
        try {
            System.out.print("계산결과는 ");
            System.out.print(this.left/this.right);
            System.out.print(" 입니다.");
        } catch(Exception e){
            System.out.println("\n\ne.getMessage()\n"+e.getMessage());
            System.out.println("\n\ne.toString()\n"+e.toString());
            System.out.println("\n\ne.printStackTrace()");
            e.printStackTrace();
        }
    }
```

