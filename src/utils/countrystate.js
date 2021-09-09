import countrystate from "countrycitystatejson";
import memoize from "lodash/memoize";
import camelCase from "lodash/camelCase";
import upperFirst from "lodash/upperFirst";

function _getCountriesForSelect() {
  const allCountries = countrystate.getCountries();
  return allCountries.map((eachCountry) => ({
    value: eachCountry.shortName,
    label: eachCountry.name,
  }));
}

function _getStatesForCountry(countryShort) {
  return countrystate
    .getStatesByShort(countryShort)
    .map((eachState) => ({ value: eachState.toLowerCase(), label: eachState }));
}

const toPascalCase = (string) => upperFirst(camelCase(string));

const getCountriesForSelect = memoize(_getCountriesForSelect);
const getStatesForCountry = memoize(_getStatesForCountry);
export { getCountriesForSelect, getStatesForCountry, toPascalCase };
