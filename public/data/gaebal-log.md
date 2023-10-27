![gabal-log](https://github.com/jhchoi1182/portfolio/assets/116577489/54d15845-3c8b-40e2-8b16-3ad34ebd2880)

###### TECHNOLOGY

##### Next.js · TypeScript · React-query · Recoil · Tailwind CSS · React Testing Library · Jest · Socket.io

###

###### INTRODUCTION

기존 블로그 기능에 Socket.io를 이용한 채팅 기능이 결합된 서비스입니다.

이전 경험들에서 리팩토링 과정 중 불편함을 느낀 부분이 있었기에, **TDD 방식의 테스트 코드를 작성해보는 것을 목표**로 프로젝트를 진행하였습니다.

현재 기능 구현 중에 있습니다.

###

###### DESCRIPTION

#### 프론트 리드

- Git 플로우 담당
- 백엔드와 API 설계 후 프로젝트에 mock API 도입

#### 기술적 의사 결정을 위한 기능별 라이브러리 테스트 진행

- WYSIWYG 에디터, Next 라우팅 방식, 소셜 로그인, 스타일 라이브러리, 채팅 기능 테스트 ([**링크**](https://indigo-dolphin-e56.notion.site/0ff5bd90b74c4c909fef54caaf0e729e?v=28ba70a7f6bb4d5db850f6bf864074ba&pvs=4))

#### OAuth 2.0을 이용한 소셜 로그인 기능 구현

- 구글, 카카오, 깃허브 소셜 로그인 구현

#### TDD 방식의 개발 진행

- E2E, 기능, 유닛 단위 테스트 코드 작성
- msw를 사용해 mock api로 사전 개발 진행

#### CI/CD파이프 라인 구축

- Vercel로 프로젝트 배포 진행
- Github Actions Workflow를 이용해 push, merge 이벤트 발생 시 테스트 코드, 빌드 테스트 자동화
- 레포지토리 설정을 통해 자동 병합 설정

#### 기타 기능

- 에디터(Ckeditor5) 프로젝트에 맞게 커스텀
- 랜덤한 길이의 키워드가 영역 안에 가득 찰 경우 페이지네이션 되는 기능 구현
- 검색창에 입력 시 추천 검색어가 뜨는 모달 컴포넌트 구현

###

###### CONCLUSION

- 테스트 코드 숙련도 향상
  - 모듈 및 API 모킹을 통해 모든 기능을 포괄적으로 테스트할 수 있는 능력을 획득
