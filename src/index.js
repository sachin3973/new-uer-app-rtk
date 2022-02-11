import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
