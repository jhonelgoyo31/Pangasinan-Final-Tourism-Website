const destinations = [
    {
        id: "hundred-islands",
        name: "Hundred Islands National Park",
        municipality: "Alaminos City",
        category: "Island",
        image: "images/hundred-islands.png",
        description: "A group of scenic islands known for island hopping, viewing decks, caves, swimming spots, and family-friendly coastal adventures.",
        activities: ["Island hopping", "Swimming", "Kayaking", "View deck sightseeing"],
        bestTime: "Dry season, especially early morning trips",
        entranceFee: "Entrance and boat fees apply",
        openingHours: "Day tours are commonly arranged from morning to afternoon",
        travelTips: "Book boats at the tourism office and bring sun protection, drinking water, and dry bags.",
        learnMore: "hundred islands national park.html"
    },
    {
        id: "patar-beach",
        name: "Patar Beach",
        municipality: "Bolinao",
        category: "Beach",
        image: "images/patar beach.png",
        description: "A golden-sand beach destination in Bolinao with wide shorelines, sunset views, and nearby caves and lighthouse stops.",
        activities: ["Swimming", "Sunset viewing", "Beach photography", "Side trips to Bolinao landmarks"],
        bestTime: "Late afternoon for sunset or dry-season beach days",
        entranceFee: "Entrance fees vary by resort or beach area",
        openingHours: "Depends on the selected beach area or resort",
        travelTips: "Check wave conditions and prepare cash for cottages, parking, or local fees.",
        learnMore: "patar beach.html"
    },
    {
        id: "bolinao-falls",
        name: "Bolinao Falls",
        municipality: "Bolinao",
        category: "Waterfall",
        image: "images/bolinao falls beach area.png",
        description: "A refreshing inland stop with natural pools and waterfall scenery that pairs well with a Bolinao beach itinerary.",
        activities: ["Swimming", "Nature viewing", "Picnics", "Photography"],
        bestTime: "Morning visits after checking local weather",
        entranceFee: "Entrance and cottage fees may apply",
        openingHours: "Usually daytime access",
        travelTips: "Wear water-safe footwear because rocks can be slippery.",
        learnMore: "bolinao falls beach area.html"
    },
    {
        id: "provincial-capitol",
        name: "Pangasinan Provincial Capitol",
        municipality: "Lingayen",
        category: "Historical Site",
        image: "images/pangasinan-provincial-capitol.png",
        description: "A landmark government building and heritage stop admired for its architecture, lawns, and connection to provincial history.",
        activities: ["Architecture viewing", "Photography", "Heritage walking", "Nearby Lingayen Gulf visit"],
        bestTime: "Morning or late afternoon",
        entranceFee: "Outdoor viewing is generally free",
        openingHours: "Government office access depends on official hours",
        travelTips: "Respect office areas and check if interior access is available before visiting.",
        learnMore: "pangasinan provincial capitol.html"
    },
    {
        id: "dagupan-museum",
        name: "Dagupan City Museum",
        municipality: "Dagupan City",
        category: "Historical Site",
        image: "images/dagupan-city-museum.png",
        description: "A cultural stop presenting city history, local identity, and stories that connect Dagupan to Pangasinan's wider heritage.",
        activities: ["Museum visit", "History learning", "Student tours", "Local heritage research"],
        bestTime: "Weekday visits during office hours",
        entranceFee: "Check local museum policies",
        openingHours: "Opening hours may vary",
        travelTips: "Contact the museum or city tourism office before group visits.",
        learnMore: "dagupan city museum.html"
    },
    {
        id: "nalsoc-rice-terraces",
        name: "Nalsoc Rice Terraces",
        municipality: "Nalsoc",
        category: "Mountain",
        image: "images/nalsoc rice terraces.png",
        description: "A green countryside attraction featuring terraced rice fields and a quieter landscape experience beyond the coastal routes.",
        activities: ["Nature viewing", "Photography", "Local walks", "Countryside sightseeing"],
        bestTime: "Planting or growing season for greener views",
        entranceFee: "Local fees may vary",
        openingHours: "Best visited during daylight",
        travelTips: "Ask locals about respectful viewing spots and avoid stepping on planted areas.",
        learnMore: "nalsoc rice terraces.html"
    },
    {
        id: "manleluag-spring",
        name: "Manleluag Spring National Park",
        municipality: "Mangatarem",
        category: "Adventure",
        image: "images/manleluag spring national park.png",
        description: "A forested nature park with spring pools and relaxing green surroundings for families and nature lovers.",
        activities: ["Swimming", "Picnic", "Nature walks", "Family outings"],
        bestTime: "Morning or early afternoon",
        entranceFee: "Entrance and cottage fees may apply",
        openingHours: "Usually daytime access",
        travelTips: "Bring extra clothes and check park rules before swimming.",
        learnMore: "manleluag spring national park.html"
    },
    {
        id: "tayug-sunflower",
        name: "Tayug Sunflower Eco Park",
        municipality: "Tayug",
        category: "Adventure",
        image: "images/tayug sunflower eco park.png",
        description: "A colorful farm destination known for flower viewing, photo areas, and laid-back eco-tourism visits.",
        activities: ["Flower viewing", "Photography", "Farm visit", "Family travel"],
        bestTime: "Blooming season and daytime visits",
        entranceFee: "Entrance fees may apply",
        openingHours: "Check seasonal opening announcements",
        travelTips: "Confirm bloom status before traveling because flower displays are seasonal.",
        learnMore: "tayug sunflower eco park.html"
    },
    {
        id: "dagupan-bangus",
        name: "Dagupan Bangus Food Trip",
        municipality: "Dagupan City",
        category: "Food Destination",
        image: "images/grilled-bangus.jpg",
        description: "A flavorful food stop centered on Pangasinan's famous milkfish, local eateries, markets, and seafood dishes.",
        activities: ["Food tasting", "Market visit", "Local dining", "Culinary photography"],
        bestTime: "Lunch or dinner, especially during Bangus Festival season",
        entranceFee: "No general entrance fee; food costs vary",
        openingHours: "Restaurant and market hours vary",
        travelTips: "Try grilled bangus and ask locals for popular family-owned eateries.",
        learnMore: "dagupan bangus food destination.html"
    },
    {
        id: "cabongaoan-beach",
        name: "Cabongaoan Beach",
        municipality: "Burgos",
        category: "Beach",
        image: "images/cabongaoan beach.png",
        description: "A scenic beach known for pale sand, rocky coastal formations, and relaxed seaside views.",
        activities: ["Swimming", "Beach walks", "Photography", "Rock formation viewing"],
        bestTime: "Dry season and low-tide visits",
        entranceFee: "Entrance and cottage fees may apply",
        openingHours: "Daytime access is recommended",
        travelTips: "Wear sturdy footwear when exploring rocky areas and check tide conditions.",
        learnMore: "cabongaoan beach.html"
    },
    {
        id: "tondol-beach",
        name: "Tondol Beach",
        municipality: "Anda",
        category: "Beach",
        image: "images/tondol beach.png",
        description: "A family-friendly beach with shallow waters and a calm shoreline often called a relaxing coastal escape.",
        activities: ["Swimming", "Family picnic", "Beach photography", "Low-tide walking"],
        bestTime: "Morning to early afternoon during clear weather",
        entranceFee: "Local fees may vary",
        openingHours: "Daytime access is recommended",
        travelTips: "Bring sun protection and check local cottage or parking fees before arrival.",
        learnMore: "tondol beach.html"
    },
    {
        id: "bued-mangrove",
        name: "Bued Mangrove Forest",
        municipality: "Alaminos City",
        category: "Adventure",
        image: "images/bued-banner.png",
        description: "A green eco-tourism stop highlighting mangrove conservation, coastal biodiversity, and quiet nature walks.",
        activities: ["Nature walk", "Eco-tourism learning", "Photography", "Bird watching"],
        bestTime: "Morning visits for cooler weather",
        entranceFee: "Local fees may vary",
        openingHours: "Daytime access is recommended",
        travelTips: "Respect conservation areas and avoid leaving waste in the mangrove site.",
        learnMore: "bued mangrove forest.html"
    }
];

