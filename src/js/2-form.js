document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Функція для завантаження даних з локального сховища
  const loadData = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  };

  // Функція для збереження даних у локальне сховище
  const saveData = () => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  // Завантаження даних при завантаженні сторінки
  loadData();

  // Відстеження подій на формі
  form.addEventListener('input', (event) => {
    saveData();
  });

  // Очищення даних при сабміті форми
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  });
});
