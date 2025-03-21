let htmlPrimes = document.getElementById("primes");
let htmlMinValue = document.getElementById("min-value");
let htmlMaxValue = document.getElementById("max-value");
let htmlSubmitRange = document.getElementById("submit-range");

htmlSubmitRange.addEventListener("click", () => {
    run();
});

function run() {
    htmlPrimes.innerHTML = "";
    
    let minValue = htmlMinValue.value | 0;
    let maxValue = htmlMaxValue.value | 0;

    function isPrime(number) {
        if (number == 1) {
            return false;
        }

        if (number == 2) {
            return true;
        }

        if (number % 2 == 0) {
            return false;
        }

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }

    for (let i = minValue; i <= maxValue; i++) {
        if (!isPrime(i)) {
            i != maxValue ? htmlPrimes.innerHTML += `<div><span class="non-prime">${i}</span>, </div>` : htmlPrimes.innerHTML += `<div><span class="non-prime">${i}</span></div>`;
        }
        else if (isPrime(i)) {
            i != maxValue ? htmlPrimes.innerHTML += `<div><span class="prime">${i}</span>, </div>` : htmlPrimes.innerHTML += `<div><span class="prime">${i}</span></div>`;
        }
    }
}