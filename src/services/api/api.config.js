export async function baseApi(endpoint, options = {}) {
  const baseUrl = process.env.PUBLIC_API_URL;

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return response.json();
}
