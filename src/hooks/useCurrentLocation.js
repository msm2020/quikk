import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useCurrentLocation = () => {
  const [loading, setLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(undefined);
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      setCurrentLocation(`${window.location.origin}${pathname}`);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }, [pathname]);

  return [loading, currentLocation];
};

export default useCurrentLocation;
