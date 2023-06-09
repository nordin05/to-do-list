export const tasks = document.querySelector(".tasks-container");

function createCheckbox(parentDiv) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    const label = document.createElement("label");
    label.htmlFor = "checkbox";

    parentDiv.appendChild(checkbox);
    parentDiv.appendChild(label);
}

export function createDiv(title, date, description, isCompleted) {
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";
    tasks.appendChild(taskItem);

    const taskTitle = document.createElement("h1");
    taskTitle.className = "title";
    taskTitle.innerHTML = title;
    taskItem.appendChild(taskTitle);

    const taskDescription = document.createElement("p");
    taskDescription.className = "description";
    taskDescription.innerHTML = description;
    taskItem.appendChild(taskDescription);

    const taskDate = document.createElement("p");
    taskDate.className = "date";
    taskDate.innerHTML = date;
    taskItem.appendChild(taskDate);

    const btn = document.createElement("button");
    btn.className = "close-btn";
    btn.innerHTML = "x";
    taskItem.appendChild(btn);

    createCheckbox(taskItem);
}
