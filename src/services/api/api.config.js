export async function baseApi(endpoint, options = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const url = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...options.headers,
      },
    });

    let data = null;

    // Check for Content-Type before trying to parse JSON
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON:", jsonError.message);
        // Optionally log the response text to investigate further
        const responseText = await response.text();
        console.error("Response body:", responseText);
      }
    } else {
      // If the content is not JSON, just log the raw response text
      const responseText = await response.text();
      console.error("Non-JSON response received:", responseText);
      return { error: true, message: "Unexpected response format" };
    }

    // Handle failed fetches with non-2xx status codes
    if (!response.ok) {
      console.error(
        "Fetch failed:",
        response.status,
        data || (await response.text()),
      );
      return { error: true, status: response.status, data };
    }

    return data ?? {};
  } catch (err) {
    console.error("Fetch error:", err.message);
    return { error: true, message: err.message };
  }
}
