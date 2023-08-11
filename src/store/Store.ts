import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { IStore, ITodos, TFilters } from './TypesStore';
import { mockData } from '../mock/todos';
import uuid from 'react-uuid';

const todos: ITodos = mockData;
const activeFilter: TFilters = 'all';

export const useStore = create<IStore>()(
    devtools(
        immer(
            persist(
                (set, get) => ({
                    todos,
                    activeFilter,
                    switchCompleted: id => {
                        set(state => {
                            state.todos = state.todos.map(el =>
                                el.id === id ? { ...el, completed: !el.completed } : el
                            );
                        });
                    },

                    deleteTodo: id =>
                        set(state => {
                            state.todos = state.todos.filter(el => el.id !== id);
                        }),
                    addTodo: title =>
                        set(state => {
                            state.todos.unshift({ id: uuid(), title, completed: false });
                        }),
                    setFilter: filter => {
                        set({ activeFilter: filter });
                    },
                    patchTodo: (id, newTitle) => {
                        set(state => {
                          state.todos = state.todos.map(el => {
                            return el.id === id ? {...el, title: newTitle}: el
                          })
                        
                        })
                    
                    }

                }),
                {
                    name: 'store',
                    partialize: store => {
                        return {
                            todos: store.todos,
                        };
                    },
                }
            )
        )
    )
);
