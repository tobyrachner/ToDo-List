console.log('Hello world')

function addNote() {
    const notes = document.getElementById('notes');
    const text = document.getElementById('add-text');
    const note = document.createElement('div');
    const input = document.createElement('input');
    const remove = document.createElement('button');

    note.classList.add('note');
    input.type = 'checkbox';
    remove.classList.add('delete');
    remove.setAttribute('onclick', "removeNote(this)");
    remove.innerText = 'Remove';

    note.append(input, text.value, remove);
    notes.append(note);
    text.value = '';
}

function removeNote(note) {
    note.parentElement.remove();
};