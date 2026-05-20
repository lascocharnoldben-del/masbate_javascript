
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
        navbar.style.background = "rgba(13, 110, 253, 0.98)";
        navbar.style.padding = "10px 0";
    } 
    
    else {
        navbar.classList.remove("shadow");
        navbar.style.background = "rgba(13, 110, 253, 0.95)";
        navbar.style.padding = "15px 0";
    }
});


const cards = document.querySelectorAll(".feature-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


const revealElements = document.querySelectorAll("section");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
});


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((nav) => {
            nav.classList.remove("active");
        });

        this.classList.add("active");
    });

});


console.log("Explore Masbate Loaded Successfully");

//Story

document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const btn = document.getElementById('likeButton');
    const counter = document.getElementById('likeCounter');

    if (btn && counter) {
        btn.addEventListener('click', () => {
            count++;
            
            // Update the text to show support
            counter.innerText = `${count} people inspired by this story`;
            
            // Visual feedback on the button
            btn.classList.replace('btn-success', 'btn-outline-success');
            btn.innerText = "Thank you for the love!";
            
            // Log for debugging[cite: 2]
            console.log("Support button clicked. Current count: " + count);
        });
    }
});

// About ---------------------

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

/* ================= HERO TEXT ANIMATION ================= */
window.addEventListener("load", () => {
  const hero = document.querySelector(".about-hero h1");
  const sub = document.querySelector(".about-hero p");

  hero.style.opacity = "0";
  sub.style.opacity = "0";

  setTimeout(() => {
    hero.style.transition = "0.8s";
    sub.style.transition = "0.8s";

    hero.style.opacity = "1";
    sub.style.opacity = "1";
  }, 300);
});

/* ================= SMOOTH SCROLL (if needed later) ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* ================= IMAGE CLICK ZOOM ================= */
const aboutImg = document.querySelector(".about-img-frame img");

if (aboutImg) {
  aboutImg.addEventListener("click", () => {
    aboutImg.classList.toggle("zoomed");
  });
}

// destination ---------------------------

