const constructMessage = ({ text, url }) => ({
  text: encodeURI(`${text} \n\nRead more at ${url}`),
  url: url,
});

const buildSocialLinks = ({ text, url }) => {
  return {
    mail: `mailto:?subject=${text}&body=${url}`,
    facebook: `https://facebook.com/sharer/sharer.php?caption=${text}&u=${url}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
    whatsapp: `https://wa.me/?text=${text}`,
  };
};

// TODO: Properly type the pipe function.
const pipe = (...functions) => (content) =>
  functions.reduce(
    (currentValue, currentFunction) => currentFunction(currentValue),
    content
  );

const generateSocialLinks = (content) =>
  pipe(constructMessage, buildSocialLinks)(content);

export default generateSocialLinks;
