import { useCallback, useState } from 'react';

interface AnswerObject {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

interface UseFetchResult {
  data: AnswerObject[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

const useFetch = (url: string): UseFetchResult => {
  const [data, setData] = useState<AnswerObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // eslint-disable-next-line consistent-return
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData((prevData) => {
        if (JSON.stringify(prevData) === JSON.stringify(result)) {
          return prevData;
        }
        return result;
      });
      setLoading(false);
      return result as AnswerObject;
    } catch (err: any) {
      setError(new Error(`Failed to fetch data from ${url}: ${err.message}`));
      setLoading(false);
    }
  }, [url]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};

export default useFetch;
