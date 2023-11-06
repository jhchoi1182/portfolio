![drawingbear](https://github.com/jhchoi1182/portfolio/assets/116577489/db1dd0c5-73b5-4192-918d-74bad07041fd)

###### TECHNOLOGY

##### React.js · Redux · React-query · Styled-components · Socket.IO

###

###### INTRODUCTION

친구와 같이 쓰는 그림 일기 서비스입니다.

처음으로 어느정도 규모있는 프로젝트를 협업으로 진행하였고, **유저 테스트를 진행하고 피드백을 실시간으로 수정하며 UI/UX를 개선**시킨 프로젝트입니다.

###

###### DESCRIPTION

#### 프론트 리드

- 시간이 모자란 동료의 작업량을 덜어주기 위해 **레이아웃 퍼블리싱** 작업
- 백엔드와 같이 API 설계

###

#### **UT 결과 문서화 ([링크](https://www.notion.so/6e112d9470024297875042712f0aa488?pvs=21)), 피드백을 반영해 UI/UX를 개선**

- 튜토리얼 기능 추가, UI 변경 등 프로젝트 질 향상에 기여
- **진행 중인 프로젝트에 PWA를 적용**해 UX 개선
- 피드백을 반영해 **Web Vitals 성능 점수 개선** (as-is: 50점, to-be: **99점**) **([링크](https://jhchoi1182.tistory.com/144))**
  - 중복되는 컴포넌트 레이아웃으로 통합 (컴파운드 컴포넌트 패턴 적용)
  - React.lazy를 사용해 코드 스플리팅 적용 ⇒ bundle.js 크기 축소

###

#### 기타 기능

- Socket.IO를 이용한 채팅 및 **무한 스크롤 구현**
- Axios interceptors를 활용해 **비인가 처리 자동화**
- 라이브러리 사용 없이 공휴일 API를 적용해 달력 기능 구현

###

###### CONCLUSION

- 컴파운드 컴포넌트 패턴의 모달 개발하며 **클린 코드 고찰** **([링크](https://jhchoi1182.tistory.com/139))**
- **상태 값**과 **캐싱 된 데이터**, **서버 상태 관리**와 **상태 관리**에 대한 **이해도 향상 ([링크](https://jhchoi1182.tistory.com/141))**
  - 리액트 쿼리 로직을 변형하여 **서버로 가는 요청 횟수를 감소 (as-is: 2회, to-be: 1회)**
- 전반적인 협업 툴 숙련도 향상
  - 깃허브, 노션, 피그마, 슬랙
  - **git 완벽 숙지** (git을 이용한 형상 및 작업 관리)