document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // ALL 20 TOURIST SPOTS (UNCHANGED)
    // =============================
    const destinations = [
        {
            name: "Buntod Reef Marine Sanctuary",
            municipality: "Masbate City",
            category: "beach",
            image: "image/image1.jpg",
            description: "A pristine white sandbar and mangrove sanctuary offering crystal clear waters. Best Time to Visit: Low tide and sunset.",
            address: "Barangay Nursery & Tugbo, Masbate City",
            fee: "₱20 adults / ₱10–15 children (Boat Fee: ₱500–₱800 roundtrip)",
            hours: "7:00 AM – 5:00 PM",
            activities: "Snorkeling, swimming, kayaking, sandbar photography",
            tip: "Bring water and food because stores are limited."
        },
        {
            name: "Catandayagan Falls",
            municipality: "Mobo",
            category: "waterfall",
            image: "image/image2.jpg",
            description: "A rare and spectacular natural wonder featuring a majestic waterfall flowing directly into the open ocean.",
            address: "Ticao Island, Mobo, Masbate",
            fee: "Around ₱50–₱100",
            hours: "6:00 AM – 5:00 PM",
            activities: "Cliff jumping, swimming, island hopping",
            tip: "Wear aqua shoes because rocks are slippery."
        },
        {
            name: "Ticao Island",
            municipality: "San Jacinto",
            category: "park",
            image: "image/image3.jpg",
            description: "Known for marine biodiversity, breathtaking dive spots, and peaceful, quiet beaches.",
            address: "Eastern Masbate Province",
            fee: "Depends on resort or tour",
            hours: "Open anytime",
            activities: "Diving, beach camping, island hopping",
            tip: "Internet signal may be weak in remote areas."
        },
        {
            name: "Manta Bowl Shoal",
            municipality: "San Jacinto",
            category: "park",
            image: "image/image4.jpg",
            description: "A world-renowned underwater shoal famous as a cleaning station for giant manta rays and whale sharks.",
            address: "Near Ticao Island",
            fee: "Dive packages start around ₱2,500+",
            hours: "Daytime diving schedules",
            activities: "Scuba diving and manta ray watching",
            tip: "Best visited from November to June."
        },
        {
            name: "Palani White Beach",
            municipality: "Balud",
            category: "beach",
            image: "image/image5.jpg",
            description: "An expansive, pristine stretch of powdery white sand beach perfect for unwinding and catching beautiful sunsets.",
            address: "Balud, Masbate",
            fee: "Usually free or minimal fee",
            hours: "Open anytime",
            activities: "Swimming, beach picnic, sunset viewing",
            tip: "Bring cash because ATMs are limited nearby."
        },
        {
            name: "Animasola Island",
            municipality: "San Pascual",
            category: "beach",
            image: "image/image6.jpg",
            description: "An awe-inspiring island famous for its unique, massive, layered rock formations sculpted by waves.",
            address: "Burias Group of Islands",
            fee: "Included in island hopping tours",
            hours: "Day tours only",
            activities: "Photography and rock climbing",
            tip: "Make sure your camera batteries are fully charged for the rock sceneries!"
        },
        {
            name: "Tinalisayan Island",
            municipality: "San Pascual",
            category: "beach",
            image: "image/image7.jpg",
            description: "A breathtaking island paradise with clear turquoise waters and a gorgeous sandbar strip.",
            address: "Burias Island area",
            fee: "Included in tours",
            hours: "Daytime",
            activities: "Snorkeling and swimming",
            tip: "Best for drone photography."
        },
        {
            name: "Sombrero Island",
            municipality: "San Pascual",
            category: "beach",
            image: "image/image8.jpg",
            description: "A picturesque beach escape easily recognized by its distinctive rock outline shaped like a hat.",
            address: "Burias Islands",
            fee: "Included in island hopping",
            hours: "Day tours",
            activities: "Camping and beach relaxation",
            tip: "Perfect for pitch-tent overnight beach camping."
        },
        {
            name: "Halea Nature Park",
            municipality: "Mobo",
            category: "park",
            image: "image/image9.jpg",
            description: "A secluded nature sanctuary featuring clear coves, lush foliage, and thriving marine life ecosystems.",
            address: "Mobo, Masbate",
            fee: "Around ₱50–₱100",
            hours: "8:00 AM – 5:00 PM",
            activities: "Nature walks and sightseeing",
            tip: "Often included in island hopping packages."
        },
        {
            name: "Pawa Mangrove Nature Park",
            municipality: "Masbate City",
            category: "park",
            image: "image/image10.webp",
            description: "Masbate's largest mangrove area, showcasing a scenic wooden boardwalk running through natural wooden wetlands.",
            address: "Pawa, Masbate City",
            fee: "Around ₱20",
            hours: "8:00 AM – 6:00 PM",
            activities: "Nature walks and birdwatching",
            tip: "Great spot for a quiet afternoon walk."
        },
        {
            name: "Mayong Payong Eco Park",
            municipality: "Milagros",
            category: "park",
            image: "image/image11.webp",
            description: "An eco-adventure hilltop park known for its rolling green rice terraces and stunning mountain landscapes.",
            address: "Milagros, Masbate",
            fee: "₱20–₱50",
            hours: "7:00 AM – 5:00 PM",
            activities: "Hiking and sightseeing",
            tip: "Wear comfortable walking shoes for the hills."
        },
        {
            name: "Mangrovetum",
            municipality: "Masbate City",
            category: "park",
            image: "image/image12.jpg",
            description: "A dedicated environmental park showcasing lush protective mangrove species right along the coastline.",
            address: "Masbate City Port Area",
            fee: "Around ₱20",
            hours: "8:00 AM – 8:00 PM",
            activities: "Walking and nature photography",
            tip: "Visit around sunset for cooler weather."
        },
        {
            name: "St. Anthony of Padua Cathedral",
            municipality: "Masbate City",
            category: "historical",
            image: "image/image13.jpg",
            description: "The historical Roman Catholic seat of Masbate, showcasing beautiful old-world architecture and deep heritage.",
            address: "Masbate City Proper",
            fee: "Free",
            hours: "5:00 AM – 8:00 PM",
            activities: "Church visits and photography",
            tip: "Maintain solemn silence inside the cathedral premises."
        },
        {
            name: "Villa Bayot",
            municipality: "Masbate City",
            category: "historical",
            image: "image/image14.jpg",
            description: "An ancestral heritage house offering a window into the rich historical and cultural eras of early Masbate families.",
            address: "Masbate City",
            fee: "Usually free",
            hours: "Depends on local access",
            activities: "Historical tours and photography",
            tip: "Ask local guides for permission before accessing specific rooms."
        },
        {
            name: "Aroroy Lighthouse",
            municipality: "Aroroy",
            category: "lighthouse",
            image: "image/image15.jpg",
            description: "A beautiful coastal beacon providing sweeping, panoramic views of the sea shipping lanes.",
            address: "Aroroy, Masbate",
            fee: "Free",
            hours: "Daytime visits",
            activities: "Scenic viewing and photography",
            tip: "Bring a hat as there is limited shade near the base structure."
        },
        {
            name: "Bugui Point Lighthouse",
            municipality: "Aroroy",
            category: "lighthouse",
            image: "image/image16.png",
            description: "A historic stone structure perched dramatically on high sea-cliffs, capturing incredible wind-swept ocean views.",
            address: "Bugui Point, Masbate",
            fee: "Free",
            hours: "Open daytime",
            activities: "Sightseeing and sunsets",
            tip: "The sunset view here is highly recommended by locals."
        },
        {
            name: "Bat-ongan Cave",
            municipality: "Mobo",
            category: "historical",
            image: "image/image17.png",
            description: "A massive, mysterious limestone rock monolith standing in the wilderness, featuring historic cavern rooms.",
            address: "Mobo, Masbate",
            fee: "₱30–₱50",
            hours: "8:00 AM – 5:00 PM",
            activities: "Cave exploration",
            tip: "Bring flashlight and proper footwear."
        },
        {
            name: "Borobangcaso Islet and Rock Formation",
            municipality: "Monreal",
            category: "beach",
            image: "image/image18.jpg",
            description: "A pristine islet featuring a distinctive stack of large limestone rocks alongside an untouched white beach patch.",
            address: "Near Ticao Island",
            fee: "Included in island hopping",
            hours: "Daytime tours",
            activities: "Swimming and photography",
            tip: "Great spot for rock climbing pictures."
        },
        {
            name: "Masbate Rodeo Festival",
            municipality: "Masbate City",
            category: "historical",
            image: "image/image19.jpg",
            description: "The biggest annual celebration in the province, celebrating Masbate's status as the Rodeo Capital.",
            address: "Masbate City Grandstand / Public Arenas",
            fee: "Mostly free public events",
            hours: "Usually April every year",
            activities: "Rodeo competitions and street parades",
            tip: "Book your hotels months in advance because the city fills up fast!"
        },
        {
            name: "Matayum Lagoon",
            municipality: "Cataingan",
            category: "park",
            image: "image/image20.jpg",
            description: "A peaceful, reflective body of water surrounded by quiet landscapes, perfect for winding down.",
            address: "Masbate Province",
            fee: "Around ₱20–₱50",
            hours: "7:00 AM – 5:00 PM",
            activities: "Swimming and relaxing",
            tip: "Bring extra clothes and insect repellent."
        }
    ];

    // =============================
    // SAFE DOM REFERENCES
    // =============================
    const gridContainer = document.getElementById("destinationsGrid");
    const searchInput = document.getElementById("destinationSearch");
    const categoryFilter = document.getElementById("categoryFilter");
    const noResultsMessage = document.getElementById("noResultsMessage");

    if (!gridContainer || !searchInput || !categoryFilter || !noResultsMessage) {
        console.error("Missing destination HTML elements");
        return;
    }

    // =============================
    // RENDER FUNCTION
    // =============================
    function renderDestinationsGrid(dataList) {

        gridContainer.innerHTML = "";

        if (!dataList.length) {
            noResultsMessage.classList.remove("d-none");
            return;
        }

        noResultsMessage.classList.add("d-none");

        dataList.forEach(item => {
            gridContainer.innerHTML += `
                <div class="col-md-6 col-lg-4">
                    <div class="card custom-destination-card h-100">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        <div class="card-body p-4">

                            <span class="badge badge-category text-capitalize">
                                ${item.category}
                            </span>

                            <h3>${item.name}</h3>

                            <div>
                                <i class="bi bi-geo-alt-fill"></i>
                                ${item.municipality}
                            </div>

                            <p>${item.description}</p>

                            <hr>

                            <small><b>Address:</b> ${item.address}</small><br>
                            <small><b>Fee:</b> ${item.fee}</small><br>
                            <small><b>Hours:</b> ${item.hours}</small><br>
                            <small><b>Activities:</b> ${item.activities}</small><br>
                            <small class="text-success"><b>Tip:</b> ${item.tip}</small>

                        </div>
                    </div>
                </div>
            `;
        });
    }

    // =============================
    // FILTER ENGINE (SAFE)
    // =============================
    function executeFilterEngine() {

        const queryText = (searchInput.value || "").toLowerCase().trim();
        const selectedCategory = (categoryFilter.value || "").toLowerCase();

        const filteredResults = destinations.filter(item => {

            const matchesText =
                item.name.toLowerCase().includes(queryText) ||
                item.municipality.toLowerCase().includes(queryText) ||
                item.address.toLowerCase().includes(queryText);

            const matchesCategory =
                selectedCategory === "all" ||
                item.category.toLowerCase() === selectedCategory;

            return matchesText && matchesCategory;
        });

        renderDestinationsGrid(filteredResults);
    }

    // =============================
    // EVENTS
    // =============================
    searchInput.addEventListener("input", executeFilterEngine);
    categoryFilter.addEventListener("change", executeFilterEngine);

    executeFilterEngine();

});




