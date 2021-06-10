const themeToggleSwitchEl = document.querySelector('#theme-switch-toggle')
const bodyEl = document.querySelector('body')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const setCurrentThemeColor = function () {
    if (localStorage.getItem('theme') === Theme.DARK) {
        themeToggleSwitchEl.checked = true
        bodyEl.classList.add(Theme.DARK)
        return
    }

    bodyEl.classList.add(Theme.LIGHT)
}

setCurrentThemeColor()

themeToggleSwitchEl.addEventListener('change', () => {
    if (themeToggleSwitchEl.checked) {
        localStorage.setItem('theme', Theme.DARK)
        bodyEl.classList.remove(Theme.LIGHT)
        bodyEl.classList.add(Theme.DARK)
        return
    }

    localStorage.setItem('theme', Theme.LIGHT)
    bodyEl.classList.remove(Theme.DARK)
    bodyEl.classList.add(Theme.LIGHT)
})