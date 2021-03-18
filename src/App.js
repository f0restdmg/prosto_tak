import React from "react";
import { Provider } from "react-redux";

import DetailElement from "@/components/table/DetailElement";
import Table from "@/components/table/Table";
import store from "@/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mt-4 mb-4">
        <Table />
        <DetailElement />
      </div>
    </Provider>
  );
};

export default App;
