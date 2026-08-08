const STORAGE_KEY = "bmsb-local-visitor-demo";

export async function getVisitorCount() {
  const endpoint = import.meta.env.VITE_VISITOR_API_URL;

  if (endpoint) {
    const response = await fetch(endpoint, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Besucherzähler konnte nicht geladen werden.");
    }

    const data = await response.json();
    return {
      count: Number(data.count ?? 0),
      mode: "global",
    };
  }

  const current = Number(localStorage.getItem(STORAGE_KEY) ?? 0) + 1;
  localStorage.setItem(STORAGE_KEY, String(current));

  return {
    count: current,
    mode: "demo",
  };
}
