document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-btn');
    if (noButton) {
        let timeout;
        
        const moveButton = (e) => {
            const x = e.clientX || e.touches[0].clientX;
            const y = e.clientY || e.touches[0].clientY;
            
            noButton.style.position = 'absolute';
            noButton.style.left = `${x + 20}px`;
            noButton.style.top = `${y + 20}px`;
        };

        noButton.addEventListener('mouseover', moveButton);
        noButton.addEventListener('touchmove', moveButton);

        timeout = setTimeout(() => {
            noButton.removeEventListener('mouseover', moveButton);
            noButton.removeEventListener('touchmove', moveButton);
            noButton.style.position = 'static';
            noButton.disabled = false;
            noButton.textContent = "No";
        }, 10000);
    }
});