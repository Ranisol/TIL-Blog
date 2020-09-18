---
title: 깃허브 블로그를 만들어보자
excerpt: ""


category:
  - TIL
tag:
  - blog

toc: true
toc_label: "INDEX"
toc_sticky: true 

sidebar:
  nav: sidebar

---

# github블로그를 만들어보자
&nbsp;&nbsp;&nbsp;처음에는 단지 궁금해서 깃허브 블로그를 사용했는데, 점점 일이 커지고 있다. 마음에 안드는 부분들을 하나씩 건들다보니, sass뿐만 아니라 템플릿 태그를 건들고 있었다.  

&nbsp;일단 앞선 과정은 이렇다

## 1. github repository설정
&nbsp;&nbsp;&nbsp;깃허브에서 "자신의 github아이디/github.io" 라는 이름의 저장소를 만든다.

## 2. 테마 선택
&nbsp;&nbsp;&nbsp;테마는 <a href="https://github.com/topics/jekyll-theme">이곳</a>에 가면 볼 수 있다. 테마를 가져다 쓴단 말은 이미 인테리어에 가구까지 다 마련되어 있는 오피스텔에 입주하는거나 다름없다. 입주하는 방법도 간단하다. zip으로 다운로드 받고 내 저장소에다가 그대로 갖다 붙이면 된다. 나의 경우는 minimal mistakes라는 테마를 사용하는데, 이를 기준으로 포스팅 하려한다.

## 3. 로컬 구동
&nbsp;&nbsp;&nbsp;블로그를 변경하고, 제대로 바뀌었는지 보려면 git에 push를 해야하는데, 번거롭다. 이를 해결하기 위해 로컬로 구동을 할 수 있다. 과정은 <a href="https://ychae-leah.tistory.com/15">여기</a>를 참고하면 된다. 과정을 완료하면, 터미널에 jekyll serve를 기입해 구동할 수 있다.

# Quick-Start Guide
&nbsp;&nbsp;&nbsp;만일 minimal mistakes테마를 다운받았다면, <a href="https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/">여기</a>에서 블로그를 구현하기 위한 설명서를 제공한다. 자세히 나와있는 편이다. 다만, 일부 시행착오를 겪을 수 있는데, 이 포스트에서는 블로그를 구현하면서 마주했던 어려움 위주로 설명하려 한다.

## 1. config.yml
&nbsp;&nbsp;&nbsp;config.yml파일을 보자. 
### (1) theme, remote theme
&nbsp;&nbsp;&nbsp;먼저 굳이 건들지 않아도 되는 부분은 이 두가지이다. 이미 파일 전체를 다운로드받아 저장소에 저장했다면 필요 없어 보인다. 사실 설명서에도 이 부분을 건들여서 나도 이것저것 설정했는데, 그럴 필요가 없었다. 나는 기껏 다운받아서 저장소에 저장한 뒤에 또 remote theme를 설정했더니 자꾸 메일로 무슨 오류가 있다고 날라왔다. 그 두개가 구체적으로 어느 때 필요하고 무슨 원리인지까지는 전혀 모르겠지만, 적어도 나의 경우는 별다른 설정이 없어야 돌아갔다. 혹시나 여기서 애를 먹으신다면 그냥 주석처리하고 넘어가 보시길..

### (2) #site Setting 
- locale: 에다가 "ko-KR"를 해준다. 
- url: 그리고 설명이 잘 나와있는 부분이지만, 굳이 한번 더 언급하자면 여기에 내 깃허브의 실제 주소를 적어주면 된다. 

## (3) comments
&nbsp;&nbsp;&nbsp; 나는 disqus를 사용했다. 만일 disqus라면, shortname만 필요하다. 나는 <a href="https://devmjun.github.io/archive/addComments">여기</a>를 참고해서 설정했다. 잠고로 정말 짧아서 이걸로 되나 싶어 당황했는데, 이 테마의 경우, 복잡한 일은 _includes에서 해결해준다. 다른 테마의 경우, shortname이 아니라, disqus측에서 제공한 코드를 특정 html파일에 같다 붙여야 하는 경우도 있다.

&nbsp;&nbsp;&nbsp;그 다음 쭉쭉 내려가서 default를 보자.
```js
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
```
여기서 중요한 것은 comments분이다. 댓글 붙이는 곳을 구체적으로 지정해준다. post에 댓글을 달게 하는 것이 목적이니 post부분의 values에 comments를 true로 설정해주면 된다.

&nbsp;그리고 jekyll serve를 통해 로컬로 확인하면 안보여도, git에 push하면 보일 수 있다. 어떤 분은 로컬로도 된다고 하는데, 안되는 경우라면 push까지 한 뒤 확인해볼 필요가 있다.

## (4) anaytics
&nbsp;&nbsp;&nbsp;방문자를 확인하고 통계를 내주는 도구이다. 없이 사용해도 되는데, 답답함을 느낄 수 있다. 나는 <a href="https://simplehanlab.github.io/jekyll/minimal-mistakes/google-analytics/">여기</a>를 참고해 구글 애널리틱스를 설정했다. 링크된 포스트에서 맨 밑에가 중요하다. 어차피 tracking_id만 찾아서 오면 된다.

여기까지 오면 기본적인 설정은 완료된다. 나머지 커스텀한 설정은 다른 포스트에서 다루려고 한다.