//---------------------------------------------inquiry----------------------

const form = document.getElementById("inquiryForm");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  // INPUTS
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const destination = document.getElementById("destination").value;
  const travelDate = document.getElementById("travelDate").value;
  const visitors = document.getElementById("visitors").value;
  const message = document.getElementById("message").value.trim();

  // ERRORS
  let valid = true;

  document.querySelectorAll(".error").forEach(error => {
    error.innerHTML = "";
  });

  // NAME
  if (fullName === "") {
    document.getElementById("nameError").innerHTML =
      "Full name is required";

    valid = false;
  }

  // EMAIL
  const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {

    document.getElementById("emailError").innerHTML =
      "Enter valid email";

    valid = false;
  }

  // CONTACT
  const numberPattern = /^[0-9]+$/;

  if (!contact.match(numberPattern)) {

    document.getElementById("contactError").innerHTML =
      "Numbers only";

    valid = false;
  }

  // DESTINATION
  if (destination === "") {

    document.getElementById("destinationError").innerHTML =
      "Select destination";

    valid = false;
  }

  // DATE
  if (travelDate === "") {

    document.getElementById("dateError").innerHTML =
      "Travel date required";

    valid = false;
  }

  // VISITORS
  if (visitors < 1 || visitors === "") {

    document.getElementById("visitorError").innerHTML =
      "At least 1 visitor";

    valid = false;
  }

  // MESSAGE
  if (message === "") {

    document.getElementById("messageError").innerHTML =
      "Message is required";

    valid = false;
  }

  // SUCCESS
  if (valid) {

    alert("Inquiry Submitted Successfully!");

    form.reset();
  }

});


