import { useState, useCallback } from "react";

/**
 * Creates a custom hook for making HTTP requests.
 *
 * @template T - the type of the response data
 * @returns {UseHttpResponse<T>} - an object containing the loading state, request function,
 * error message, and clearError function
 */
const useHttp = <T extends unknown>(): UseHttpResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (url: string, method: string = "GET", body: any = null) => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method,
          body,
        });

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setLoading(false);

        return data;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  return { loading, request, error };
};

export default useHttp;
