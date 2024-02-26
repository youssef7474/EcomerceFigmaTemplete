import { useState, useEffect } from 'react';

function useLoading(timeout = 2000) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return loading;
}

export default useLoading;
