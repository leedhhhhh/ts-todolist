<div align="center">

# ToDoList 📰

<img src="https://user-images.githubusercontent.com/86703459/187608838-bc87e3d8-da61-49c9-98b8-1d3042ad36d1.gif" width="400" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/187608844-c2c53269-83dd-4e50-9a82-8e95e6357c61.gif" width="400" height="400" />
<img src="https://user-images.githubusercontent.com/86703459/187608846-c4893f19-d3d1-4d6e-b5d3-d567ab013319.gif" width="400" height="400" />

<br /><br />

# USE STACK 🔧

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHook-EC5990?style=flat-square&logo=React&logoColor=white"/>

<br /><br />

# 프로젝트 소개

TypeScript 와 React , Recoil 을 활용해 만든 TodoList 이다.

<br /><br />

# 개발시 고민했던 점 및 어려웠던 점

### 1. LocalStroage 사용
<img src="https://user-images.githubusercontent.com/86703459/187609555-ef39132b-8587-42d5-b5cd-b41441692a03.PNG" width="1000" height="400" />

<br /><br />

localStroage를 사용해 추가한 카테고리, 리스트를 브라우저가 닫히더라도 계속 유지하도록 했다.<br />
Recoil을 사용하는데에 익숙치 않아서 어떻게 코딩해줘야할지 고민하다가 <br />
Atom Effects는 부수효과를 관리하고 Recoil의 atom을 초기화 또는 동기화하기 위한 API 라는걸 기억하고 effects 안에 로직을 처리해주니 잘 반영된 것을 확인했다.

<br />

### 2. 카테고리 추가 기능
<img src="https://user-images.githubusercontent.com/86703459/187608846-c4893f19-d3d1-4d6e-b5d3-d567ab013319.gif" width="400" height="400" />

<br /><br />

Default 카테고리를 ENUM 으로 관리하다가 카테고리를 추가해주는 기능을 개발하기 위해 어떻게 하면 ENUM에 값을 추가해줄 수 있을까 고민하다가 결국 ENUM을 버리고
배열로 변경 후 기능 개발을 하였다. 값을 읽어오고 수정하는 Recoil 함수인 'useRecoilState' 을 사용해 만들었다.

<br /><br/>

### 3. 카테고리 이동 기능
<img src="https://user-images.githubusercontent.com/86703459/187611517-4b3667ed-5810-42cf-821a-a3dbf692685b.PNG" width="1000" height="400" />

<br /><br />

To do List를 추가해주고 카테고리를 이동하는데에 있어서 어떻게 중간에 있는 항목을 옮겨줄까 고민을 하다가 <br />
'findIndex' 를 사용하여 이동시키고싶은 항목의 key와 배열 안의 항목들의 key가 일치하는 것의 index 값을 가져와서 <br />
slice 를 사용해 배열을 잘라주는 식으로 기능을 개발했다. 자바스크립트 개념을 좀 더 단단하게 해둘 필요가 있다고 생각하게된 계기가 되었다.

<br /><br />

# 느낀점

Recoil의 편리성을 느낀 좋은 시간이였다. Recoil이라는 상태관리툴을 사용하지 않았다면<br />
상위컴포넌트에서 하위컴포넌트로 계속 props를 넘겨주는 작업을 진행해야했지만<br />
Recoil을 사용하고 그런 귀찮은 단계를 모두 건너뛰는 점이 매력적으로 다가왔다.<br />
또한 React나 TypeScript에 집중한 나머지 JavaScript 공부에 조금 소홀히 하고 있었는데<br />
위에서 말했듯이 카테고리를 이동하는 기능을 개발하면서 지금 사용하고 있는 모든 편리한 프레임워크나 툴의 근본은<br />
JavaScript 이며 JavaScript 공부에 조금 더 집중해야겠다는 계기를 가지게 해준 좋은 토이프로젝트였다.

</div>



