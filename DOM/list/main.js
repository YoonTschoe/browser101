const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("#inputText");
// const btn = document.querySelector("button");



function listSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(input.value); // 신기하네

    const listContainer = document.createElement('div');
    listContainer.setAttribute('class', 'list__container');
    const li = document.createElement('li');
    li.textContent = `${input.value}`
    const createdDeleteBtn = document.createElement('button');
    createdDeleteBtn.setAttribute('class', 'deleteBtn');
    createdDeleteBtn.innerHTML = '<i class="fas fa-check"></i>';

    ul.appendChild(listContainer);
    listContainer.appendChild(li);
    listContainer.appendChild(createdDeleteBtn);

    form.reset();
}


// btn.addEventListener('click',  가능
// btn.addEventListener('submit', 불가능
form.addEventListener('submit', listSubmit);

ul.addEventListener('click', (e) => {
    const deleteTargetDiv = e.target.parentElement.parentElement;
    deleteTargetDiv.remove();
})

