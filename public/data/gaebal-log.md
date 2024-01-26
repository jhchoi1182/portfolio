![gabal-log](https://github.com/jhchoi1182/portfolio/assets/116577489/54d15845-3c8b-40e2-8b16-3ad34ebd2880)

###### TECHNOLOGY

##### Next.js · TypeScript · React-query · Recoil · Tailwind CSS · React Testing Library · Jest · Socket.io

###

###### INTRODUCTION

이 서비스는 블로그 기능에 Socket.io를 이용한 채팅 기능을 결합한 서비스입니다.

**TDD(Test-Driven Development) 방식으로 테스트 코드 작성에 중점**을 둔 프로젝트로, 리팩토링 과정의 불편함을 최소화하기 위한 목표를 가지고 진행되었습니다.

###

###### DESCRIPTION

#### 프론트 리드

- **Git 플로우 관리** 및 **백엔드와의 API 설계**
- 프로젝트 초기 단계에서 **mock API 도입**으로 서버 API 없이 사전 개발 진행

###

#### 기술적 의사 결정

- **기능별 라이브러리 테스트를 통해** WYSIWYG 에디터, Next 라우팅 방식, 소셜 로그인, 스타일 라이브러리, 채팅 기능 등에 대한 **결정** ([**링크**](https://indigo-dolphin-e56.notion.site/0ff5bd90b74c4c909fef54caaf0e729e?v=28ba70a7f6bb4d5db850f6bf864074ba&pvs=4))

###

#### OAuth 2.0 소셜 로그인

- **구글, 카카오, 깃허브** 소셜 로그인 구현

###

#### TDD 방식의 개발 진행

- **E2E, 기능, 유닛 단위 테스트 코드** 작성

###

#### CI/CD파이프 라인 구축

- Vercel을 통한 정적 배포 진행
- Github Actions Workflow를 사용해 push, merge 이벤트 발생 시 **코드 테스트와 빌드 자동화**
- 레포지토리 설정을 통해 **자동 병합 설정**

###

#### 기타 기능

- **에디터**(Ckeditor5) **라이브러리 커스터마이징**
- **랜덤**한 길이의 키워드가 영역 안에 가득 찰 경우 **페이지네이션** 되는 기능 구현
- 검색창에 입력 시 **추천 검색어**가 뜨는 **모달 컴포넌트 구현**

###

**더 자세한 기능 설명은 Github README를 통해 확인하실 수 있습니다.**

###

###### CONCLUSION

테스트 코드가 주는 편의성을 느낄 수 있었으며, 모듈 및 API 모킹을 통해 모든 **기능을 포괄적으로 테스트할 수 있는 능력이 향상**되었습니다.

이 과정을 통해 보다 **효율적인 개발 프로세스와 안정적인 코드 구현에 대한 깊은 이해**를 얻었습니다.
