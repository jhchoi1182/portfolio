![jjabflix](https://github.com/jhchoi1182/portfolio/assets/116577489/ad7a30cb-5c01-4930-a004-5c0efec1ddd8)

###### TECHNOLOGY

##### React.js · TypeScript · React-query · Recoil · Styled-components · Framer-motion

###

###### INTRODUCTION

넷플릭스를 클론한 프로젝트입니다.

넷플릭스와 똑같이 만드는 것에 초점을 맞췄으며, **타입스크립트를 공부**하기 위한 목적으로 만든 프로젝트입니다.

###

###### DESCRIPTION

#### 성능 최적화 ([최적화 일지](https://jhchoi1182.tistory.com/185))

- layzy loading를 활용해 **렌더링 시간 80.61% 단축**
  - Intersection Observer API를 사용해 슬라이드의 50%가 보이면 슬라이드가 렌더링 되는 로직 개발
- **Web Vitals 성능 점수 개선** (as-is: 63점, to-be: **98점**)
- 메모이제이션을 이용해 리렌더링 최적화 작업

###

#### 반응형 웹 애플리케이션 구현

- 미디어 쿼리와 상태 값을 사용해 반응형 구현함으로써 UX를 개선

###

#### 넷플릭스 공식 홈페이지에서 발생하는 버그 없이 슬라이드 기능 구현 ([링크](https://jhchoi1182.tistory.com/176))

###

###### CONCLUSION

- 라이브러리에 대한 의존도 감소
  - 라이브러리 오류를 겪으며 오류를 해결하기 위해 다양한 문제 해결 접근 방식을 시도
  - 그 과정에서 **리액트 업데이트 방식**과 **프로젝트 특성을 고려한 기술적 의사 결정의 중요성**에 대해 학습
  - JavaScript와 React만으로 개발하는 습관을 들여 기능 원리를 깨우치고, 개발에 도움이 되는 레퍼런스 축적 중
- 타입스크립트 숙련도 향상
  - 프로젝트 안정성을 높이기 위해 any 타입과 as 사용 없이 프로젝트를 완성
