//создаем кнопку переключения хранилища данных
function createBtnStorageData() {
    const container = document.querySelector('.container');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-outline-secondary', 'mx-auto', 'mb-5', 'd-block');
    container.prepend(btn);
    const response = localStorage.getItem('storage');
    if (!response) {
        localStorage.setItem('storage', 'server');
    }

    response === "server"
      ? (btn.textContent = "Go to server storage")
      : (btn.textContent = "Go to local storage");
}

//навешинаем событие на кнопку
function eventBtnStorageData() {
    const btn = document.querySelector('.btn-outline-secondary');
    btn.addEventListener('click', function() {
        let responses = localStorage.getItem('storage');
        if (responses === 'server') {
            // btn.textContent = 'Перейти на локальное хранилище';
            localStorage.setItem('storage', 'local');
            location.reload();
        } else if (responses === 'local') {
            // btn.textContent = 'Перейти на серверное хранилище';
            localStorage.setItem('storage', 'server');
            location.reload();
        }
    })
}

export { createBtnStorageData, eventBtnStorageData };