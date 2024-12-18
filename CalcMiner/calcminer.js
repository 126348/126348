"use strict"


let Bitcoin = Number(document.querySelector('.Bitcoin').value);
let th_s = Number(document.querySelector('.th_s').value);
let rub_kvt = Number(document.querySelector('.rub_kvt').value);
let kvt_h = Number(document.querySelector('.kvt_h').value);
let asic_cost = Number(document.querySelector('.asic_cost').value);

document.body.addEventListener("keydown", (Event) =>
{
    if (Event.ctrlKey)
    {
        Event.preventDefault()
    }
});

const displayMessageone = function (messageone)
{
    document.querySelector('.messageone').textContent = messageone;
};

const displaytwo = function (messagetwo)
{
    document.querySelector('.messagetwo').textContent = messagetwo;
};

const displaythree = function (messagethree)
{
    document.querySelector('.messagethree').textContent = messagethree;
}

document.querySelector('.check').addEventListener('click', function ()
{

    let kw = document.querySelector('.rub_kvt').value * document.querySelector('.kvt_h').value * 24 * 30
    let Hash = document.querySelector('.Bitcoin').value * 0.00000062 * document.querySelector('.th_s').value;
    let Hash_30 = Hash * 30;
    let Netprofit = Hash_30 - kw;
    let Payback = document.querySelector('.asic_cost').value / Netprofit;

    {

        displayMessageone(`${kw.toFixed()} rub month electricity`)
        displaytwo(`${Hash.toFixed()}  day... ${Hash_30.toFixed()}  month... ${Netprofit.toFixed()} Net profit...`)
        let integr = Math.floor(Payback), decimal = Payback - integr;
        let a = decimal * 10;
        let days = a;
        days = Math.floor(a), decimal = a - days;
        // displaythree(`Payback ${integr}   Month   ${days * 3} days`);

        let yer_12 = 12;
        let yer = 1;

        if (integr < 12)
        {
            displaythree(`${integr} month ${days * 3} days => payback`)
        } else if (integr < 24)
        {
            displaythree(`${yer} yer ${integr - yer_12} month ${days * 3} days => payback`)
        } else if (integr >= 24)
        {
            yer = 2
            integr - 24
            displaythree(`${yer} yer ${integr - 24} month ${days * 3} days => payback`)
        }
        if (integr >= 36)
        {
            displaythree(`Payback period over 3 years 😒`)
        }
        console.log(integr);
    }

});
