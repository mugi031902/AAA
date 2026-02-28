// MAB-BILIS - Main Application JavaScript
// Using localStorage for data persistence

// ============================================
// DATA INITIALIZATION
// ============================================

// Initialize default data if not exists
function initializeData() {
    // Initialize users array
    if (!localStorage.getItem('mab_users')) {
        localStorage.setItem('mab_users', JSON.stringify([]));
    }
    
    // Initialize businesses array
    if (!localStorage.getItem('mab_businesses')) {
        const defaultBusinesses = [
            {
                id: 1,
                userId: 0,
                name: "KERR IT SOLUTIONS",
                description: "Browse and order from registered local shops in Mabinay easily and quickly.",
                address: "Mabinay, Negros Oriental",
                contactNumber: "09123456789",
                category: "IT Services",
                status: "approved",
                image: "https://img.icons8.com/color/96/000000/shop.png"
            },
            {
                id: 2,
                userId: 0,
                name: "Don Macchiatos",
                description: "Track and receive your items conveniently with real-time updates.",
                address: "Mabinay, Negros Oriental",
                contactNumber: "09223456789",
                category: "Food & Beverage",
                status: "approved",
                image: "https://img.icons8.com/color/96/000000/delivery.png"
            },
            {
                id: 3,
                userId: 0,
                name: "Mabinay Bakery",
                description: "Get fresh products delivered straight from local markets.",
                address: "Mabinay Public Market",
                contactNumber: "09323456789",
                category: "Bakery",
                status: "approved",
                image: "https://img.icons8.com/color/96/000000/bread.png"
            }
        ];
        localStorage.setItem('mab_businesses', JSON.stringify(defaultBusinesses));
    }
    
// Initialize products array - always ensure products exist
    const existingProducts = localStorage.getItem('mab_products');
    if (!existingProducts || existingProducts === '[]') {
        const defaultProducts = [
            {
                id: 1,
                businessId: 1,
                name: "Laptop - Dell Inspiron 15",
                description: "Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Display",
                price: 35000,
                category: "Laptops",
                image: "https://img.icons8.com/color/96/000000/laptop.png"
            },
            {
                id: 2,
                businessId: 1,
                name: "Laptop - HP Pavilion",
                description: "Intel Core i7, 16GB RAM, 1TB SSD, 14-inch Display",
                price: 45000,
                category: "Laptops",
                image: "https://img.icons8.com/color/96/000000/laptop.png"
            },
            {
                id: 3,
                businessId: 1,
                name: "Computer Setup - Basic",
                description: "Desktop PC with monitor, keyboard, and mouse",
                price: 25000,
                category: "Computer Sets",
                image: "https://img.icons8.com/color/96/000000/computer.png"
            },
            {
                id: 4,
                businessId: 1,
                name: "Laptop - Lenovo ThinkPad",
                description: "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch Display, Business Grade",
                price: 55000,
                category: "Laptops",
                image: "https://img.icons8.com/color/96/000000/laptop.png"
            },
            {
                id: 5,
                businessId: 2,
                name: "Caramel Macchiato",
                description: "Rich espresso with caramel and steamed milk",
                price: 120,
                category: "Drinks",
                image: "https://img.icons8.com/color/96/000000/coffee-to-go.png"
            },
            {
                id: 6,
                businessId: 2,
                name: "Iced Americano",
                description: "Espresso shots with cold water and ice",
                price: 100,
                category: "Drinks",
                image: "https://img.icons8.com/color/96/000000/coffee-to-go.png"
            },
            {
                id: 7,
                businessId: 2,
                name: "Vanilla Latte",
                description: "Espresso with steamed milk and vanilla flavor",
                price: 130,
                category: "Drinks",
                image: "https://img.icons8.com/color/96/000000/coffee-to-go.png"
            },
            {
                id: 8,
                businessId: 3,
                name: "Fresh Pandesal",
                description: "Classic Filipino bread rolls, freshly baked",
                price: 5,
                category: "Bread",
                image: "https://img.icons8.com/color/96/000000/bread.png"
            },
            {
                id: 9,
                businessId: 3,
                name: "Cheese Bread",
                description: "Soft bread filled with cheesy goodness",
                price: 15,
                category: "Bread",
                image: "https://img.icons8.com/color/96/000000/bread.png"
            },
            {
                id: 10,
                businessId: 3,
                name: "Ensaymada",
                description: "Sweet buttery bread with cheese topping",
                price: 25,
                category: "Bread",
                image: "https://img.icons8.com/color/96/000000/bread.png"
            },
            {
                id: 11,
                businessId: 3,
                name: "Spanish Bread",
                description: "Soft bread with sweet filling, Filipino favorite",
                price: 12,
                category: "Bread",
                image: "https://img.icons8.com/color/96/000000/bread.png"
            },
            {
                id: 12,
                businessId: 3,
                name: "Chocolate Chip Cookie",
                description: "Freshly baked cookie with chocolate chips, pack of 4",
                price: 35,
                category: "Cookies",
                image: "https://img.icons8.com/color/96/000000/cookie.png"
            }
        ];
        localStorage.setItem('mab_products', JSON.stringify(defaultProducts));
    }
    
    // Initialize tourist spots array
    if (!localStorage.getItem('mab_tourist_spots')) {
        const defaultSpots = [
            {
                id: 1,
                name: "Mabinay Spring",
                description: "Discover the beautiful mountains and nature trails in Mabinay.",
                location: "Mabinay, Negros Oriental",
                image: "https://img.icons8.com/color/96/000000/mountain.png"
            },
            {
                id: 2,
                name: "Niludhan Falls",
                description: "Visit stunning waterfalls perfect for sightseeing and relaxation.",
                location: "Mabinay, Negros Oriental",
                image: "https://img.icons8.com/color/96/000000/waterfall.png"
            },
            {
                id: 3,
                name: "Bulwang Caves",
                description: "Explore the famous caves and underground wonders of the area.",
                location: "Mabinay, Negros Oriental",
                image: "https://img.icons8.com/color/96/000000/cave.png"
            }
        ];
        localStorage.setItem('mab_tourist_spots', JSON.stringify(defaultSpots));
    }
    
    // Create admin account if not exists
    const users = JSON.parse(localStorage.getItem('mab_users'));
    const adminExists = users.find(u => u.role === 'admin');
    if (!adminExists) {
        const adminUser = {
            id: Date.now(),
            name: "Admin",
            email: "admin@mab-bilis.com",
            password: "admin123", // In production, this should be hashed
            role: "admin"
        };
        users.push(adminUser);
        localStorage.setItem('mab_users', JSON.stringify(users));
    }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

// Register new user
function register(name, email, password, businessName, address, contactNumber) {
    const users = JSON.parse(localStorage.getItem('mab_users'));
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Email already registered." };
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        role: "business"
    };
    
    users.push(newUser);
    localStorage.setItem('mab_users', JSON.stringify(users));
    
    // Create associated business
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    const newBusiness = {
        id: Date.now(),
        userId: newUser.id,
        name: businessName,
        ownerName: name,
        description: "",
        address: address,
        contactNumber: contactNumber,
        category: "General",
        status: "pending",
        image: "https://img.icons8.com/color/96/000000/shop.png"
    };
    
    businesses.push(newBusiness);
    localStorage.setItem('mab_businesses', JSON.stringify(businesses));
    
    return { success: true, message: "Registration successful! Waiting for admin approval." };
}

