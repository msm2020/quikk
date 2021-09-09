const logger = () => {
  const { NODE_ENV } = process.env;
  const isLogEnv = NODE_ENV === "development" || NODE_ENV === "test";

  return (message, ...optionalArgs) => {
    if (!isLogEnv) return;
    return console.log(message, ...optionalArgs);
  };
};

export default logger();
