import { getComponent, listen } from "./GlobalStateConnector";

export default function connect(component, connector) {
  if (
    component !== undefined &&
    typeof connector === "function"
  ) {
    listen(component, connector);
  }else{
    throw new Error("Connector must be a function!");
  }
  return getComponent().state;
}
