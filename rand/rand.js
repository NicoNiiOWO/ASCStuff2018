function rand(){
    const decimal = Math.random();
    const times10 = decimal * 10;
    const final = Math.floor(times10);
    console.log(final);
}

rand();