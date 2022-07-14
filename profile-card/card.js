const toggleThemeButton = document.getElementById('theme-toggle-checkbox')

toggleThemeButton.addEventListener('change', themeToggleHandler)

function themeToggleHandler() {
	document.body.classList.toggle('light')
	document.getElementById('profile-card').classList.toggle('light')
}
