import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

interface IFormData {
  toDo: string;
}

const SubmitForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const SubmitInput = styled.input`
  border-radius: 10px;
  border: 0;
  outline: 0;
  width: 100%;
  height: 30px;
  box-shadow: 0.2rem 0.1rem 0.5rem #585656;
  ::placeholder {
    color: "black";
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
`;

const Error = styled.span`
  display: flex;
  justify-content: center;
  color: #f28b4b;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<IFormData>();

  const onSubmit = ({ toDo }: IFormData) => {
    setToDos((oldToDos) => [
      ...oldToDos,
      { text: toDo, id: Date.now(), category: category },
    ]);
    setValue("toDo", "");

    if (toDo.length > 10) {
      setError(
        "toDo",
        { message: "10글자 이상은 제한됩니다." },
        { shouldFocus: true }
      );
    }
  };

  return (
    <>
      <SubmitForm onSubmit={handleSubmit(onSubmit)}>
        <SubmitInput
          {...register("toDo", {
            required: "Please write a To Do",
            maxLength: {
              value: 10,
              message: "10글자 이상은 제한됩니다.",
            },
          })}
          placeholder="Write a to do"
        />
      </SubmitForm>
      <Error>{errors?.toDo?.message}</Error>
    </>
  );
}

export default CreateToDo;
