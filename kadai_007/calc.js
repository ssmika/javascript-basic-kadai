let num = 15;

remainder3 = num % 3;
remainder5 = num % 5;

if (remainder3 == 0 && remainder5 == 0) {
    console.log('3と5の倍数です');
}   else if (remainder3 == 0) {
        console.log('3の倍数です');
    }   else if (remainder5 == 0) {
        console.log('5の倍数です');
}
else { console.log(num);
}