const input: HTMLElement | null = document.getElementById('input');
const addToDo: HTMLElement | null = document.getElementById('addToDo');
const list: HTMLElement | null = document.getElementById('list');

function addToDoList() {
    if (input && (input as HTMLInputElement).value) {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<button class="listItem" style="background:none; border:none">${(input as HTMLInputElement).value}</button>`;

        if (list) {
            list.appendChild(newItem);

            const newButton = newItem.querySelector('button');
            if (newButton) {
                newButton.addEventListener('click', removeListItem);
            }
        }

        (input as HTMLInputElement).value = '';
    }
}

if (addToDo) {
    addToDo.addEventListener('click', addToDoList);
}

function removeListItem(this: HTMLButtonElement) {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
}