document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
});
document.addEventListener('mousemove', (e) => {
    const elements = document.querySelectorAll('.mouse-move-effect');
    const x = e.clientX / window.innerWidth * 2 - 1; // Normalize to range [-1, 1]
    const y = e.clientY / window.innerHeight * 2 - 1; // Normalize to range [-1, 1]
    
    elements.forEach(el => {
        // Adjust the movement based on the mouse position
        el.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});


function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time immediately
