import pick from "lodash/pick";
import capitalize from "lodash/capitalize";
import memoize from "lodash/memoize";

const stringifyAddress = (addressObj) => {
  if (typeof addressObj !== "object") {
    throw new Error("Address should be an object.");
  }

  const _address = pick(addressObj, ["address", "city", "country", "state"]);

  return Object.keys(_address)
    .map((key) => capitalize(_address[key]))
    .filter(Boolean)
    .join(", ");
};

export default memoize(stringifyAddress);
