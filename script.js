const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === '') {
        alert('You must write something!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    });

    listContainer.appendChild(li);
    inputBox.value = '';
}

