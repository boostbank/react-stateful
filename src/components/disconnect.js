import { ignore } from "./GlobalStateConnector";

export default function disconnect(component) {
  if (component !== undefined) {
    ignore(component);
  } else {
    throw new Error("Connector must be a function!");
  }
}
