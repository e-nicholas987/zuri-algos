// 1.) Fahrenheit to Celcius

function fahrToCelcius(param) {

    if (typeof param === 'number' || param && typeof param === 'string' && isNaN(param) === false) {
        const res = (param - 32) * 5 / 9;
        return res === 0 ? res.toFixed(0) : res.toFixed(4);
    }

    return `${JSON.stringify(param)} is not a valid number but a/an ${typeof (param)}`;
}


// 2.) UhGiOh Checker

function checkUhGiOh(n) {

    if (typeof n === 'number' || n && typeof n === 'string' && isNaN(n) === false) {
        const arr = new Array(parseInt(n)).fill('');
        return arr.map((item, ind) => {
            const num = ind + 1;
            if (num % 2 === 0) {
                item += 'yu-';
            }
            if (num % 3 === 0) {
                item += 'gi-';
            }
            if (num % 5 === 0) {
                item += 'oh-';
            }
            if (item) {
                item = item.substr(0, item.length - 1);
            }
            else {
                item = num;
            }
            return item;
        })
    }

    return `invalid parameter: ${JSON.stringify(n)}`;
}