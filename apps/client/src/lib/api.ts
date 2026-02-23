export const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function fetcher(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${API}${endpoint}`, options);
  if (!res.ok) throw new Error("API request failed");
  return res.json();
}