//----------------------------------tips----------------

document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.getElementById("tipsAccordion");
    const guideContainer = document.getElementById("guideGrid");

    // Exact data array mapped directly from the screenshot layout text requirements
    const accordionData = [
        {
            id: "collapseOne",
            title: "Safety Reminders",
            icon: "bi-shield-check",
            isOpen: true, // Opened by default to match your exact visual display
            description: "Always check for volcano activity updates from PHIVOLCS before hiking. Stay hydrated and keep your bags secure in crowded areas."
        },
        {
            id: "collapseTwo",
            title: "Spicy Food Warning",
            icon: "bi-fire",
            isOpen: false,
            description: "Bicol cuisine is famous for its heat. Sample small portions first if you are sensitive to spicy ingredients like siling labuyo."
        },
        {
            id: "collapseThree",
            title: "Bring Enough Cash",
            icon: "bi-cash-coin",
            isOpen: false,
            description: "Most small shops and local drivers only accept cash. It is best to withdraw money at an ATM in the city center before exploring."
        },
        {
            id: "collapseFour",
            title: "Bring a Power Bank",
            icon: "bi-battery-charging",
            isOpen: false,
            description: "Keep your devices fully charged during long transit times or outdoor adventures where electricity grid sockets aren't accessible."
        },
        {
            id: "collapseFive",
            title: "Offline Maps",
            icon: "bi-map",
            isOpen: false,
            description: "Cellular signals can be weak or non-existent in remote regions. Pre-download maps on your phone for reliable offline navigation."
        }
    ];

    // Data grid for the 5-Column Travel Guide elements
    const guideData = [
        {
            num: "1",
            title: "Best Time to Visit",
            description: "Plan your trip from March to May for dry weather and the clearest views of Mayon Volcano."
        },
        {
            num: "2",
            title: "Transportation",
            description: "Use jeepneys for town-to-town travel and tricycles for short distances inside the city centers."
        },
        {
            num: "3",
            title: "Arrival Points",
            description: "You can fly into Bicol International Airport or take a provincial bus from Manila to Legazpi City."
        },
        {
            num: "4",
            title: "What to Pack",
            description: "Bring light cotton clothes, comfortable walking shoes, and an umbrella for sudden rain showers."
        },
        {
            num: "5",
            title: "Local Etiquette",
            description: "Be polite to locals and dress modestly when entering old churches or historical holy sites."
        }
    ];

    // --- Dynamic Accordion Renderer Engine ---
    if (accordionContainer) {
        accordionContainer.innerHTML = ""; // Wipe empty state
        accordionData.forEach(item => {
            const accordionHTML = `
                <div class="accordion-item custom-accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button ${item.isOpen ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}">
                            <i class="bi ${item.icon} me-2 text-dark"></i> ${item.title}
                        </button>
                    </h2>
                    <div id="${item.id}" class="accordion-collapse collapse ${item.isOpen ? 'show' : ''}" data-bs-parent="#tipsAccordion">
                        <div class="accordion-body">
                            ${item.description}
                        </div>
                    </div>
                </div>
            `;
            accordionContainer.innerHTML += accordionHTML;
        });
    }

    // --- Dynamic 5-Column Grid Card Renderer Engine ---
    if (guideContainer) {
        guideContainer.innerHTML = ""; // Wipe empty state
        guideData.forEach(card => {
            const guideHTML = `
                <div class="col-md-6 col-lg-2-custom">
                    <div class="card custom-guide-card h-100">
                        <div class="card-body p-3">
                            <h6 class="card-guide-title">
                                <span class="fw-bold text-success">${card.num}. ${card.title}</span>
                            </h6>
                            <p class="card-guide-text text-muted small mb-0">${card.description}</p>
                        </div>
                    </div>
                </div>
            `;
            guideContainer.innerHTML += guideHTML;
        });
    }
});

//-------------------------------Culture--------------------------------


// Executes when the DOM structure is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Culture Module Active: Festival elements configured cleanly.");

    // Optional: Add a smooth scroll or dynamic fade-in effect for the culture cards
    const cards = document.querySelectorAll('.custom-culture-card');
    
    cards.forEach((card, index) => {
        // You can add custom animation logic or click event trackers here if needed
        card.addEventListener('click', function() {
            console.log(`User clicked on festival card item: ${index + 1}`);
        });
    });
});

//============ gallery=================

// GALLERY IMAGE CLICK EFFECT
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {

    img.addEventListener("click", function () {

        // REMOVE ACTIVE CLASS FROM ALL
        galleryImages.forEach((image) => {
            image.classList.remove("active-img");
        });

        // ADD ACTIVE CLASS TO CLICKED IMAGE
        this.classList.add("active-img");

    });

});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("shadow-lg");
    }else{
        navbar.classList.remove("shadow-lg");
    }

});

// SIMPLE FADE-IN ANIMATION
const cards = document.querySelectorAll(".gallery-img");

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show-img");
        }, index * 100);

    });

});
