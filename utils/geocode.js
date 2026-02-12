const fetch = require("node-fetch");

module.exports = async function geocode(location) {
  try {
    if (!location) return null;

    const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(
      location
    )}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "wanderlust-project/1.0 (learning)"
      }
    });

    const data = await response.json();

    console.log("Geocode API response:", data);

    if (!data || data.length === 0) {
      return null;
    }

    return {
      type: "Point",
      coordinates: [
        parseFloat(data[0].lon),
        parseFloat(data[0].lat),
      ],
    };
  } catch (err) {
    console.error("Geocoding error:", err);
    return null;
  }
};
  