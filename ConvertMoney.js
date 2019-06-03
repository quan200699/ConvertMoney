function Result() {
    var Money = document.getElementById("money").value;
    var FromCurrency = $("#fromcurrency option:selected").text();
    var ToCurrency = $("#tocurrency option:selected").text();
    var exchangerate = Exchangerate(FromCurrency,ToCurrency);
    var result =ConvertMoney(Money,FromCurrency,ToCurrency,exchangerate);
    document.getElementById("result").innerHTML = result + " "+ToCurrency;
}
function ConvertMoney(Amount,FromCurrency,ToCurrency,ExchangeRate) {
    var Money;
    if(FromCurrency==ToCurrency)
    {
        Money=Amount;
    }
    else
    {
        Money=Amount*ExchangeRate;
    }
    return Money;
}
function Exchangerate(From,To) {
    var exchangerate;
    if(From==='USD'&&To==='VND')
    {
        exchangerate=23000;
    }
    if(From ==='VND' && To === 'USD')
    {
        exchangerate = 1/23000;
    }
    if(From ==='EUR' && To === 'USD')
    {
        exchangerate = 1.12;
    }
    if(From === 'USD' && To === 'EUR')
    {
        exchangerate = 0.89;
    }
    if(From ==='EUR' && To === 'VND')
    {
        exchangerate = 26000;
    }
    if(From === 'VND' && To === 'EUR')
    {
        exchangerate = 1/26000;
    }
    if(From === 'GBP' && To === 'VND')
    {
        exchangerate = 29500;
    }
    if(From === 'VND' && To === 'GBP')
    {
        exchangerate = 1/29500;
    }
    if(From === 'GBP' && To === 'USD')
    {
        exchangerate = 1.2;
    }
    if(From === 'USD' && To === 'GBP')
    {
        exchangerate = 0.78;
    }
    if(From === 'GBP' && To === 'EUR')
    {
        exchangerate = 1.13;
    }
    if(From === 'EUR' && To === 'GBP')
    {
        exchangerate = 0.88;
    }
    return exchangerate;
}