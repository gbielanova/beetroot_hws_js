function task1(num1, num2) {
    return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
}

function task2(num) {
    if (num === 0)
        return 1;
    else {
        return num * task2(num - 1);
    }
}

function task3(num1, num2, num3) {
    return num1 * 100 + num2 * 10 + num3;
}

function task4(num1, num2 = num1) {
    return num1 * num2;
}

function task5(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    return sum === num;
}

function task6(num1, num2) {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        if (task5(i)) {
            result.push(i);
        }
    }

    return result;
}

function task7(hh = '00', min = '00', sec = '00') {
    (hh == '') ? hh = '00' : hh;
    (min == '') ? min = '00' : min;
    (sec == '') ? sec = '00' : sec;
    console.log(hh, min, sec);
    return `${hh}:${min}:${sec}`;
}