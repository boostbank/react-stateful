import React from "react";
import ReactDOM from "react-dom";
import PartitionProvider from "./components/PartitionProvider";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createPartition, createStore, getStore } from "@boostbank/stateful";
import uuid from "uuid/v4";

const id = uuid();

const test = ()=>{

};

console.log(test.prototype = {subId: "1234"});

console.log(test.prototype)

if (createPartition(id)) {
  const store = createStore.onPartition(id);
  console.log(store);
}

ReactDOM.render(
  <PartitionProvider>
    <App />
  </PartitionProvider>,
  document.getElementById("root")
);
registerServiceWorker();