document.addEventListener("DOMContentLoaded", () => {
  if (!coordinates || coordinates.length !== 2) return;

  const lat = coordinates[1];
  const lng = coordinates[0];

  const map = L.map("map").setView([lat, lng], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  const popupContent = `
    <strong>${listingTitle}</strong><br>
    <small>Exact location will be provided after booking</small>
  `;

  const marker = L.marker([lat, lng]).addTo(map);

  marker.bindPopup(popupContent);

  
  marker.on("mouseover", function () {
    this.openPopup();
  });

  marker.on("mouseout", function () {
    this.closePopup();
  });
});
