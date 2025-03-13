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