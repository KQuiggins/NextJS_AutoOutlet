const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchParts() {

    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/parts`,  { cache: 'no-store' });

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }

    return res.json();
  
}

// Fetch a single part by id
async function fetchPartById(id) {

    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/parts/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }

    return res.json();

}

export { fetchParts, fetchPartById };
