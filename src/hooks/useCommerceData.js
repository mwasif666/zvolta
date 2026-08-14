import { useEffect, useState } from "react";

export function useCommerceData(loader, dependencies = []) {
  const [state, setState] = useState({ data: null, loading: true, error: "" });

  useEffect(() => {
    let active = true;
    setState((current) => ({ ...current, loading: true, error: "" }));
    loader()
      .then((result) => {
        if (active) setState({ data: result.data, loading: false, error: "" });
      })
      .catch((error) => {
        if (active) setState({ data: null, loading: false, error: error.message });
      });
    return () => {
      active = false;
    };
  }, dependencies);

  return state;
}
