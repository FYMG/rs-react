const makeUrlParameters = ({
  urlParameters,
  queryParameters,
}: {
  queryParameters?: Record<string, string | undefined | number>;
  urlParameters?: string;
}) => {
  const url = urlParameters ? `/${urlParameters}` : '';

  if (!queryParameters) {
    return url;
  }

  const query = Object.entries(queryParameters)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${url}?${query}`.trim();
};

export default makeUrlParameters;
