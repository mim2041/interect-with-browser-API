// alert('How are you');

const showAlert = () => {
    alert('Dosto, taka dhar dite parbi? just 500')
}

const landMoney = () => {
    const result = confirm('Will you lend me 500 taka?');
    console.log(result);
    if(result === true){
        alert('tui amar jan er dosto!!!');
    }
    else{
        console.log('DGM.... Toke ajkei block maira dimu');
    }
}

const getInfo = () => {
    const name = prompt('Tell me your name');
    console.log(name);
    if(name === null){
        alert('Naam na dile kaam nai!!');
    }
    else{
        console.log(name, "welcome to this world");
    }
}