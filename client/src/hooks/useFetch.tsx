import { useCallback, useState } from 'react';

interface AnswerObject {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

const useFetch = () => {
  const [data, setData] = useState<AnswerObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchData = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
      return result as AnswerObject;
    } catch (err: any) {
      setError(err);
    }
  }, []);

  return { data, loading, error, fetchData };
};

export default useFetch;
