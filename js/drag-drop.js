var dragSrcEl = null;
var id = "";
var overId = "";

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("text/html", this.innerHTML);
  id = e.target.id;
  e.dataTransfer.setData("text", id);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDragEnter(e) {
  overId = e.target.id;
  console.log(overId);

  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    // this.innerHTML = e.dataTransfer.getData("text/html");
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return false;
}

function handleDragEnd(e) {
  var tasksList = document.querySelectorAll(".card-task");
  [].forEach.call(tasksList, function(task) {
    task.classList.remove("over");
  });
}

function allowDrop(event) {
  var dropOverId = event.target.id;
  event.preventDefault();
}

function drop(ev) {
  /* The default handling is not to process a drop action and hand it to the next 
       higher html element in your DOM. */
  /* Here, we prevent the default behaviour in order to process the event within 
       this handler and to stop further propagation of the event. */
  ev.preventDefault();
  /* In the drag event, we set the *variable* (it is not a variable name but a 
       format, please check the reference!) "text/html", now we read it out */
  var data = ev.dataTransfer.getData("text");
  /* As we put the ID of the source element into this variable, we can now use 
       this ID to manipulate the dragged element as we wish. */
  /* Let's just move it through the DOM and append it here */
  //   const innerHtml = document.getElementById(ev.target.id).innerHTML;
  //   if (innerHtml) {
  //     document.getElementById(ev.target.id).innerHTML += document.getElementById(
  //       data
  //     ).innerHTML;
  //   } else {
  //   }

  document.getElementById(overId).appendChild(document.getElementById(data));
}

function addEventL() {
  var tasksList = document.querySelectorAll(".card-task");
  [].forEach.call(tasksList, function(task) {
    task.addEventListener("dragstart", handleDragStart, false);
    // task.addEventListener("dragenter", handleDragEnter, false);
    // task.addEventListener("dragover", handleDragOver, false);
    // task.addEventListener("dragleave", handleDragLeave, false);
    // task.addEventListener("drop", handleDrop, false);
    // task.addEventListener("dragend", handleDragEnd, false);
  });
}

addEventL();
