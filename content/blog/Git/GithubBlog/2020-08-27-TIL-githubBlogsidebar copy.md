---
title: 사이드바에 게시물 갯수 붙이기
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


# 파일 목록
- 이 과정에서 수정한 파일과 그 내용은 다음과 같다.
```
site
├── _data                   
|  ├── navigation.yml          #
|  └── ...            
├── _includes
|  ├── nav_list                # 사이드바에 카테고리 개수를 붙이는 로직 추가
|  └── ...
├── _layouts
├── categories.html         # 카테고리 페이지에 있던 상단 북마크를 제거
└── ...
```

## navigation.yml
- 카테고리를 children밑에 추가해줬다. 이는 nav.list에서 필요하기 때문에 생성했다. 
- 기능이 제대로 적용이 되려면, navigation.yml내의 category === 각각의 포스터 내의 category이어야 한다. (대소문자 같아야한다.)

수정 전(예시)
```yaml
sidebar:
  - title: "Daily Post"
    children:
      - title: "Today I Learned"
        url: /categories/#til      
```

수정 후(예시)
```yaml
sidebar:
  - title: "Daily Post"
    children:
      - title: "Today I Learned"
        url: /categories/#til      
        category: "TIL"    
```

## nav_list
- 수정 전: 
  - nav는 navigation.yml에서 가져오는 듯 보인다.
  - nav.children을 통해 children이라는 속성에 접근해 하나씩 가져온다. 그리고 그걸 child에 담는다.
  - child마다 새로운 tag를 생성하고 & 태그 사이에 템플릿을 넣어 필요한 내용을 가져온다. 

```yaml
    ...
        <ul>
          {/% for child in nav.children /%}   
            <li><a href="{{ child.url | relative_url }}"{/% if child.url == page.url /%} class="active"{/% endif /%}>{{ child.title }}</a></li>
          {/% endfor /%}
        </ul>
    ...
    # 탬플릿 태그 내의 /를 {와 %사이에 넣은건 Liquid syntax error가 나기 때문이다.. 
    # 아마 태그 내에 있는 것들도 전부 읽어 들이는 듯 하다. 
    # 따라서 실제로 이걸 사용하려면, 탬플릿 태그 내의 /는 다 빼야한다. 
    # (굳이 이거 안하고 그냥 작성하는 방법은 더 찾아봐야겠다..)
```

- 수정 후: 
  - 사실 site.categories가 어디서 가져오는 것인진 잘 모르겠다.
    - 대신, categories.html에 있던 로직을 뜯어봤다.
    - 하나하나 출력해본 결과, category[0]은 카테고리 자체의 이름을, category[1]은 카테고리 페이지를 뜻하는 것으로보인다.
    - 또한 category[1].size는 카테고리의 개수! 인 것으로 확인했다.
  - 따라서 목표는 category[1].size를 새롭게 생성되는 li태그 안에 넣는 것이다. 하지만, 여기 있는 문법이 파이썬인듯 아닌듯 낯설다. 찾아보니 장고인 것 같은데, 더 깊숙히 들어가기보단 일단 주변에 있는 문법들을 최대한 활용해 구현해봤다.
    - nav.children을 하나씩 뽑아준다.
    - site.categories에서 category[0] (카테고리 자체의 이름)을 뽑아준다.
    - category의 이름과 navigation.yml내의 category를 가져와 하나하나 비교해준다.
    - 두개의 이름이 같다면, span태그 내에 카테고리의 개수를 입력해준다.
  - 이렇게하면 일단 출력이 된다. 하지만 출력해보니 이쁘진 않아서 class를 추가로 삽입하고 관련된 sass파일을 수정해, (번호) 이런식으로 변화를 줬다.
    
```yaml
    ...
        <ul>
          {/% for child in nav.children /%}
            {/% for category in site.categories /%}
               {/% if child.category == category[0] /%}
                   <li><a href="{{ child.url | relative_url }}"{/% if child.url == page.url /%} class="active"{/% endif /%}>{{ child.title }}<span class="taxonomy__count">&nbsp;&nbsp;({{category[1].size}})</span></a></li>
              {/% endif /%} 
            {/% endfor /%}
          {/% endfor /%}
        </ul>
    ...
```

## categories.html
- ul의 class가 taxonomy__index인 부분을 주석 처리했다. 이는 카테고리 페이지 상단에 나타나는 부분인데, sidebar의 기능과 겹치기 때문이다.

```html
<!--
<ul class="taxonomy__index">
  {/% for i in (1..categories_max) reversed /%}
    {/% for category in site.categories /%}
      {/% if category[1].size == i /%}
        <li>
          <a href="#{{ category[0] | slugify }}">
            <strong>{{ category[0] }}</strong> <span class="taxonomy__count">{{ i }}</span>
          </a>
        </li>
      {/% endif /%}
    {/% endfor /%}
  {/% endfor /%}
</ul>
-->
```