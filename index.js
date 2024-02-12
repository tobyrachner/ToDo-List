console.log('Hello world')

function addNote() {
    const text = document.getElementById('add-text');
    if (text.value != '') {
        const notes = document.getElementById('notes');
        const note = document.createElement('div');
        const inner = document.createElement('div');
        const input = document.createElement('input');
        const remove = document.createElement('button');

        note.classList.add('note');
        input.type = 'checkbox';
        input.classList.add('check')
        remove.classList.add('delete');
        remove.setAttribute('onclick', "removeNote(this)");
        remove.innerText = 'Remove';

        inner.append(text.value, remove)
        note.append(input, inner);
        notes.append(note);
        text.value = '';
    }
}

function removeNote(note) {
    note.parentElement.parentElement.remove();
};