// Detect device information
function getDeviceInfo() {
    const userAgent = navigator.userAgent;
    let deviceType = 'Unknown Device';
    let os = 'Unknown OS';
    let browser = 'Unknown Browser';

    // Detect OS
    if (userAgent.indexOf('Windows') !== -1) os = 'Windows';
    else if (userAgent.indexOf('Mac') !== -1) os = 'macOS';
    else if (userAgent.indexOf('Linux') !== -1) os = 'Linux';
    else if (userAgent.indexOf('Android') !== -1) os = 'Android';
    else if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) os = 'iOS';

    // Detect Browser
    if (userAgent.indexOf('Chrome') !== -1 && userAgent.indexOf('Edg') === -1) browser = 'Chrome';
    else if (userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1) browser = 'Safari';
    else if (userAgent.indexOf('Firefox') !== -1) browser = 'Firefox';
    else if (userAgent.indexOf('Edg') !== -1) browser = 'Edge';
    else if (userAgent.indexOf('Opera') !== -1 || userAgent.indexOf('OPR') !== -1) browser = 'Opera';

    // Detect Device Type
    if (/Mobile|Android|iPhone/i.test(userAgent)) {
        if (userAgent.indexOf('iPhone') !== -1) deviceType = 'iPhone';
        else if (userAgent.indexOf('iPad') !== -1) deviceType = 'iPad';
        else deviceType = 'Mobile Device';
    } else if (/Tablet|iPad/i.test(userAgent)) {
        deviceType = 'Tablet';
    } else {
        deviceType = 'Desktop';
    }

    return `${deviceType} (${os}, ${browser})`;
}

// Fetch IP and location information
async function getIPAndLocation() {
    try {
        // Using ipapi.co for IP and location detection (free tier)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        document.getElementById('ipAddress').textContent = data.ip || 'Unable to detect';
        
        const location = `${data.city || ''}, ${data.region || ''}, ${data.country_name || 'Unknown'}`;
        document.getElementById('locationInfo').textContent = location;
    } catch (error) {
        // Fallback to alternative API
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            document.getElementById('ipAddress').textContent = data.ip || 'Unable to detect';
            document.getElementById('locationInfo').textContent = 'Location unavailable';
        } catch (err) {
            document.getElementById('ipAddress').textContent = 'Unable to detect';
            document.getElementById('locationInfo').textContent = 'Unable to detect';
        }
    }
}

// Show notification popup on page load
window.addEventListener('DOMContentLoaded', (event) => {
    const notification = document.getElementById('alertNotification');
    
    // Set device information immediately
    document.getElementById('deviceInfo').textContent = getDeviceInfo();
    
    // Fetch IP and location
    getIPAndLocation();
    
    // Show notification after a short delay for better UX
    setTimeout(() => {
        notification.style.display = 'flex';
    }, 500);
});

// Notification cannot be closed - removed dismiss functionality

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});
