import { lookup, subscribeTo } from "@boostbank/stateful/lib/substore";

const checkForNumber = uid => {
  const number = Number.parseInt(uid.charAt(0));
  if (!Number.isNaN(number)) {
    throw new Error("First character cannot start with number!");
  }
};

const isValid = uid => {
  return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(uid);
};

export default function disconnectFrom(uid, connector) {
  if (typeof uid === "string") {
    checkForNumber();
    if (isValid(uid)) {
      const registery = lookup();
      if(typeof connector === "function"){
        if (registery.hasOwnProperty(uid)) {
            subscribeTo(uid, connector);
          }
      }else{
          throw new Error("Connector must be a function!");
      }
    } else {
      throw new Error("UID cannot contain special characters!");
    }
  } else {
    throw new Error("UID must be string!");
  }
}
