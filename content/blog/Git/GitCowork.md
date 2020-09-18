# Git basic 
git init : git 저장소를 초기화( 생성 ) 합니다.

git status : 저장소의 상태를 확인합니다.

git add '파일' : 해당 파일을 staging area에 추가합니다.

Tip* git add . 을 사용하면 수정한 모든 file 을 추가합니다. !! 무조건 좋은 방법이 아닙니다. !!

git commit -m '커밋 메시지' : staging area에서 local repo로 최종적으로 짧은 메시지를 포함해 저장합니다.

git clone '저장소url' : 해당 url의 원격저장소를 clone하여 local 환경에 추가합니다.

git remote add '저장소별칭 저장소url' : 로컬 저장소와 원격 저장소를 연결합니다.

git remote -v : 원격 저장소와의 연결 상태를 확인합니다. 연결된 저장소들의 별칭과 url을 확인할 수 있습니다.

git pull '원격저장소별칭 로컬브랜치' : 원격저장소를 로컬 브랜치로 가져와 병합합니다.

git push '원격저장소별칭 로컬브랜치' : 지정한 로컬 브랜치를 원격 저장소로 push합니다.

# git workflow (for pair)
### 둘 다
- 가져오기(둘 다)
fork
git clone

- 연결하기(둘 다)
git remote add pair `<`Repo URL for pairs fork`>` (user 서로)
git remote -v

### 첫번째 user
- 첫번째 user's local
git add .
git commit -'change'

- 첫번째 user's github
git push origin master(or branch name)

### 두번째 user
- 두번째 user's local
git pull pair master(or branch name)
git add .
git commit -m 'change 2'

- 두번째 user's github
git push origin master(or branch name)

### Conflict 해결하기

git comflict가 발생했을 때, 해결하는 방법

더 자세히는 git