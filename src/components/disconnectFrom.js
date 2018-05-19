import { lookup } from "@boostbank/stateful/lib/substore";
import { ignore } from "./SubStateConnector";

const checkForNumber = uid => {
  // eslint-disable-next-line
  const number = Number.parseInt(uid.charAt(0));
  if (!Number.isNaN(number)) {
    throw new Error("First character cannot start with number!");
  }
};

const isValid = uid => {
  // eslint-disable-next-line
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(uid);
};

export default function disconnectFrom(component, uid) {
  if (typeof uid === "string") {
    checkForNumber(uid);
    if (isValid(uid)) {
      const registery = lookup();
      if (registery.hasOwnProperty(uid)) {
        ignore(component, uid);
      }
    } else {
      throw new Error("UID cannot contain special characters!");
    }
  } else {
    throw new Error("UID must be string!");
  }
}
