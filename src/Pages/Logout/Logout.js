import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import LoadingShell from "Components/Core/LoadingShell/LoadingShell";

const initialState = {
  isLoggingOut: true,
};

export default function Logout() {
  const removeUser = useStoreActions((actions) => actions.user.removeUser);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    removeUser();
    setState((state) => (state.isLoggingOut = false));
    window.location.href = "/";
  }, [removeUser]);

  return state.isLoggingOut && <LoadingShell />;
}
