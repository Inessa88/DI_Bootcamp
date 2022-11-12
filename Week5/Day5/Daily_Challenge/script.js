const myAPIKey = '2fae68f923f79d44e7d6d35a';
async function fetchCurrencyList () {
    try {
        const urlExchangeRates = `https://v6.exchangerate-api.com/v6/${myAPIKey}/codes`;
        

        const resultExchangeRates = await fetch(urlExchangeRates);

        if (resultExchangeRates.status === 200) {
            const dataInfo = await resultExchangeRates.json();
            let currencyOneSelect = document.getElementById('currency1');
            let currencyTwoSelect = document.getElementById('currency2');
            for (currencyNameData of dataInfo.supported_codes) {
                let currencyShortName = currencyNameData[0];
                let currencyFullName = currencyNameData[1];
                let newOptionCurr1 = new Option(text=`${currencyShortName} - ${currencyFullName}`, value=currencyShortName);
                newOptionCurr1.id = `cur1-${currencyShortName}`;
                currencyOneSelect.add(newOptionCurr1);
                let newOptionCurr2 = new Option(text=`${currencyShortName} - ${currencyFullName}`, value=currencyShortName);
                newOptionCurr2.id = `cur2-${currencyShortName}`;
                currencyTwoSelect.add(newOptionCurr2);
            }
            document.getElementById('cur1-ILS').setAttribute('selected', 'selected');
            document.getElementById('cur2-USD').setAttribute('selected', 'selected');
        } else {
            throw new Error("problem");
        }

    } catch (err){
        console.log("the error is", err);
    }
}

fetchCurrencyList()


async function fetchConvertedAmount (urlExchangeAmount) {
    try {

        const resultExchangeAmount = await fetch(urlExchangeAmount);

        if (resultExchangeAmount.status === 200) {
            const exchangeData = await resultExchangeAmount.json();
            const conversionResult = exchangeData.conversion_result;
            let result = document.getElementById('result');
            result.innerText = conversionResult;
        } else {
            throw new Error("problem");
        }

    } catch (err){
        console.log("the error is", err);
    }
}

function currencyConverter(e) {
    e.preventDefault();
    const formData = e.target.elements
    const currency1 = formData.currency1.value;
    const currency2 = formData.currency2.value;
    const sum = formData.sum.value;
    const warning = document.getElementById('warning');
    if (sum < 0) {
        let span = document.createElement('span');
        span.innerText = '* Negative sums are not allowed! Sorry!';
        span.style.color = 'red';
        warning.appendChild(span);
    } else {
        warning.innerText = '';
        const urlExchangeAmount = `https://v6.exchangerate-api.com/v6/${myAPIKey}/pair/${currency1}/${currency2}/${sum}`
        fetchConvertedAmount(urlExchangeAmount)
    }
}
const myForm = document.getElementById('myForm')
myForm.addEventListener('submit', currencyConverter)