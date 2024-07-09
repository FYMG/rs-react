import { useEffect, useState } from 'react';

const makeUrl = (url: string, queryParameters: Record<string, string>) => {
  const query = Object.entries(queryParameters)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${url}?${query}`.trim();
};

export default function useData<DataType = unknown>({
  url,
  queryParams,
}: {
  queryParams: Record<string, string>;
  url: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<undefined | DataType>();
  const [error, setError] = useState<unknown>();
  const [previousRequestUrl, setPreviousRequestUrl] = useState<undefined | string>();

  useEffect(() => {
    const requestUrl = makeUrl(url, queryParams);

    if (previousRequestUrl === requestUrl) {
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);
    setData(undefined);
    setError(undefined);
    setPreviousRequestUrl(requestUrl);

    const fetchData = async () => {
      const response = await fetch(requestUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        setError(new Error(`${response.status}: Failed to fetch data`));
      }

      const responseData = (await response.json()) as DataType;

      setData(responseData);
      setIsSuccess(true);
    };

    fetchData()
      .catch((_error) => {
        setIsError(true);

        if (_error instanceof Error) {
          setError(_error);
        }

        throw _error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading, previousRequestUrl, url, queryParams]);

  return {
    isSuccess,
    isLoading,
    isError,
    data,
    error,
  };
}
