// Тема с сохранением
const body = document.body;
        const button = document.getElementById('theme-toggle');

        function setTheme(theme) {
            body.className = theme;
            localStorage.setItem('theme', theme);
        }

        function toggleTheme() {
            const currentTheme = localStorage.getItem('theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }

        button.addEventListener('click', toggleTheme);

        // Установка темы при загрузке страницы
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);

        
  
// модальное окно
function toggleDialog()
{
    var dialog = document.getElementById("modal_container");
    dialog.style.display = (dialog.style.display=="none"?"block":"none");
}

function comment()
{
    document.getElementById('submitComment').onclick = function() {
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value;
    
        if (commentText) {
            const commentsDiv = document.getElementById('comments');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentText;
    
            commentsDiv.appendChild(newComment);
            commentInput.value = ''; // Очистить текстовое поле
        } else {
            alert('Пожалуйста, напишите комментарий.');
        }
    };
}
/* модальное окно для FAQ*/

// Загружаем тему при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();

    // Модальное окно
    const logoLink = document.getElementById('logo-link');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    if (logoLink && modal && closeModal) {
        // Открыть модальное окно при клике на логотип
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });

        // Закрыть модальное окно при клике на крестик
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Закрыть модальное окно при клике вне его
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Галерея изображений
    const galleryImages = document.querySelectorAll('.gallery-image');
    const imageModal = document.getElementById('image-modal');
    const expandedImg = document.getElementById('expanded-img');

    if (galleryImages.length > 0 && imageModal && expandedImg) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                imageModal.style.display = 'block';
                expandedImg.src = img.src;
            });
        });

        // Закрыть модальное окно галереи
        imageModal.querySelector('.close').addEventListener('click', () => {
            imageModal.style.display = 'none';
        });
    }

    // FAQ - Раскрытие ответов при клике на вопрос
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling; // Находим следующий элемент (ответ)
                if (answer.classList.contains('open')) {
                    answer.classList.remove('open'); // Скрываем ответ, если он уже открыт
                    setTimeout(() => {
                        answer.style.display = 'none'; // Убираем display после завершения анимации
                    }, 300); // Время анимации (0.3s)
                } else {
                    answer.style.display = 'block'; // Показываем ответ перед началом анимации
                    setTimeout(() => {
                        answer.classList.add('open'); // Запускаем анимацию раскрытия
                    }, 10); // Небольшая задержка для корректного отображения
                }
            });
        });
    }

    // Обработка формы комментариев
    document.querySelectorAll('.news-comment-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ваше сообщение принято! Мы скоро вам ответим.');
            form.reset();
        });
    });
});

// галерея
function changeImage(imgElement) {
    document.getElementById('main-image').src = imgElement.src;
}