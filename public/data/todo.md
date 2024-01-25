![todo](https://github.com/jhchoi1182/next-todo/assets/116577489/c959ef3f-656d-4d22-b713-34fcf3006a44)

###### TECHNOLOGY

##### **Frontend** - Next.js · TypeScript · React-Query · Tailwind CSS

##### **Backend** - Spring Boot · Spring Security · Spring Data JPA · MySQL

##### **Infrastructure** - AWS EC2 · Docker Compose · Nginx · GitHub Actions

###

###### INTRODUCTION

React와 Spring Boot로 개발한 게시판 형식의 Todo 서비스로, 사용자, 할 일 목록, 댓글 기능이 포함된 서비스입니다.

백엔드와 프론트엔드 간의 효율적인 상호작용을 제공하며, **현대적인 웹 개발 아키텍처를 구현**했습니다.

###

###### DESCRIPTION

#### 풀스택 개발

- **Next.js와 Spring Boot**를 활용해 사용자 친화적인 인터페이스와 강력한 백엔드 기능을 결합한 풀스택 웹 애플리케이션 개발
- Next.js 서버사이드 환경에서의 MongoDB 데이터를 Spring Boot **서버** API로 **마이그레이션 (렌더링 속도 46% 개선)**

###

#### 불필요한 쿼리 요청 최적화

- Todo 삭제 시 벌크 업데이트를 실행하여 **Comment 삭제에 대한 쿼리 요청을 단일화**함으로써 데이터 처리 효율성을 증대시키고 서버 부하를 감소시킴
- **Spring Security를 통한 전역적 인증 절차** 구축과 추가적인 인증 절차 최소화로 **API 응답 시간 단축 및 쿼리 최적화**

###

#### 배포 프로세스 구축

- 프로젝트 일관성 유지를 위해 Docker 도입
- Docker 배포 시 메모리 부족으로 인한 **CPU 과부하 문제를 추가적인 스왑 공간 할당을 통해 해결**
- **Docker Compose**를 도입하여 Spring Boot와 MySQL **컨테이너의 관리를 간소화**
- GitHub Actions를 이용한 **CI/CD 파이프라인 구축으로 개발 생산성 향상**

###

#### 프로젝트 보안 강화

- **Nginx를 이용한 HTTPS 프로토콜 구성**으로 사용자 데이터 보호 및 통신 보안 강화
- **Spring Security와 JWT 토큰**을 활용하여 사용자 인증 정보의 보안성 강화 및 접근 제어 메커니즘 구현

###

###### CONCLUSION

이 프로젝트를 통해 **RESTful API 설계 및 구현에 대한 심층적인 이해**를 얻었으며, 현대적인 웹 애플리케이션의 **전체적인 아키텍처 설계 및 구축 능력을 향상**시켰습니다.

HTTPS와 JWT 토큰을 통한 **보안 접근 방식에 대한 개발 능력을 강화**했으며, **배포 과정를 통해** 내가 만든 프로젝트가 어떻게 배포되고 어떻게 해야 더 효율적일지에 대해 **고민하는 시간을 가질 수 있었습니다.**

이번 프로젝트 경험이 더 효율적이고 보안이 강화된 웹 애플리케이션을 설계하고 구현하기 위한 기틀을 닦는 데 큰 도움이 되었습니다.
