![drawingbear](https://github.com/jhchoi1182/portfolio/assets/116577489/db1dd0c5-73b5-4192-918d-74bad07041fd)

###### TECHNOLOGY

##### React.js · Redux · React-query · Styled-components · Socket.IO

###

###### INTRODUCTION

친구와 같이 쓰는 그림 일기 서비스입니다.

처음으로 어느정도 규모있는 프로젝트를 협업으로 진행하였고, **유저 테스트를 통한 실시간 피드백을 반영하여 UI/UX를 지속적으로 개선한** 특징이 있는 프로젝트입니다.

###

###### DESCRIPTION

#### 프론트 리드

- 동료의 작업 부담을 줄이기 위해 **레이아웃 퍼블리싱** 및 **백엔드와의 API 설계**를 주도

###

#### UT 결과 문서화 및 UI/UX 개선 ([링크](https://www.notion.so/6e112d9470024297875042712f0aa488?pvs=21))

- 튜토리얼 기능 추가, UI 변경 등을 통한 프로젝트 질 개선
- **진행 중인 프로젝트에 PWA를 적용**으로 UX 개선
- 피드백을 반영해 **Web Vitals 성능 점수 개선** (as-is: 50점, to-be: **99점**) **([링크](https://jhchoi1182.tistory.com/144))**
  - **컴파운드 컴포넌트 패턴 적용**하여 중복되는 레이아웃 통합
  - **React.lazy를 사용해 코드 스플리팅** 적용 ⇒ bundle.js 크기 축소

###

#### 기타 기능

- **Socket.IO를 이용한 채팅 및 무한 스크롤 구현**
- Axios interceptors를 활용해 **비인가 처리 자동화**
- **라이브러리 사용 없이 공휴일 API를 적용해 달력 기능** 구현
- Sourcemap 제거로 보안 강화

###

**더 자세한 기능 설명은 Github README를 통해 확인하실 수 있습니다.**

###

###### CONCLUSION

- 컴파운드 컴포넌트 패턴을 이용한 모달 개발을 통해 **클린 코드 방법론 고찰** **([링크](https://jhchoi1182.tistory.com/139))**
- **상태 값**과 **캐싱 된 데이터**, **서버 상태 관리**와 **상태 관리**에 대한 **이해도 향상 ([링크](https://jhchoi1182.tistory.com/141))**
  - 리액트 쿼리 로직 최적화로 **서버 요청 횟수 감소** (as-is: 2회, to-be: 1회)
- 전반적인 협업 툴 숙련도 향상
  - GitHub, Notion, Figma, Slack
  - **Git을 이용한 형상 관리 및 작업 관리**에 대한 완벽한 숙지
