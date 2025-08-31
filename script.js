// Global variables
let cart = [];
let products = [];
let userPreferences = [];

// Product data with AI-enhanced features
const productData = [
    {
        id: 1,
        name: "Smart AI Assistant",
        price: 299.99,
        originalPrice: 349.99,
        description: "Advanced AI assistant with natural language processing and machine learning capabilities.",
        category: "Technology",
        rating: 4.8,
        reviews: 1247,
        aiFeatures: ["Voice Recognition", "Predictive Analytics", "Personalization"],
        icon: "fas fa-robot"
    },
    {
        id: 2,
        name: "AI-Powered Smartphone",
        price: 899.99,
        originalPrice: 999.99,
        description: "Next-generation smartphone with AI camera, intelligent battery management, and smart assistant.",
        category: "Technology",
        rating: 4.9,
        reviews: 2156,
        aiFeatures: ["AI Camera", "Battery Optimization", "Smart Assistant"],
        icon: "fas fa-mobile-alt"
    },
    {
        id: 3,
        name: "Smart Home Hub",
        price: 199.99,
        originalPrice: 249.99,
        description: "Centralized AI hub for controlling all your smart home devices with voice commands.",
        category: "Smart Home",
        rating: 4.7,
        reviews: 892,
        aiFeatures: ["Voice Control", "Device Integration", "Energy Optimization"],
        icon: "fas fa-home"
    },
    {
        id: 4,
        name: "AI Fitness Tracker",
        price: 149.99,
        originalPrice: 179.99,
        description: "Advanced fitness tracker with AI-powered health insights and personalized workout plans.",
        category: "Health",
        rating: 4.6,
        reviews: 1567,
        aiFeatures: ["Health Analytics", "Workout Planning", "Sleep Analysis"],
        icon: "fas fa-heartbeat"
    },
    {
        id: 5,
        name: "Smart Coffee Maker",
        price: 129.99,
        originalPrice: 159.99,
        description: "AI-powered coffee maker that learns your preferences and brews the perfect cup every time.",
        category: "Kitchen",
        rating: 4.5,
        reviews: 743,
        aiFeatures: ["Taste Learning", "Schedule Optimization", "Inventory Management"],
        icon: "fas fa-coffee"
    },
    {
        id: 6,
        name: "AI Security Camera",
        price: 179.99,
        originalPrice: 219.99,
        description: "Intelligent security camera with facial recognition and motion detection powered by AI.",
        category: "Security",
        rating: 4.8,
        reviews: 1123,
        aiFeatures: ["Facial Recognition", "Motion Detection", "Threat Analysis"],
        icon: "fas fa-video"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    products = productData;
    loadProducts();
    generateAIRecommendations();
    updateCartCount();
    
    // Simulate AI learning user preferences
    setTimeout(() => {
        learnUserPreferences();
    }, 2000);
}

// Load products with dynamic pricing
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card with AI-enhanced features
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
        <div class="product-image">
            <i class="${product.icon}"></i>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount-badge">-${discount}%</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="ai-features-tags">
                ${product.aiFeatures.map(feature => `<span class="ai-tag">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// AI-powered search functionality
function aiSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();
    
    if (query.trim() === '') {
        loadProducts();
        return;
    }
    
    // Simulate AI-powered search with semantic understanding
    const searchResults = products.filter(product => {
        const searchTerms = query.split(' ');
        const productText = `${product.name} ${product.description} ${product.category} ${product.aiFeatures.join(' ')}`.toLowerCase();
        
        // AI-enhanced search: check if any search term matches product attributes
        return searchTerms.some(term => productText.includes(term));
    });
    
    displaySearchResults(searchResults, query);
}

function displaySearchResults(results, query) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (results.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found for "${query}"</h3>
                <p>Try different keywords or browse our AI-powered recommendations below.</p>
            </div>
        `;
    } else {
        results.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
}

// Generate AI recommendations based on user behavior
function generateAIRecommendations() {
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    
    // Simulate AI analysis of user preferences and market trends
    const recommendations = products
        .sort(() => 0.5 - Math.random()) // Simulate AI ranking
        .slice(0, 3);
    
    recommendationsGrid.innerHTML = '';
    
    recommendations.forEach(product => {
        const recCard = document.createElement('div');
        recCard.className = 'product-card recommendation-card';
        recCard.innerHTML = `
            <div class="product-image">
                <i class="${product.icon}"></i>
                <div class="ai-badge">AI Recommended</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        recommendationsGrid.appendChild(recCard);
    });
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    updateCartCount();
    
    // AI-powered cart optimization
    optimizeCartPricing();
    
    // Show success message
    showNotification(`Added ${product.name} to cart!`, 'success');
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const aiDiscount = document.getElementById('aiDiscount');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartSubtotal.textContent = '$0.00';
        aiDiscount.textContent = '-$0.00';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="${item.icon}"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Calculate AI-powered discount
    const discount = calculateAIDiscount(subtotal);
    const total = subtotal - discount;
    
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    aiDiscount.textContent = `-$${discount.toFixed(2)}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCart();
        updateCartCount();
        optimizeCartPricing();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCount();
    optimizeCartPricing();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// AI-powered pricing optimization
function calculateAIDiscount(subtotal) {
    // Simulate AI analyzing user behavior, cart contents, and market conditions
    let discount = 0;
    
    // Volume discount
    if (subtotal > 500) {
        discount += subtotal * 0.10; // 10% off for orders over $500
    } else if (subtotal > 200) {
        discount += subtotal * 0.05; // 5% off for orders over $200
    }
    
    // Category-based discount (if multiple tech items)
    const techItems = cart.filter(item => item.category === 'Technology');
    if (techItems.length >= 2) {
        discount += subtotal * 0.03; // Additional 3% for tech bundles
    }
    
    // Time-based discount (simulate dynamic pricing)
    const hour = new Date().getHours();
    if (hour >= 22 || hour <= 6) {
        discount += subtotal * 0.02; // 2% night discount
    }
    
    return Math.min(discount, subtotal * 0.15); // Cap at 15% total discount
}

function optimizeCartPricing() {
    // Simulate real-time price optimization
    cart.forEach(item => {
        // Dynamic pricing based on demand and inventory
        const demandFactor = Math.random() * 0.1; // Simulate demand analysis
        const newPrice = item.price * (1 - demandFactor);
        
        if (newPrice < item.price) {
            item.price = Math.max(newPrice, item.price * 0.9); // Don't go below 90% of original
        }
    });
    
    updateCart();
}

// AI learning user preferences
function learnUserPreferences() {
    // Simulate AI learning from user interactions
    const interactions = [
        'viewed_technology_products',
        'added_to_cart',
        'searched_ai_features'
    ];
    
    userPreferences = interactions;
    
    // Show AI learning notification
    showNotification('AI is learning your preferences for better recommendations!', 'info');
    
    // Regenerate recommendations with learned preferences
    setTimeout(() => {
        generateAIRecommendations();
    }, 1000);
}

// UI Functions
function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Simulate AI-powered checkout process
    showNotification('AI is processing your order with optimized pricing...', 'info');
    
    setTimeout(() => {
        showNotification('Order placed successfully! AI has optimized your total savings.', 'success');
        cart = [];
        updateCart();
        updateCartCount();
        toggleCart();
    }, 2000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .product-price .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 1rem;
        margin-right: 0.5rem;
    }
    
    .discount-badge {
        background: #ff4757;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    .product-rating {
        margin-bottom: 1rem;
    }
    
    .stars {
        color: #ffd700;
        margin-right: 0.5rem;
    }
    
    .rating-text {
        color: #666;
        font-size: 0.9rem;
    }
    
    .ai-features-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .ai-tag {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 0.3rem 0.6rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .recommendation-card {
        position: relative;
    }
    
    .ai-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 0.3rem 0.6rem;
        border-radius: 10px;
        font-size: 0.7rem;
        font-weight: bold;
    }
    
    .empty-cart {
        text-align: center;
        color: #666;
        padding: 2rem;
    }
    
    .no-results {
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-results i {
        font-size: 3rem;
        color: #ccc;
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);

// Search input event listener
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        aiSearch();
    }
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartBtn = document.querySelector('.cart-btn');
    
    if (cartSidebar.classList.contains('active') && 
        !cartSidebar.contains(e.target) && 
        !cartBtn.contains(e.target)) {
        cartSidebar.classList.remove('active');
    }
});
