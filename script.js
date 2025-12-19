const todoInput = document.getElementById('new-todo-input');
const addTodoButton = document.getElementById('add-todo-button');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTodo(); });

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  span.addEventListener('click', () => li.classList.toggle('completed'));
  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.addEventListener('click', () => li.remove());
  li.appendChild(span);
  li.appendChild(del);
  todoList.appendChild(li);
  todoInput.value = '';
}
