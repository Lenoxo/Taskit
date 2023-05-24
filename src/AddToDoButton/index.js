import './AddToDoButton.css'

function AddToDoButton() {
return (
    <button className='AddToDoButton' onClick={(event) => {
        console.log('Le diste click');
        console.log(event);
        console.log(event.target);
    }}>+</button>
);
}

export { AddToDoButton }