// Login user
function login(email, password) {
    const users = JSON.parse(localStorage.getItem('mab_users'));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return { success: false, message: "Invalid email or password." };
    }
    
    // Set current user session
    const session = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    
    localStorage.setItem('mab_session', JSON.stringify(session));
    
    return { success: true, message: "Login successful!", role: user.role };
}

// Logout user
function logout() {
    localStorage.removeItem('mab_session');
    window.location.href = 'index.php';
}

// Get current user
function getCurrentUser() {
    const session = localStorage.getItem('mab_session');
    return session ? JSON.parse(session) : null;
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('mab_session') !== null;
}

// Check if user is admin
function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === 'admin';
}

// Check if user is business
function isBusiness() {
    const user = getCurrentUser();
    return user && user.role === 'business';
}

// ============================================
// BUSINESS FUNCTIONS
// ============================================

// Get all approved businesses
function getApprovedBusinesses() {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    return businesses.filter(b => b.status === 'approved');
}

// Get pending businesses (for admin)
function getPendingBusinesses() {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    return businesses.filter(b => b.status === 'pending');
}

// Get business by user ID
function getBusinessByUserId(userId) {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    return businesses.find(b => b.userId === userId);
}

// Approve business
function approveBusiness(businessId) {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    const index = businesses.findIndex(b => b.id == businessId);
    
    if (index !== -1) {
        businesses[index].status = 'approved';
        localStorage.setItem('mab_businesses', JSON.stringify(businesses));
        return true;
    }
    return false;
}

// Reject business
function rejectBusiness(businessId) {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    const index = businesses.findIndex(b => b.id == businessId);
    
    if (index !== -1) {
        businesses[index].status = 'rejected';
        localStorage.setItem('mab_businesses', JSON.stringify(businesses));
        return true;
    }
    return false;
}

