const FetchHelper = async (endpoint: string, method: string, body?: any, headers?: any) => {
  const url = process.env.REACT_APP_BE_URL

  const response = await fetch(`${url}${endpoint}`, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  });

  const jsonResponse = await response.json();

  return jsonResponse;
};

export default FetchHelper;
