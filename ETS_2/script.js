function setTheme(theme) {
    document.body.className = theme; // Примените тему к body
    localStorage.setItem('theme', theme); // Сохраните тему в локальном хранилище
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme'); // Получите сохранённую тему
    if (savedTheme) {
        setTheme(savedTheme); // Примените сохранённую тему
    } else {
        setTheme('light'); // Установите тему по умолчанию
    }
}

document.getElementById('theme-toggle').onclick = function() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
};

loadTheme(); // Загрузите тему при инициализации страницы

function toggleDialog()
{
    var dialog = document.getElementById("modal_container");
    dialog.style.display = (dialog.style.display=="none"?"block":"none");
}

