document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const statusDiv = form.querySelector('.form-status');
    const formData = new FormData(form);
    
    // Валидация
    if (!formData.get('name') || !formData.get('email')) {
        statusDiv.textContent = 'Заполните обязательные поля';
        statusDiv.style.color = 'red';
        return;
    }
    
    // Отправка (пример через Fetch API)
    fetch('https://example.com/api/feedback', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            statusDiv.textContent = 'Сообщение отправлено!';
            statusDiv.style.color = 'green';
            form.reset();
        } else {
            throw new Error('Ошибка отправки');
        }
    })
    .catch(error => {
        statusDiv.textContent = 'Ошибка: ' + error.message;
        statusDiv.style.color = 'red';
    });
});