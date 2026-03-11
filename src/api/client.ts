const BASE_URL = "https://fieldsync.onrender.com";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`API Error ${response.status}: ${text}`);
  }

  return response.json() as Promise<T>;
}