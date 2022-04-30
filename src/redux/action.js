import * as types from "./constants";

export const createList = (item) => (dispatch, getState) => {
  dispatch({
    type: types.CREATE_LIST,
    payload: item,
  });
  localStorage.setItem("listTodos", JSON.stringify(getState().list.listTodos));
};

export const upadteList = (todoId, value) => (dispatch, getState) => {
  dispatch({
    type: types.UPDATE_LIST,
    payload: {
      todoId,
      value,
    },
  });
  localStorage.setItem("listTodos", JSON.stringify(getState().list.listTodos));
};

export const deleteList = (id) => (dispatch, getState) => {
  dispatch({
    type: types.DELETE_LIST,
    payload: id,
  });
  localStorage.setItem("listTodos", JSON.stringify(getState().list.listTodos));
};
