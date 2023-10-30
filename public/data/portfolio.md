![portfolio](https://github.com/jhchoi1182/portfolio/assets/116577489/f03fec3a-cae2-4b0b-a53b-26af46239cf9)

###### TECHNOLOGY

##### React.js · TypeScript · Recoil · Tailwind CSS

###

###### INTRODUCTION

개인 포트폴리오 전시 사이트입니다.

**pure CSS만으로 애니메이션**의 숙련도를 올리는 것을 **목표**로 만들었으며, 배경을 제외한 **모든 기능을 라이브러리 사용 없이 구현**한 것이 특징인 프로젝트입니다.

현재 리팩토링 작업 중에 있습니다.

###

###### DESCRIPTION

#### 각종 애니메이션

- 스크롤 이벤트에 따른 애니메이션 최적화
  - translate, opacity 등을 이용함으로써 reflow, repaint 최적화
  - 스크롤 이벤트와 리렌더링을 분리하기 위하여 ref 객체를 사용
  - 스크롤로 인해 요소가 렌더링 되는 시점에서만 렌더링이 일어나도록 구현
- transition, animation을 이용한 부드러운 애니메이션 구현
- 마우스 이벤트와 ref를 이용한 로고 눈동자 애니메이션 기능 구현

###

#### 양방향 무한 스크롤

- ref, 스크롤 이벤트를 이용해 위, 아래로 무한 스크롤 되는 기능 구현

###

#### CI/CD

- Github Pages로 프로젝트 배포 진행
- Github Actions를 활용해 push 이벤트 발생 시 자동 빌드, 배포 되도록 설정

###

###### CONCLUSION

- 애니메이션에 대한 숙련도 향상
  - 이 과정에서 **Stacking Context에 대해 잘못 알고 있었던 부분을 보완**
  - **Composite 개념에 대해 재점검**
