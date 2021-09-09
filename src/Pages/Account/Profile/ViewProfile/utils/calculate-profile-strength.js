import memoize from "lodash/memoize";
import inRange from "lodash/inRange";

// https://git.io/JmoUZ
function calculateProfileStrength(targetObject) {
  const _type = typeof targetObject;

  if (_type !== "object") {
    throw new Error(`Expected object but received ${_type}`);
  }

  const allFields = Object.keys(targetObject),
    _strength = allFields
      .map((val) => {
        const _val = targetObject[val],
          _type = typeof _val;

        switch (_type) {
          case "string":
            return !!_val.length;
          case "object":
            return Array.isArray(_val&&_val)
              ? !!_val.length
              : !!val.length
          case "number":
            return !!_val;
          case "boolean":
          default:
            return true;
        }
      })
      .filter(Boolean);

  const strength = Math.round((_strength.length / allFields.length) * 100);
  // TODO: Come up with better logic.
  const strengthComments = {
    [inRange(strength, 0, 20)]: "Insufficient",
    [inRange(strength, 20, 40)]: "Mediocre",
    [inRange(strength, 40, 60)]: "Good",
    [inRange(strength, 60, 80)]: "Great",
    [inRange(strength, 80, 100)]: "Excellent",
  };

  return { strength, strengthComment: strengthComments[true] };
}

export default memoize(calculateProfileStrength);
