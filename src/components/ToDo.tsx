import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState, IToDo, toDoState } from "../atoms";

interface isActive {
  isActive: boolean;
}

const TodoLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  padding: 2.3rem;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0.1rem 0.1rem 0.4rem #2b2b2b;
  width: 100%;
  margin: 20px 0px;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Btn = styled.button<isActive>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  outline: 0;
  border: 0;
  max-width: 10rem;
  span:hover {
    color: white;
    transition: 0.3s;
  }
  :disabled {
    opacity: 0.4;
  }
  color: ${(props) =>
    props.isActive ? props.theme.errorTextColor : props.theme.textColor};
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(categoriesState);

  // 카테고리 이동
  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   const {
  //     currentTarget: { name },
  //   } = event;
  //   setToDos((oldToDos) => {
  //     const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
  //     const newToDo = { text, id, category: name as any };
  //     return [
  //       ...oldToDos.slice(0, targetIndex),
  //       newToDo,
  //       ...oldToDos.slice(targetIndex + 1),
  //     ];
  //     //splice => side effect : 원래 array가 변형되고 삭제된 elements를 return 함
  //     //slice => no side effect : 원래 array를 복제해 행해지고 결과물을 return 함
  //     //나는 배열 복제 굳이 안하고싶어서 그냥 slice 썼는데 splice 쓰고싶으면 배열 복제해서 사용하면됨
  //   });
  // };

  const onClick = (selectedCategory: string) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((oldToDo) => oldToDo.id === id);
      const newToDo = { text, category: selectedCategory, id };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  // 삭제
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      return oldToDos.filter((index) => index.id !== id);
    });
  };

  return (
    <TodoLi>
      <span>{text}</span>
      <BtnDiv>
        {Object.values(categories).map((availableCategory) => (
          <Btn
            isActive={false}
            disabled={availableCategory === category}
            onClick={() => onClick(availableCategory)}
          >
            {availableCategory}
          </Btn>
        ))}
        <Btn onClick={onDelete} isActive={true}>
          Delete
        </Btn>
      </BtnDiv>
    </TodoLi>
  );
}

export default ToDo;