// Delete business
function deleteBusiness(businessId) {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    const filteredBusinesses = businesses.filter(b => b.id != businessId);
    
    localStorage.setItem('mab_businesses', JSON.stringify(filteredBusinesses));
    
    // Also delete associated products
    const products = JSON.parse(localStorage.getItem('mab_products'));
    const filteredProducts = products.filter(p => p.businessId != businessId);
    localStorage.setItem('mab_products', JSON.stringify(filteredProducts));
    
    return true;
}

// ============================================
// TOURIST SPOTS FUNCTIONS
// ============================================

// Get all tourist spots
function getTouristSpots() {
    return JSON.parse(localStorage.getItem('mab_tourist_spots'));
}

// Add tourist spot (admin)
function addTouristSpot(name, description, location, image) {
    const spots = JSON.parse(localStorage.getItem('mab_tourist_spots')) || [];
    
    const newSpot = {
        id: Date.now(),
        name: name,
        description: description,
        location: location,
        image: image || "https://img.icons8.com/color/96/000000/place-marker.png"
    };
    
    spots.push(newSpot);
    localStorage.setItem('mab_tourist_spots', JSON.stringify(spots));
    
    return { success: true, message: "Tourist spot added successfully!" };
}

// Delete tourist spot (admin)
function deleteTouristSpot(spotId) {
    const spots = JSON.parse(localStorage.getItem('mab_tourist_spots'));
    const filteredSpots = spots.filter(s => s.id != spotId);
    
    localStorage.setItem('mab_tourist_spots', JSON.stringify(filteredSpots));
    
    // Also delete associated bookings
    const bookings = JSON.parse(localStorage.getItem('mab_bookings'));
    const filteredBookings = bookings.filter(b => b.spotId != spotId);
    localStorage.setItem('mab_bookings', JSON.stringify(filteredBookings));
    
    return true;
}

// Get tourist spot by ID
function getTouristSpotById(spotId) {
    const spots = JSON.parse(localStorage.getItem('mab_tourist_spots'));
    return spots.find(s => s.id == spotId);
}

// ============================================
// BOOKING FUNCTIONS
// ============================================

// Initialize bookings array
function initializeBookings() {
    if (!localStorage.getItem('mab_bookings')) {
        localStorage.setItem('mab_bookings', JSON.stringify([]));
    }
}

// Get all bookings
function getAllBookings() {
    return JSON.parse(localStorage.getItem('mab_bookings')) || [];
}

// Get bookings by user ID
function getBookingsByUserId(userId) {
    const bookings = JSON.parse(localStorage.getItem('mab_bookings'));
    return bookings.filter(b => b.userId === userId);
}

// Get bookings by tourist spot ID
function getBookingsBySpotId(spotId) {
    const bookings = JSON.parse(localStorage.getItem('mab_bookings'));
    return bookings.filter(b => b.spotId == spotId);
}

// Create a booking
function createBooking(spotId, userName, userEmail, userPhone, visitDate, numberOfGuests) {
    const bookings = JSON.parse(localStorage.getItem('mab_bookings')) || [];
    
    const newBooking = {
        id: Date.now(),
        spotId: spotId,
        userId: getCurrentUser() ? getCurrentUser().userId : null,
        userName: userName,
        userEmail: userEmail,
        userPhone: userPhone,
        visitDate: visitDate,
        numberOfGuests: numberOfGuests,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    bookings.push(newBooking);
    localStorage.setItem('mab_bookings', JSON.stringify(bookings));
    
    return { success: true, message: "Booking created successfully!" };
}

// Cancel booking
function cancelBooking(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('mab_bookings'));
    const index = bookings.findIndex(b => b.id === bookingId);
    
    if (index !== -1) {
        bookings[index].status = 'cancelled';
        localStorage.setItem('mab_bookings', JSON.stringify(bookings));
        return true;
    }
    return false;
}

// Initialize bookings on load
initializeBookings();

// PRODUCTS FUNCTIONS
// ============================================

// Get all products
function getAllProducts() {
    return JSON.parse(localStorage.getItem('mab_products'));
}

// Get products by business ID
function getProductsByBusinessId(businessId) {
    const products = JSON.parse(localStorage.getItem('mab_products'));
    return products.filter(p => p.businessId == businessId);
}

// Get business by ID
function getBusinessById(businessId) {
    const businesses = JSON.parse(localStorage.getItem('mab_businesses'));
    return businesses.find(b => b.id == businessId);
}

// Add product
function addProduct(businessId, name, description, price, category, image) {
    const products = JSON.parse(localStorage.getItem('mab_products')) || [];
    
    const newProduct = {
        id: Date.now(),
        businessId: businessId,
        name: name,
        description: description,
        price: parseFloat(price),
        category: category,
        image: image || "https://img.icons8.com/color/96/000000/product.png"
    };
    
    products.push(newProduct);
    localStorage.setItem('mab_products', JSON.stringify(products));
    
    return { success: true, message: "Product added successfully!" };
}

