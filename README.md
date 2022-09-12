<div align="center">

# ToDoList 📰

<img src="https://user-images.githubusercontent.com/86703459/187608838-bc87e3d8-da61-49c9-98b8-1d3042ad36d1.gif" width="300" height="300" />
<img src="https://user-images.githubusercontent.com/86703459/187608844-c2c53269-83dd-4e50-9a82-8e95e6357c61.gif" width="300" height="300" />
<img src="https://user-images.githubusercontent.com/86703459/187608846-c4893f19-d3d1-4d6e-b5d3-d567ab013319.gif" width="300" height="300" />

<br /><br />

# USE STACK 🔧

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white" />
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>
</div>
<br /><br />

## 프로젝트 소개 및 목적

- [ ] 소개 : 타입스크립트를 사용한 ToDoList
- [ ] 개발기간 : 2022.08.29 ~ 2022.09.01 
- [ ] 팀원 : 1명 (개인프로젝트)
- [ ] 사용한 라이브러리: Styled-components, React
- [ ] 목적
  - [ ] TypeScript 숙달
  - [ ] Recoil을 사용한 상태관리

<br /><br />

## 개발시 고민했던 점 및 어려웠던 점

### 1. LocalStroage 사용
<img src="https://user-images.githubusercontent.com/86703459/187609555-ef39132b-8587-42d5-b5cd-b41441692a03.PNG" width="1000" height="400" />

<br /><br />

- [ ] localStroage를 사용해 브라우저가 닫히더라도 데이터를 계속 유지하도록함<br />
- [ ] Atom Effects는 부수효과를 관리하고 Recoil의 atom을 초기화 또는 동기화하기 위한 API 라는걸 기억하고 effects 안에 로직을 처리해주니 잘 반영된 것을 확인

<br />

### 2. 카테고리 추가 기능
<img src="https://user-images.githubusercontent.com/86703459/187608846-c4893f19-d3d1-4d6e-b5d3-d567ab013319.gif" width="400" height="400" />

<br /><br />

- [ ] Default 카테고리를 ENUM 으로 관리하다가 카테고리를 추가해주는 기능을 개발하기 위해 어떻게 하면 ENUM에 값을 추가해줄 수 있을까 고민
- [ ] ENUM을 배열로 변경해서 해결

<br /><br/>

### 3. 카테고리 이동 기능
<img src="https://user-images.githubusercontent.com/86703459/187611517-4b3667ed-5810-42cf-821a-a3dbf692685b.PNG" width="1000" height="400" />

<br /><br />

- [ ] 리스트를 추가해주고 카테고리 내 항목을 다른 카테고리로 어떻게 옮겨줄까 고민
- [ ] 'findIndex' 를 사용하여 이동시키고싶은 항목의 key와 배열 안의 항목들의 key가 일치하는 것의 index 값을 가져와서 slice 를 사용해 배열을 잘라줌으로써 해결
<br /><br />

## 느낀점

- [ ] Recoil의 편리성을 느낀 좋은 시간이였다. Recoil이라는 상태관리툴을 사용하지 않았다면 상위컴포넌트에서 하위컴포넌트로 계속 props를 넘겨주는 작업을 진행해야했지만 Recoil을 사용하고 그런 귀찮은 단계를 모두 건너뛰는 점이 매력적으로 다가왔다.
- [ ] React나 TypeScript에 좀 더 비중을 두면서 JavaScript 공부에 조금 소홀히 하고 있었는데
필요한 기능을 개발하면서 아무리 편하고 좋은 라이브러리라도 그런 라이브러리가 만들어질수 있었던 이유는 JavaScript 이며 JavaScript 공부에 조금 더 집중해야겠다는 계기를 가지게 해준 좋은 토이프로젝트였다.