const galleryImages = [
    ["images/pangasinan-homepage.png", "Scenic view of Pangasinan"],
    ["images/hundred-islands.png", "Hundred Islands National Park"],
    ["images/hundred-islands1.png", "Island hopping scenery"],
    ["images/hundred-islands2.png", "Clear coastal waters"],
    ["images/hundred-islands3.png", "Hundred Islands viewpoint"],
    ["images/patar beach.png", "Patar Beach shoreline"],
    ["images/patar1.png", "Patar Beach travel stop"],
    ["images/patar2.png", "Bolinao coastal view"],
    ["images/patar3.png", "Beach scenery in Bolinao"],
    ["images/patar4.png", "Patar Beach sunset area"],
    ["images/cabongaoan beach.png", "Cabongaoan Beach"],
    ["images/cabongaoan1.png", "Cabongaoan coastal rocks"],
    ["images/tondol beach.png", "Tondol Beach"],
    ["images/tambobong beach.png", "Tambobong Beach"],
    ["images/bolinao falls beach area.png", "Bolinao Falls"],
    ["images/bued-banner.png", "Bued Mangrove Forest"],
    ["images/nalsoc rice terraces.png", "Nalsoc Rice Terraces"],
    ["images/manleluag spring national park.png", "Manleluag Spring National Park"],
    ["images/tayug sunflower eco park.png", "Tayug Sunflower Eco Park"],
    ["images/r.rebs integrated eco farm.png", "R.Rebs Integrated Eco Farm"],
    ["images/culture-banner.png", "Culture and heritage in Pangasinan"],
    ["images/pangasinan-provincial-capitol.png", "Pangasinan Provincial Capitol"],
    ["images/jose-palma-historical-marker.png", "Jose Palma Historical Marker"],
    ["images/urdaneta-park-landmark-monumentt.png", "Urdaneta Park Landmark Monument"],
    ["images/bayambang-municipal-plaza.png", "Bayambang Municipal Plaza"],
    ["images/dagupan-city-museum.png", "Dagupan City Museum"],
    ["images/rizal-park-lingayen.png", "Rizal Park Lingayen"],
    ["images/pilgrimage.png", "Pilgrimage sites in Pangasinan"],
    ["images/st. anthony of padua parish church.png", "St. Anthony of Padua Parish Church"],
    ["images/st. paschal baylon parish church.png", "St. Paschal Baylon Parish Church"]
].map(([src, caption], index) => ({ src, caption, index }));

