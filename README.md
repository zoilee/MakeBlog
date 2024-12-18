# MakeBlog

이 프로젝트는  블로그 작성을 위한 웹입니다.

사용자는 게시글을 작성, 수정, 삭제할 수 있으며, 댓글을 통해 상호작용할 수 있습니다.

---



## 사용 기술 스택

- **Frontend** : React
  - 사용자 친화적인 **UI 구성**
  - **Axios**를 사용하여 BackEnd 및 API와 연동
  - **OAuth login**: google, kakao, naver login api로 인증 구현
- **Backend** : Spring Boot
  - **RESTful API**를 설계하여 Frontend와 연동
  - **게시글 관리** : CRUD 기능 구현
- **Database** : MySQL
  - 데이터 저장 및 관리

---



## 주요기능

1. **게시글 관리**
   - 게시글 작성, 수정, 삭제, 조회
   - **파일 업로드** 지원 (ex : 이미지 첨부)
2. **사용자 인증**
   - **Google, Kakao, Naver login** api을 사용하여 간편 인증 구현
3. **댓글 기능**
   - 게시글에 대한 **댓글 작성 및 삭제**
   - 🚧*(현재 구현 중)*
4. **반응형 디자인**
   - **BootStrap**으로 심플한 디자인 및 반응형 제공

---

## 실행방법

1. Backend 에서의 `application.yml`에 MySQL 설정 추가

2. Frontend 에서의 의존성  설치 및 생성 `npm install`

3. `env.local` 생성 및 api key 등록

---

## 개선 및 진행 할 사항

1. Frontend 디자인 개선

2. 댓글 기능 추가








​    

   