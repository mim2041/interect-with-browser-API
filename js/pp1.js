const add = (a,b) => {
    a = parseFloat(prompt('Enter first number'));
    b = parseFloat(prompt('Enter second number'));
    const sum = a+b;
    alert(sum);
}

const seeLocation = () => {
    const want = confirm('want to see your website location??');
    if(want==true){
        console.log(location);
    }
    else{
        console.log('ok ok');
    }
}