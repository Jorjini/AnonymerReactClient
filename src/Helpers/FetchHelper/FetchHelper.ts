const FetchHelper = async (endpoint: string, method: string, body?: any, headers?: any) => {
  const url = process.env.REACT_APP_BE_URL;
  const accessToken = localStorage.getItem('token');
  let changedBody: any;

  if (body) {
    if (body instanceof FormData) {
      changedBody = body;
    } else {
      changedBody = JSON.stringify(body);
    }
  } else {
    changedBody = body;
  }

  const response = await fetch(`${url}${endpoint}`, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...(changedBody instanceof FormData ? {} : { 'Content-Type': 'application/json' }),

      ...headers
    },
    body: changedBody
  });

  const jsonResponse = await response?.json();

  return jsonResponse;
};

export default FetchHelper;

