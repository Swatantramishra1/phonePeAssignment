function toggleAddTask(type) {
  document.getElementById(`compose${type}`).value = "";

  document.getElementById(`composeTask${type}`).classList.toggle("hide");
  document.getElementById(`addCard${type}`).classList.toggle("hide");
}

function addTask(type) {
  const el = document.getElementById(`compose${type}`);
  el.focus();

  const value = el.value;
  const content = document.getElementById(`${type}`).innerHTML;

  if (value) {
    if (content) {
      document.getElementById(`${type}`).innerHTML += generateHtml(value, type);
    } else {
      document.getElementById(`${type}`).innerHTML = generateHtml(value, type);
    }
  }

  el.value = "";
  toggleAddTask(type);
  addEventL();
}

function allowDrop(ev) {
  /* The default handling is to not allow dropping elements. */
  /* Here we allow it by preventing the default behaviour. */
  ev.preventDefault();
}

function generateHtml(value, type) {
  const id = Math.floor(Math.random() * 100) + 1;
  return `<div class="card-task" id="${type}-${id}" draggable="true">
  ${value}
</div>`;
}
