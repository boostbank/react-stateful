import { getComponent, listen } from "./GlobalStateConnector";

export default function connect(component, updateCallback) {
  if (
    component !== undefined &&
    updateCallback &&
    typeof updateCallback === "function"
  ) {
    listen(component, updateCallback);
  }
  return getComponent().state;
}
