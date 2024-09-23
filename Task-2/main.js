document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const timeInput = document.getElementById("timeInput");

    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskTime = timeInput.value;

    if (taskText !== "" && taskDate !== "" && taskTime !== "") {
        const taskList = document.getElementById("taskList");

        const li = document.createElement("li");
        li.textContent =` ${taskText} - Due: ${taskDate} ${taskTime}`;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear input fields
        taskInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    } else {
        alert("Please fill in all fields.");
    }
});