// input nilai
let nilaiA = 20;
let nilaiB = 60;
let nilaiC = 10;

// sort secara ASC
function asc(a, b, c) {
    let group = [a, b, c];

    group.sort(function (a, b) {
        return a - b;
    })

    return group;
}

// sort secara DESC
function desc(a, b, c) {
    let group = [a, b, c];

    group.sort(function (a, b) {
        return b - a;
    })

    return group;
}

// nilai max
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// nilai min
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

// nilai rata-rata
function findAverage(a, b, c) {
    return (a + b + c) / 3;
}

// output hasil
console.log(`Nilai A : ${nilaiA}`);
console.log(`Nilai B : ${nilaiB}`);
console.log(`Nilai C : ${nilaiC}`);
console.log(`Urutan Nilai Ascending : ${asc(nilaiA, nilaiB, nilaiC)}`);
console.log(`Urutan Nilai Descending : ${desc(nilaiA, nilaiB, nilaiC)}`);
console.log(`Nilai Max : ${findMax(nilaiA, nilaiB, nilaiC)}`);
console.log(`Nilai Min : ${findMin(nilaiA, nilaiB, nilaiC)}`);
console.log(`Nilai Rata - Rata : ${findAverage(nilaiA, nilaiB, nilaiC)}`);