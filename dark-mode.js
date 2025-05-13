// dark-mode.js
document.addEventListener('DOMContentLoaded', function() {
    // Create dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.width = '50px';
    darkModeToggle.style.height = '50px';
    darkModeToggle.style.backgroundColor = 'var(--primary-color)';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    document.body.appendChild(darkModeToggle);

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            document.documentElement.style.setProperty('--primary-color', '#8d6e63');
            document.documentElement.style.setProperty('--secondary-color', '#5d4037');
            document.documentElement.style.setProperty('--light-color', '#333');
            document.documentElement.style.setProperty('--text-color', '#efebe9');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            document.documentElement.style.setProperty('--primary-color', '#5d4037');
            document.documentElement.style.setProperty('--secondary-color', '#8d6e63');
            document.documentElement.style.setProperty('--light-color', '#efebe9');
            document.documentElement.style.setProperty('--text-color', '#333');
        }
    });

    // Load saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.documentElement.style.setProperty('--primary-color', '#8d6e63');
        document.documentElement.style.setProperty('--secondary-color', '#5d4037');
        document.documentElement.style.setProperty('--light-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#efebe9');
    }
});
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        document.documentElement.style.setProperty('--primary-color', '#8d6e63');
        document.documentElement.style.setProperty('--secondary-color', '#5d4037');
        document.documentElement.style.setProperty('--light-color', '#333');
        document.documentElement.style.setProperty('--text-color', '#efebe9');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        document.documentElement.style.setProperty('--primary-color', '#5d4037');
        document.documentElement.style.setProperty('--secondary-color', '#8d6e63');
        document.documentElement.style.setProperty('--light-color', '#efebe9');
        document.documentElement.style.setProperty('--text-color', '#333');
        localStorage.setItem('darkMode', 'disabled');
    }
});