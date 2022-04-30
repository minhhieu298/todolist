import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { listReducer } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
  list: listReducer,
});

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  list: {
    listTodos: JSON.parse(localStorage.getItem("listTodos"))
      ? JSON.parse(localStorage.getItem("listTodos"))
      : [],
  },
};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
