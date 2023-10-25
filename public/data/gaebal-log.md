![gabal-log](https://github.com/jhchoi1182/portfolio/assets/116577489/54d15845-3c8b-40e2-8b16-3ad34ebd2880)

### 개발로그

토론 + 블로그 기능이 합쳐진 커뮤니티 서비스입니다.

Next.js / TypeScript / React-query / Recoil / Tailwind CSS / React Testing Library / Jest / Socket.io

**[Role]**

- 프론트 리드, Git 플로우 담당
- 커뮤니케이션 담당, **협업 환경 개선 시도** ([**링크**](https://docs.google.com/spreadsheets/d/1Kn6DSUmul2mgmRETUAQXc50CldqjyQQy/edit?usp=sharing&ouid=113802457827216870841&rtpof=true&sd=true))

**[Feature]**

- **테스트 자동화**, **자동 병합**, **CI/CD파이프 라인 구축**
  - 테스트, 빌드가 실패하는 경우에도 병합하는 상황 발생
  - 깃 허브 액션 workflow를 적용해 **작업 편의성 개선**
- OAuth 2.0을 이용한 소셜 로그인 기능 구현
- 키워드 입력에 따른 실시간 검색어 추천 모달 컴포넌트 개발
- 영역 내 랜덤한 요소의 개수를 계산한 페이지네이션 기능 구현

**[Lessons Learned]**

- **Jest 숙련도 향상**
  - 리팩토링 과정에서 기능이 망가지는 일 발생 → 기능 + 유닛 단위의 TDD 방식을 적용
  - 모듈을 모킹할 수 있을 정도로 숙련도 향상 ([**링크**](https://jhchoi1182.tistory.com/232))
