import React from "react";
import { Provider } from "react-redux";
import Table from "./components/table/Table";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <Table />
      </div>
    </Provider>
  );
};

export default App;
