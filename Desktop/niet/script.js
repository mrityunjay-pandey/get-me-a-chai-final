document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    // Function to change theme
    const changeTheme = (theme) => {
        // Remove all existing theme classes
        body.classList.remove('theme-cyberpunk', 'theme-nature', 'theme-retro', 'theme-neon', 'theme-dark', 'theme-light');
        
        // Add new theme class
        body.classList.add(`theme-${theme}`);
        
        // Store theme preference
        localStorage.setItem('preferred-theme', theme);
    };

    // Add click event listeners to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            changeTheme(theme);
        });
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }

    // Add hover effect to theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}); 