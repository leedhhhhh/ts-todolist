//selector : atom의 output을 변형시키는 도구
import { atom, selector } from "recoil";

// export enum Categories {
//   "TO_DO" = "TO_DO",
//   "DOING" = "DOING",
//   "DONE" = "DONE",
// }

export let defaultCategories: string[] = ["해야 함", "하는 중", "끝"];

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoryState = atom<string>({
  key: "category",
  default: defaultCategories[0],
});

export const categoriesState = atom<string[]>({
  key: "categoriesState",
  default: JSON.parse(
    localStorage.getItem("categories") ?? JSON.stringify(defaultCategories)
  ),
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "category";
      const savedValue = localStorage.getItem(todoStoreKey);
      // setSelf() 함수 내에서는 Promise를 사용하거나 데이터를 비동기적으로 호출할 때 사용할 수 있다.
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "Todo";
      const savedValue = localStorage.getItem(todoStoreKey);
      // setSelf() 함수 내에서는 Promise를 사용하거나 데이터를 비동기적으로 호출할 때 사용할 수 있다.
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const cartegory = get(categoryState);
    return toDos.filter((toDo) => toDo.category === cartegory);
  },
});
