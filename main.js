// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener('click', (event) => {
    console.log(event.clientX,event.clientY);
    const color = getColor(event);
    document.body.style.backgroundColor = color;

    /*
    const x = e.clientX;
    const y = e.clientY;

    if (x%2 == 0 && y%2 == 0){
        document.body.style.backgroundColor = 'red';
    }
    else if (x%2 == 0 && y%2 != 0 || x%2 != 0 && y%2 == 0)
    {
        document.body.style.backgroundColor = 'green';
    }
    else{
        document.body.style.backgroundColor = 'blue';
    }
    console.log(x, y);
    */
})

const getColor = (e) => {
    if(e.clientX % 2 === 0 && e.clientY % 2 === 0){
        return 'red';
    }
    else if (e.clientX % 2 !== 0 && e.clientY % 2 === 0 || e.clientX % 2 !== 0 && e.clientY % 2 !== 0){
        return 'green'
    }
    else {
        return 'blue';
    }
    }