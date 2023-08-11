import { IStore } from "../store/TypesStore";

export const selectFilteredTodos = (store: IStore) => {
  if (store.activeFilter === 'completed') {
      return store.todos.filter(el => el.completed);
  }
  if (store.activeFilter === 'notCompleted') {
      return store.todos.filter(el => !el.completed);
  }
  return store.todos;
}