import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  categoriesState,
  categoryState,
  toDoSelector,
  toDoState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  padding: 100px 0px 30px 0px;
  font-size: 35px;
  font-weight: 1000;
`;

const Line = styled.hr`
  background: #f28b4b;
  height: 1px;
  border: 0;
`;

const ToDoBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Btn = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0.1rem 0.1rem 0.4rem #2b2b2b;
  padding: 7px 0px;
  border-radius: 10px;
  outline: 0;
  border: 0;
  color: #f28b4b;
  :hover {
    color: white;
    transition: 0.3s;
  }
`;

const PlusBtn = styled.button`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0.1rem 0.1rem 0.4rem #2b2b2b;
  padding: 7px 0px;
  border-radius: 10px;
  outline: 0;
  border: 0;
  color: #f28b4b;
`;

function ToDoList() {
  // 날짜
  let today = new Date();
  const year = parseInt(today.getFullYear().toString().substr(2));
  const month = today.getMonth() + 1;
  const date = today.getDate();
  // selector 에는 배열 안의 세개의 배열이 리턴되어있다.
  // 배열 안의 배열을 선택하려면 배열을 열고 순서대로 이름을 지정하면된다.
  // const [[],[],[]] = [[],[],[]]; 이 모양
  const toDo = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  // useRecoilState는 값을 읽어올수도있고 수정도 할 수 있다. useState 처럼
  const [categories, setCategories] = useRecoilState(categoriesState);

  // const onInput = (event: React.FormEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setCategory(value as any);
  // };

  const onClick = (category: string) => {
    setCategory(category);
  };

  const onPlus = () => {
    const newCategory = prompt("새로운 카테고리의 이름을 적어주세요.", "");

    if (newCategory) {
      if (categories.includes(newCategory)) {
        alert("같은 이름의 카테고리가 이미 있어서 추가할 수 없습니다.");
        return;
      }
      if (newCategory.length > 10) {
        alert("10자까지만 입력해주세요.");
        return;
      }
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
    }
  };

  return (
    <>
      <Container>
        <Header>
          {year}.{month}.{date}
        </Header>
        <ToDoBtn>
          {categories.map((availableCategory) => (
            <Btn onClick={() => onClick(availableCategory)}>
              <span>{availableCategory}</span>
            </Btn>
          ))}
          <PlusBtn onClick={onPlus}>
            <span>
              <PostAddIcon />
            </span>
          </PlusBtn>
        </ToDoBtn>
        <Line></Line>
        <CreateToDo />
        {toDo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </Container>
    </>
  );
}

export default ToDoList;
