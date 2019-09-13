import { listen } from "./GlobalStateConnector";

export default function connect(component, connector) {
  let store = null;
  if (
    component !== undefined &&
    typeof connector === "function"
  ) {
    store = listen(component, connector);
  }else{
    throw new Error("Connector must be a function!");
  }
  return store;
}
