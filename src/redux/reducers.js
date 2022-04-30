import * as types from "./constants";

export const listReducer = (state = { listTodos: [] }, action) => {
  switch (action.type) {
    case types.CREATE_LIST:
      return {
        ...state,
        listTodos: [...state.listTodos, action.payload],
      };

    case types.UPDATE_LIST:
      const item = action.payload;
      return {
        ...state,
        listTodos: state.listTodos.map((e) =>
          e.id === item.todoId ? { id: item.todoId, value: item.value } : e
        ),
      };

    case types.DELETE_LIST:
      return {
        ...state,
        listTodos: state.listTodos.filter((e) => e.id !== action.payload),
      };
    default:
      return state;
  }
};
