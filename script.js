// Simple script for basic functionality

// If profile photo doesn't exist, show a placeholder
const profilePhoto = document.getElementById('profile-photo');

profilePhoto.onerror = function () {
    // If image fails to load, replace with a placeholder
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.style.width = '200px';
    placeholder.style.height = '200px';
    placeholder.style.borderRadius = '50%';
    placeholder.style.backgroundColor = '#ddd';
    placeholder.style.display = 'flex';
    placeholder.style.alignItems = 'center';
    placeholder.style.justifyContent = 'center';
    placeholder.style.margin = '0 auto 20px';
    placeholder.style.fontSize = '4rem';
    placeholder.textContent = '👤';
    this.parentNode.insertBefore(placeholder, this);
};

// Handle eSewa QR code image
const esewaQR = document.getElementById('esewa-qr-image');

if (esewaQR) {
    esewaQR.onerror = function () {
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.width = '250px';
        placeholder.style.height = '250px';
        placeholder.style.backgroundColor = '#ecf0f1';
        placeholder.style.display = 'flex';
        placeholder.style.alignItems = 'center';
        placeholder.style.justifyContent = 'center';
        placeholder.style.borderRadius = '6px';
        placeholder.style.fontSize = '1rem';
        placeholder.style.color = '#7f8c8d';
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '20px';
        placeholder.innerHTML = 'QR Code Image<br>Coming Soon';
        this.parentNode.insertBefore(placeholder, this);
    };
}

console.log('Website loaded');
