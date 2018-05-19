import { lookup } from "@boostbank/stateful/lib/substore";
import SubStateConnector from "./SubStateConnector";

const checkForNumber = uid => {
  if(uid.length >= 1){
    if (!isNaN(uid.charAt(0))) {
      throw new Error("First character cannot start with number!");
    }
  }
};

const isValid = uid => {
  // eslint-disable-next-line
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(uid);
};

export default function connectTo(component, uid, connector) {
  if (typeof uid === "string") {
    checkForNumber(uid);
    if (isValid(uid)) {
      const registery = lookup();
      if (typeof connector === "function") {
        if (registery.hasOwnProperty(uid)) {
          SubStateConnector.listenTo(component, uid, connector);
        }
      } else {
        throw new Error("Connector must be a function!");
      }
    } else {
      throw new Error("UID cannot contain special characters!");
    }
  } else {
    throw new Error("UID must be string!");
  }
}
