let btn1 = document.getElementById('btn1')
let ZoneText = document.getElementById('ZoneText')
let SupprimmerTout = document.getElementById('SupprimmerTout')
let Supprimmer = document.getElementById('Supprimmer')
let egal = document.getElementById('egal')


function Taper(i)
{
    ZoneText.value += i
}

function SupprimerToutelement()
{
    ZoneText.value = ""
}

function Supprimerelement()
{
    ZoneText.value = ZoneText.value.slice(0,ZoneText.value.length-1)
}

function Egalite()
{
    resultat = eval(ZoneText.value) 

    ZoneText.value = resultat
}

