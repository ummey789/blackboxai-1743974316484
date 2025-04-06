// JavaScript for logo generation and download functionality
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('logo-canvas');
    const ctx = canvas.getContext('2d');
    const generateBtn = document.getElementById('generate-logo');
    const downloadBtn = document.getElementById('download-btn');
    const logoTextInput = document.getElementById('logo-text');
    const fontSelector = document.getElementById('font-selector');
    const primaryColor = document.getElementById('primary-color');
    const secondaryColor = document.getElementById('secondary-color');

    // Initialize canvas with default values
    drawLogo();

    // Event listeners
    generateBtn.addEventListener('click', drawLogo);
    logoTextInput.addEventListener('input', drawLogo);
    fontSelector.addEventListener('change', drawLogo);
    primaryColor.addEventListener('input', drawLogo);
    secondaryColor.addEventListener('input', drawLogo);

    function drawLogo() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Get current values
        const text = logoTextInput.value || 'Your Logo';
        const font = fontSelector.value;
        const pColor = primaryColor.value;
        const sColor = secondaryColor.value;

        // Draw background
        ctx.fillStyle = sColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        ctx.fillStyle = pColor;
        ctx.font = `bold 40px ${font}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width/2, canvas.height/2);
    }

    downloadBtn.addEventListener('click', function() {
        if (!logoTextInput.value) {
            alert('Please enter some text for your logo first!');
            return;
        }
        
        const link = document.createElement('a');
        link.download = 'logo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});