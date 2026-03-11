const BASE_URL = "https://fieldsync.onrender.com";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {

  const hasBody = options?.body != null;
  const headers: HeadersInit_ = hasBody
    ? { "Content-Type": "application/json" }
    : {};

  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`API Error ${response.status}: ${text}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}