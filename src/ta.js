let i = 0;

const consoleToScreen = () => {
    console.log(i);
}

setInterval(() => {
    consoleToScreen(i);
    i++;

    if (i === 10) {
        return clearInterval(i);
    }
}, 1000);