// Delete product
function deleteProduct(productId) {
    const products = JSON.parse(localStorage.getItem('mab_products'));
    const filteredProducts = products.filter(p => p.id != productId);
    
    localStorage.setItem('mab_products', JSON.stringify(filteredProducts));
    
    return true;
}

// ============================================
// UI FUNCTIONS
// ============================================

// Update navigation based on login status
function updateNavigation() {
    const user = getCurrentUser();
    const navLinks = document.getElementById('navLinks');
    
    if (!navLinks) return;
    
    if (user) {
        if (user.role === 'admin') {
            navLinks.innerHTML = `
                <li><a href="index.php">Home</a></li>
                <li><a href="admin_dashboard.php">Dashboard</a></li>
                <li><a href="#" onclick="logout()">Logout (${user.name})</a></li>
            `;
        } else if (user.role === 'business') {
            navLinks.innerHTML = `
                <li><a href="index.php">Home</a></li>
                <li><a href="business_dashboard.php">Dashboard</a></li>
                <li><a href="#" onclick="logout()">Logout (${user.name})</a></li>
            `;
        }
    } else {
        navLinks.innerHTML = `
            <li><a href="index.php">Home</a></li>
            <li><a href="#businesses">Local businesses</a></li>
            <li><a href="#spots">Tourist Spots</a></li>
            <li><a href="login.php">Login</a></li>
            <li><a href="signup.php">Sign Up</a></li>
        `;
    }
}

// Render businesses on homepage
function renderBusinesses() {
    const container = document.getElementById('businessesContainer');
    if (!container) return;
    
    const businesses = getApprovedBusinesses();
    
    if (businesses.length === 0) {
        container.innerHTML = '<p style="text-align:center;">No businesses registered yet.</p>';
        return;
    }
    
    let html = '<div class="cards">';
    businesses.forEach(business => {
        html += `
            <a href="products.php?businessId=${business.id}" class="card business-card">
                <img src="${business.image}" alt="${business.name}">
                <h3>${business.name}</h3>
                <p>${business.description || business.category}</p>
                <p><strong>Address:</strong> ${business.address}</p>
                <p><strong>Contact:</strong> ${business.contactNumber}</p>
            </a>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// Render tourist spots on homepage
function renderTouristSpots() {
    const container = document.getElementById('spotsContainer');
    if (!container) return;
    
    const spots = getTouristSpots();
    
    if (spots.length === 0) {
        container.innerHTML = '<p style="text-align:center;">No tourist spots registered yet.</p>';
        return;
    }
    
    let html = '<div class="cards">';
    spots.forEach(spot => {
        html += `
            <div class="card">
                <img src="${spot.image}" alt="${spot.name}">
                <h3>${spot.name}</h3>
                <p>${spot.description}</p>
                <p><strong>Location:</strong> ${spot.location}</p>
                <button class="btn-book-now" onclick="showBookingForm(${spot.id}, '${spot.name}')">
                    <span>📅</span> Book Now
                </button>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

// Show booking form modal
function showBookingForm(spotId, spotName) {
    const modal = document.createElement('div');
    modal.id = 'bookingModal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;z-index:1000;';
    modal.innerHTML = `
        <div style="background:white;padding:30px;border-radius:10px;max-width:400px;width:90%;">
            <h2 style="color:#2e7d32;margin-bottom:20px;">Book ${spotName}</h2>
            <form id="bookingForm">
                <input type="hidden" id="bookingSpotId" value="${spotId}">
                <input type="text" id="bookingName" placeholder="Your Name" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px;" required>
                <input type="email" id="bookingEmail" placeholder="Email" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px;" required>
                <input type="tel" id="bookingPhone" placeholder="Phone Number" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px;" required>
                <input type="date" id="bookingDate" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px;" required>
                <input type="number" id="bookingGuests" placeholder="Number of Guests" min="1" value="1" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ddd;border-radius:4px;" required>
                <button type="submit" class="btn btn-approve" style="width:100%;margin-bottom:10px;">Confirm Booking</button>
                <button type="button" class="btn btn-reject" style="width:100%;" onclick="closeBookingModal()">Cancel</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const spotId = document.getElementById('bookingSpotId').value;
        const userName = document.getElementById('bookingName').value;
        const userEmail = document.getElementById('bookingEmail').value;
        const userPhone = document.getElementById('bookingPhone').value;
        const visitDate = document.getElementById('bookingDate').value;
        const numberOfGuests = document.getElementById('bookingGuests').value;
        
        createBooking(spotId, userName, userEmail, userPhone, visitDate, numberOfGuests);
        closeBookingModal();
        alert('Booking created successfully!');
    });
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.remove();
    }
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    updateNavigation();
});