const categories = ["All", "Beach", "Mountain", "Waterfall", "Historical Site", "Island", "Food Destination", "Adventure"];

const destinationGrid = document.querySelector("#destinationGrid");
const searchInput = document.querySelector("#destinationSearch");
const filterContainer = document.querySelector("#categoryFilters");
const emptyState = document.querySelector("#emptyState");
const destinationSelect = document.querySelector("#selectedDestination");
const galleryGrid = document.querySelector("#galleryGrid");
let activeCategory = "All";
let activeGalleryIndex = 0;

function renderFilters() {
    if (!filterContainer) return;
    filterContainer.innerHTML = categories.map((category) => `
        <button type="button" class="filter-btn${category === activeCategory ? " active" : ""}" data-category="${category}">
            ${category}
        </button>
    `).join("");
}

function renderDestinations() {
    if (!destinationGrid || !searchInput || !emptyState) return;
    const query = searchInput.value.trim().toLowerCase();
    const filtered = destinations.filter((destination) => {
        const matchesCategory = activeCategory === "All" || destination.category === activeCategory;
        const searchableText = `${destination.name} ${destination.municipality} ${destination.category}`.toLowerCase();
        return matchesCategory && searchableText.includes(query);
    });

    destinationGrid.innerHTML = filtered.map((destination) => `
        <div class="col-md-6 col-xl-3">
            <article class="destination-card h-100">
                <img src="${destination.image}" alt="${destination.name}" class="destination-image">
                <div class="destination-body">
                    <span class="destination-tag">${destination.category}</span>
                    <h3>${destination.name}</h3>
                    <p><strong>${destination.municipality}</strong></p>
                    <p>${destination.description}</p>
                    <button type="button" class="btn btn-primary w-100 mt-3" data-destination-id="${destination.id}">View Details</button>
                </div>
            </article>
        </div>
    `).join("");

    emptyState.classList.toggle("d-none", filtered.length > 0);
}

