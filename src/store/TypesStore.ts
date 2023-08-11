export interface IStore {
    todos: ITodos;
    activeFilter: TFilters;
    switchCompleted: (id: string) => void;
    deleteTodo: (id: string) => void;
    addTodo: (title: string) => void;
    setFilter: (filter: TFilters) => void
    patchTodo: (id: string, newTitle: string) => void
}

export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}

export type ITodos = ITodo[];

export type TFilters = 'all' | 'completed' | 'notCompleted';
