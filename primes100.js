let htmlPrimes = document.getElementById("primes");
let htmlDevisors = document.getElementById("devisors");
let htmlMinValue = document.getElementById("min-value");
let htmlMaxValue = document.getElementById("max-value");
let htmlSubmitRange = document.getElementById("submit-range");

htmlSubmitRange.addEventListener("click", () => {
    run();
});

function run() {
    htmlPrimes.innerHTML = "";
    htmlDevisors.innerHTML = "";

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

    function appendDevisors(number) {
        last = false;
        for (let i = 2; i < (number / 2 + 1); i++) {

            if (i === number / 2) {
                last = true;
            }

            if (number % i == 0) {
                if (!last) {
                    htmlDevisors.innerHTML += `<div><span class="devisor">${i}</span>, </div>`;
                }
                else {
                    htmlDevisors.innerHTML += `<div><span class="devisor">${i}</span></div>`;
                }
            }
        }
    }

    for (let i = minValue; i <= maxValue; i++) {
        if (!isPrime(i)) {
            if (minValue === maxValue) {
                appendDevisors(i);
            }
            else {
                i != maxValue ? htmlPrimes.innerHTML += `<div><span class="non-prime">${i}</span>, </div>` : htmlPrimes.innerHTML += `<div><span class="non-prime">${i}</span></div>`;
            }
        }
        else if (isPrime(i)) {
            i != maxValue ? htmlPrimes.innerHTML += `<div><span class="prime">${i}</span>, </div>` : htmlPrimes.innerHTML += `<div><span class="prime">${i}</span></div>`;
        }
    }
}