function openDestinationModal(destinationId) {
    const destination = destinations.find((item) => item.id === destinationId);
    if (!destination) return;

    document.querySelector("#destinationModalCategory").textContent = destination.category;
    document.querySelector("#destinationModalTitle").textContent = destination.name;
    document.querySelector("#destinationModalBody").innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" class="modal-destination-image">
        <p>${destination.description}</p>
        <div class="detail-list">
            <div><strong>Location:</strong> ${destination.municipality}</div>
            <div><strong>Activities:</strong> ${destination.activities.join(", ")}</div>
            <div><strong>Best time to visit:</strong> ${destination.bestTime}</div>
            <div><strong>Entrance fee:</strong> ${destination.entranceFee}</div>
            <div><strong>Opening hours:</strong> ${destination.openingHours}</div>
            <div><strong>Travel tips:</strong> ${destination.travelTips}</div>
        </div>
        <a href="${destination.learnMore}" target="_blank" class="btn btn-primary mt-4">Learn More</a>
    `;

    bootstrap.Modal.getOrCreateInstance(document.querySelector("#destinationModal")).show();
}

function renderDestinationOptions() {
    if (!destinationSelect) return;
    destinationSelect.insertAdjacentHTML("beforeend", destinations.map((destination) => `
        <option value="${destination.name}">${destination.name}</option>
    `).join(""));
}

function renderGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = galleryImages.map((image) => `
        <button type="button" class="gallery-item" data-gallery-index="${image.index}">
            <img src="${image.src}" alt="${image.caption}">
            <span>${image.caption}</span>
        </button>
    `).join("");
}

function openGalleryModal(index) {
    if (!document.querySelector("#galleryModalImage")) return;
    activeGalleryIndex = index;
    const image = galleryImages[activeGalleryIndex];
    document.querySelector("#galleryModalImage").src = image.src;
    document.querySelector("#galleryModalImage").alt = image.caption;
    document.querySelector("#galleryModalCaption").textContent = image.caption;
    bootstrap.Modal.getOrCreateInstance(document.querySelector("#galleryModal")).show();
}

function moveGallery(direction) {
    activeGalleryIndex = (activeGalleryIndex + direction + galleryImages.length) % galleryImages.length;
    openGalleryModal(activeGalleryIndex);
}

function setError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const error = document.querySelector(`[data-error-for="${fieldName}"]`);
    field.classList.toggle("is-invalid", Boolean(message));
    error.textContent = message;
}

function validateBookingForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = data.travelDate ? new Date(`${data.travelDate}T00:00:00`) : null;
    let isValid = true;

    const rules = {
        fullName: data.fullName.trim() ? "" : "Full name is required.",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()) ? "" : "Enter a valid email address.",
        contactNumber: /^\d+$/.test(data.contactNumber.trim()) ? "" : "Contact number must contain numbers only.",
        selectedDestination: data.selectedDestination ? "" : "Destination must be selected.",
        travelDate: selectedDate && selectedDate >= today ? "" : "Travel date must not be empty or in the past.",
        visitorCount: Number(data.visitorCount) >= 1 ? "" : "Number of visitors must be at least 1.",
        message: data.message.trim() ? "" : "Message is required."
    };

    Object.entries(rules).forEach(([fieldName, message]) => {
        setError(fieldName, message);
        if (message) isValid = false;
    });

    document.querySelector("#formSuccess").classList.toggle("d-none", !isValid);
    if (isValid) {
        form.reset();
    }
}

renderFilters();
renderDestinations();
renderDestinationOptions();
renderGallery();

if (filterContainer) {
    filterContainer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-category]");
        if (!button) return;
        activeCategory = button.dataset.category;
        renderFilters();
        renderDestinations();
    });
}

if (searchInput) {
    searchInput.addEventListener("input", renderDestinations);
}

if (destinationGrid) {
    destinationGrid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-destination-id]");
        if (!button) return;
        openDestinationModal(button.dataset.destinationId);
    });
}

if (galleryGrid) {
    galleryGrid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-gallery-index]");
        if (!button) return;
        openGalleryModal(Number(button.dataset.galleryIndex));
    });
}

if (document.querySelector("#prevGallery")) {
    document.querySelector("#prevGallery").addEventListener("click", () => moveGallery(-1));
}

if (document.querySelector("#nextGallery")) {
    document.querySelector("#nextGallery").addEventListener("click", () => moveGallery(1));
}

if (document.querySelector("#bookingForm")) {
    document.querySelector("#bookingForm").addEventListener("submit", validateBookingForm);
}

document.querySelectorAll(".menu-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const menu = toggle.closest(".site-header")?.querySelector(".unified-menu");
        if (!menu) return;
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });
});
