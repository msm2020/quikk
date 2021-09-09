import format from "date-fns/format";
import log from "./logger";
import generateSocialLinks from "./build-social-links";

const FORMAT_STRING = "dd MMMM yyyy";

export const formatDate = (dateString) => {
  return format(new Date(dateString), FORMAT_STRING);
};

export const bootGlobalUtils = () => {
  window._quiklyyUtils = {
    formatDate: (dateString) => {
      return format(new Date(dateString), FORMAT_STRING);
    },
  };

  log(`Configured global utilities.`);
};

export { generateSocialLinks };
