// Dummy images for different categories
const imageCategories = {
    markets: [
        "images/Markets.png"
    ],
    highDensityIntersection: [
        "images/High-Density Intersection points.png"
    ],
      hospitals: [
        "images/Hospitals.png"
    ],
       highDensityRoads: [
        "images/High-Density Roads.png"
    ],
    schools: [
        "images/Schools.png"
    ],
      fatalPoints: [
        "images/Fatal points.png"
    ],
      highRiskZones: [
        "images/High-Risk Zones.png"
    ]
  
};

// Function to display images based on category
function displayImages(category) {
    const imagesContainer = document.getElementById("images");
    imagesContainer.innerHTML = ""; // Clear existing images

    if (imageCategories[category]) {
        imageCategories[category].forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = category;
            imagesContainer.appendChild(img);
        });
    } else {
        imagesContainer.innerHTML = "<p>No images available for this category.</p>";
    }
}

// Event listener for category clicks
document.querySelectorAll(".category").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        displayImages(category);
    });
});
