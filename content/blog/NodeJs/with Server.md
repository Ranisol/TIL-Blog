---
title: Server API
date: "2020-09-18"
description: 
---
### 5.(5) 서버 요청하기
- 서버에 요청: 일반적으로 http(url)로 요청하게 됨.
  - 요청은 fetch API로
- 서버가 응답: 다양한 형태로 받을 수 있음(JSON, HTML, plain text등)
- 좀 더 알아보려면 using fetch라는 키워드로 찾아보기. 

```js
fetch('http://서버주소/weather?q=Seoul')  // 요청: url로 요청함.
.then(function(resp) {
  return resp.json(); // 응답: 응답 형식에 따라 resp.text() 가 될 수도 있다
})
.then(function(json) {
  console.log(json); // { tempature: 27 }
});
```

### 5.(6) API 사용하기
- 날씨 api:  https://openweathermap.org/API
- 다양한 api https://www.apistore.co.kr

