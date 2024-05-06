![image](https://github.com/jhchoi1182/pet-project-front/assets/116577489/3048682b-6ede-4a83-8fa5-3893bd142d0a)

###### TECHNOLOGY

##### **Frontend**

##### - Next.js · TypeScript · React-Query · Redux Toolkit · Tailwind CSS

##### **Backend**

##### - Spring Boot · Spring Security · Spring Data JPA · JWT · MySQL · S3

##### **Infrastructure**

##### - AWS EC2 · Docker Compose · Nginx · GitHub Actions

###

###### INTRODUCTION

이 프로젝트는 배운 기술을 실제로 적용하며 점진적으로 기능을 추가해 나가는 것을 목표로 진행되고 있는 개인 프로젝트입니다.

Next.js와 Spring Boot로 개발한 게시판 형식의 서비스입니다.

###

###### DESCRIPTION

### [Front-End]

#### 풀스택 개발

- **Next.js와 Spring Boot**를 활용해 사용자 친화적인 인터페이스와 강력한 백엔드 기능을 결합한 풀스택 웹 애플리케이션 개발
- Next.js 서버사이드 환경에서의 MongoDB 데이터를 Spring Boot **서버** API로 **마이그레이션 (렌더링 속도 46% 개선)**

###

#### 탄탄한 인증 로직 구현

- OAuth 2.0을 이용한 소셜 로그인
- axios에 **withCredentials**을 설정해 **인증 헤더 요청 자동화**
- 닉네임을 쿠키, 전역 상태값으로 관리하여 **새로고침에 대비**
- 인증 필요한 요청 성공 시 닉네임이 없으면 닉네임을 받아오는 api를 호출하여 **쿠키 수동 삭제에 대비**
- 미들웨어를 통한 비인가 처리 자동화 (애플리케이션 2.0 버전)

###

#### SEO 최적화

- 상세페이지를 SSR에서 ISR + SSR 혼합 방식으로 변경(**페이지 전환 속도 30.49% 개선**)
  - 상세 페이지에 ISR 방식을 사용해 SEO를 최적화하고 최신 데이터 유지를 위해 내용에 SSR을 사용
- 사이트맵 생성 후 Google Search Console에 등록(**구글 검색 결과에 서비스 노출**)

###

#### 성능 최적화

- **페이지네이션에 데이터 캐싱** 전략을 적용해 **페이지 이동 간 API 호출 최적화** 및 **리렌더링 속도 76.82% 개선**
- JavaScript로 정의된 CSS 스타일을 Tailwind CSS의 설정으로 이전하여 **FCP 속도 개선**(약 3~5%)
- promise.all 대신 React-query를 사용하여 상세 페이지 **API 요청 병렬처리 (최종 TTI 시간 31.73% 단축)**
- invalidateQueries를 **optimistic uptade**로 대체
  - patch, get요청 이후 리렌더링 → 변경과 동시에 patch 요청, 실패 시 롤백
  - **리렌더링 속도 69.64% 개선**
  - get요청 제거로 **불필요한 api 호출 횟수 감소 (2회 → 1회)**

###

#### 기타 기능

- **PWA 적용**
- **위지윅 에디터(CKEditor5) 프로젝트에 맞게 커스텀**

##

### [Back-End]

#### 불필요한 쿼리 요청 최적화

- 게시글 삭제 시 **벌크 업데이트**를 통해 데이터 처리 효율성을 증대시키고 서버 부하를 감소시킴
- **JOIN FETCH**를 통해 **JPA의 N+1문제 해결**
- **Spring Security를 통한 전역적 인증 절차** 구축과 추가적인 인증 절차 최소화로 **API 응답 시간 단축 및 쿼리 최적화**

###

#### 배포 프로세스 구축

- Docker 배포 시 메모리 부족으로 인한 **CPU 과부하 문제를 추가적인 스왑 공간 할당을 통해 해결**
- **Docker Compose**를 적용하여 Spring Boot와 MySQL **컨테이너의 관리를 간소화**
- GitHub Actions를 이용한 **CI/CD 파이프라인 구축으로 개발 생산성 향상**

###

#### 프로젝트 보안 강화

- **Nginx를 이용한 HTTPS 프로토콜을 구성**해 리버스 프록시를 통해 컨테이너에 연결, 사용자 데이터 보호 및 통신 보안 강화
- **Spring Security와 JWT 토큰**을 활용하여 사용자 인증 정보의 보안성 강화 및 접근 제어 메커니즘 구현
- 인증 쿠키에 httpOnly, secure, sameSite 설정을 통해 **XSS, CSRF 공격 대비**
  - 서버 URL을 프론트 엔드의 서브 도메인 주소로 전환하여 Chrome 서드 파티 쿠키 제한 이슈 해결

###

#### 조회수, 좋아요 기능 구현

- userID와 IP를 저장하는 entity를 각각 생성 후 post 테이블에 JOIN
- 로그인 유저의 경우 userId를, 비로그인 유저의 경우 IP를 DB에 저장하여 어뷰징 방지
- 좋아요의 경우 로그인한 유저만 가능하도록 하여 어뷰징 방지

###

#### 기타 기능

- 계층 간 데이터 관리의 효율성을 높여 안정적이고 간소화된 API 작업을 위해 **DTO 사용**
- **S3**에 연결하여 **이미지 파일 관리**
- Swagger를 통해 API 문서화

###

**더 자세한 기능 설명은 Github README를 통해 확인하실 수 있습니다.**

###

###### CONCLUSION

이 프로젝트를 통해 **REST API 설계 및 구현에 대한 심층적으로 이해**할 수 있었으며, 현대적인 웹 애플리케이션의 **아키텍처 설계 및 구축 능력을 향상**시켰습니다.

HTTPS와 JWT 토큰을 통한 **보안 접근 방식에 대한 개발 능력을 강화**했으며, **배포 과정를 통해** 내가 만든 프로젝트가 어떻게 배포되고 어떻게 해야 더 효율적일지에 대해 **고민하는 시간을 가질 수 있었습니다.**

이번 프로젝트 경험이 더 효율적이고 보안이 강화된 웹 애플리케이션을 설계하고 구현하기 위한 기틀을 닦는 데 큰 도움이 되었다고 생각합니다.
