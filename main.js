
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    
    //Pievienošana
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task){
            alert("Lūdzu, aizpildi uzdevumu!");
            return;//Kruti
        }
        
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        //task_content_el.innerText=task;
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        //edit
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("rediģēt");
        task_edit_el.innerHTML = "Rediģēt";
        //Delete
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("dzēst");
        task_delete_el.innerHTML = "Dzēst";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value="";
        //editing
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "rediģēt") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Saglabāt";
            } else {
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText = "rediģēt";
            }
        });
        //deleting
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    })
})