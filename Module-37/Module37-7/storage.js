// localStorage.setItem('laptop',  12)
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const valueInput = document.getElementById('storage-value');
    const id = idInput.value;
    const value = valueInput.value;
    //
    if(id && value)
    localStorage.setItem(id, value);
    idInput.value = '';
    valueInput.value = '';
}