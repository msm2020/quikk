import { action } from "easy-peasy";

const alert = {
  isVisible: false,
  severity: "",
  message: "",

  show: action((state, payload) => ({
    ...state,
    isVisible: true,
    severity: payload.severity,
    message: payload.message,
  })),

  close: action((state, payload) => ({
    ...state,
    isVisible: false,
  })),
};

export default alert;
