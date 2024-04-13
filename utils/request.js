const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchParts() {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/parts`);

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { fetchParts };
