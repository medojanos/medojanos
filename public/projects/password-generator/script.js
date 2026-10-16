function rInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let jelszo;

const kisbetuk = "abcdefghijklmnopqrstuvwxyz";
const nagybetuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const szamok = [1,2,3,4,5,6,7,8,9];
const specialiskarakterek = ["!", '"', "#", "$", "%", "&", "'", "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

function RK() 
{
    return kisbetuk[rInt(0, kisbetuk.length - 1)];
}

function RN() 
{
    return nagybetuk[rInt(0, nagybetuk.length - 1)];
}

function RSZ() 
{
    return szamok[rInt(0, szamok.length - 1)];
}

function RS() 
{
    return specialiskarakterek[rInt(0, specialiskarakterek.length - 1)];
}

let sajat = document.getElementById("sajat").checked;
let egyedi = document.getElementById("egyedi").checked;
let random = document.getElementById("random").checked;

let egyedi1 = document.getElementById("kisbetuk").checked;
let egyedi2 = document.getElementById("nagybetuk").checked;
let egyedi3 = document.getElementById("szamok").checked;
let egyedi4 = document.getElementById("specialis").checked;

let jhossz = document.getElementById("hossz").innerHTML;

let egyediek = [];

let valasztas = 3;


function hossz()
{
    document.getElementById("hossz").innerHTML = document.getElementById("csuszka").value;
    jhossz = document.getElementById("hossz").innerHTML;
}

function Sajat(k)
{
    for (let i = 0; i < jhossz; i++)
    {
        jelszo += k[rInt(0,k.length-1)];
    }
    if (k.length == 0)
    {
        alert("No custom characters given!")
    } else {
        document.getElementById("jelszo").innerHTML = jelszo;
    }
}

function Egyedi()
{
    egyedi1 = document.getElementById("kisbetuk").checked;
    egyedi2 = document.getElementById("nagybetuk").checked;
    egyedi3 = document.getElementById("szamok").checked;
    egyedi4 = document.getElementById("specialis").checked;
    if (egyedi1 == true)
    {
        if (!egyediek.includes(1))
        {
            egyediek.push(1);
        }
    }
    if (egyedi2 == true)
    {
        if (!egyediek.includes(2))
        {
            egyediek.push(2);
        }
    }
    if (egyedi3 == true)
    {
        if (!egyediek.includes(3))
        {
            egyediek.push(3);
        }
    }
    if (egyedi4 == true)
    {
        if (!egyediek.includes(4))
        {
            egyediek.push(4);
        }
    }
    for (let i = 0; i < jhossz; i++)
    {
        let x = rInt(0,egyediek.length-1);
        let y = egyediek[x];
        switch (y)
        {
            case 1:
                jelszo += RK();
                break;
            case 2:
                jelszo += RN();
                break;
            case 3:
                jelszo += RSZ();
                break;
            case 4:
                jelszo += RS();
                break;
        }
    }
    if (egyediek.length == 0)
    {
        alert("No characters choosed!");
    } else
    {
        document.getElementById("jelszo").innerHTML = jelszo;
    }
}

function Random()
{
    for (let i = 0; i < jhossz; i++)
    {
        let x = rInt(1,4)
        switch (x)
        {
            case 1:
                jelszo += RK();
                break;
            case 2:
                jelszo += RN();
                break;
            case 3:
                jelszo += RSZ();
                break;
            case 4:
                jelszo += RS();
                break;
        }
    }
    document.getElementById("jelszo").innerHTML = jelszo;
}

function valaszt(x)
{
    switch (x)
    {
        case "karakterek":
            document.getElementById("kisbetuk").checked = false;
            document.getElementById("nagybetuk").checked = false;
            document.getElementById("szamok").checked = false;
            document.getElementById("specialis").checked = false;
            document.getElementById("sajat").checked = true;
            valasztas = 1;
            break;
        case "egyediek":
            egyediek = [];
            egyedi1 = document.getElementById("kisbetuk").checked;
            egyedi2 = document.getElementById("nagybetuk").checked;
            egyedi3 = document.getElementById("szamok").checked;
            egyedi4 = document.getElementById("specialis").checked;
            if (egyedi1 || egyedi2 || egyedi3 || egyedi4 == true)
            {
                document.getElementById("egyedi").checked = true;
                document.getElementById("karakterek").value = "";
                valasztas = 2;
            }
            break;
        case "frissit":
            sajat = document.getElementById("sajat").checked;
            egyedi = document.getElementById("egyedi").checked;
            random = document.getElementById("random").checked;
            document.getElementById("karakterek").value = "";

            if (sajat == true)
            {  
                document.getElementById("kisbetuk").checked = false;
                document.getElementById("nagybetuk").checked = false;
                document.getElementById("szamok").checked = false;
                document.getElementById("specialis").checked = false;
                valasztas = 1;
            }
            else if (egyedi == true)
            {
                valasztas = 2;
            }
            else if (random == true)
            {
                document.getElementById("kisbetuk").checked = false;
                document.getElementById("nagybetuk").checked = false;
                document.getElementById("szamok").checked = false;
                document.getElementById("specialis").checked = false;
                valasztas = 3;
            }
            break;
    }
}

function generalas() 
{
    jelszo = "";
    document.getElementById("jelszo").innerHTML = jelszo;
    switch (valasztas)
    {
        case 1:
            Sajat(document.getElementById("karakterek").value);
            break;
        case 2:
            Egyedi();
            break;
        case 3:
            Random();
            break;
    }
}

function masolas() {
    if (jelszo == undefined)
    {
        alert("No password generated!")
    } else
    {
        navigator.clipboard.writeText(jelszo);
        alert("The password " + jelszo + " is copied");
    }
}

function alap() {
    document.location.href = "";
}