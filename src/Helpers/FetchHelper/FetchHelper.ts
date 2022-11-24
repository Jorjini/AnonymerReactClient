import { IResponseError } from "./FetchHelper.config";

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

  if (!response.ok) {
    const responseError = jsonResponse as unknown as IResponseError<object>;
    throw new Error(
      responseError.message ?? 'No error message provided',
      responseError.errors ?? {},
    );
  }

  return jsonResponse;

};

export default FetchHelper;
