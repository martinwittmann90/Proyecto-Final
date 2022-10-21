const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form1 = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
form1.addEventListener("submit", function (e) {
  e.preventDefault();
});
submitBtn.addEventListener("click", function () {
  localStorage.setItem("name", getName.value);
  nameDisplayCheck();
});
forgetBtn.addEventListener("click", function () {
  localStorage.removeItem("name");
  nameDisplayCheck();
});
function nameDisplayCheck() {
  if (localStorage.getItem("name")) {
    let name = localStorage.getItem("name");
    h1.textContent = `${name}`
    forgetMe.style.display = "inline";
    rememberMe.style.display = "none";
  } else {
    h1.textContent = `Usuario anonimo`;
    forgetMe.style.display = "none";
    rememberMe.style.display = "inline";}}
    document.body.onload = nameDisplayCheck; 

(function(original) {
    parseInt = function() {
        return original.apply(window, arguments) || 0;
    };
})(parseInt);
$(document).on('ready', constructor);
function constructor()
{
  $('#contenido input:not([readonly])').change( function (e) {
    let id = $(this).data('id'); 
    if(!id) return; 
    let num1 = parseInt( $('#equipoLocal'+id).val() );
    let num2 = parseInt( $('#equipoVisitante'+id).val() );
    if (num1 > num2) {
    local = 3;
    visitante = 0;}
    else if (num1 < num2) {
    local = 0;
    visitante = 3;
      }
      else {
      local = 1;
      visitante = 1;
      }
    let resultadolocal = local
    $('#teamlocal'+id).val(resultadolocal);
    let resultadovisitante = visitante
    $('#teamvisita'+id).val(resultadovisitante);

    //CALCULO PUNTOS GRUPO A
    ptosqat.innerText = parseInt(teamlocal1.value) + parseInt(teamlocal3.value) + parseInt(teamvisita6.value) 
    ptosecu.innerText = parseInt(teamvisita1.value) + parseInt(teamvisita4.value) + parseInt(teamlocal5.value)
    ptossen.innerText = parseInt(teamlocal2.value) + parseInt(teamvisita3.value) + parseInt(teamvisita5.value)
    ptospbj.innerText = parseInt(teamvisita2.value) + parseInt(teamlocal4.value) + parseInt(teamlocal6.value)
    //CALCULO GOLES A FAVOR GRUPO A
    golesqat.innerText = parseInt(equipoLocal1.value) + parseInt(equipoLocal3.value) + parseInt(equipoVisitante6.value)
    golesecu.innerText = parseInt(equipoVisitante1.value) + parseInt(equipoVisitante4.value) + parseInt(equipoLocal5.value)
    golessen.innerText = parseInt(equipoLocal2.value) + parseInt(equipoVisitante3.value) + parseInt(equipoVisitante5.value)
    golespbj.innerText = parseInt(equipoVisitante2.value) + parseInt(equipoLocal4.value) + parseInt(equipoLocal6.value)
    //CALCULO GOLES EN CONTRA GRUPO A
    golesconqat.innerText = parseInt(equipoVisitante1.value) + parseInt(equipoVisitante3.value) + parseInt(equipoLocal6.value)
    golesconecu.innerText = parseInt(equipoLocal1.value) + parseInt(equipoLocal4.value) + parseInt(equipoVisitante5.value)
    golesconsen.innerText = parseInt(equipoVisitante2.value) + parseInt(equipoLocal3.value) + parseInt(equipoLocal5.value)
    golesconpbj.innerText = parseInt(equipoLocal2.value) + parseInt(equipoVisitante4.value) + parseInt(equipoVisitante6.value)
    //DIFERENCIA GOLES GRUPO A
    difgolqat.innerText = parseInt(golesqat.innerText) - parseInt(golesconqat.innerText)
    difgolecu.innerText = parseInt(golesecu.innerText) - parseInt(golesconecu.innerText)
    difgolsen.innerText = parseInt(golessen.innerText) - parseInt(golesconsen.innerText)
    difgolpbj.innerText = parseInt(golespbj.innerText) - parseInt(golesconpbj.innerText) 
    //CALCULO PUNTOS GRUPO B
    ptosing.innerText = parseInt(teamlocal7.value) + parseInt(teamvisita10.value) + parseInt(teamvisita11.value) 
    ptosira.innerText = parseInt(teamvisita7.value) + parseInt(teamvisita9.value) + parseInt(teamlocal12.value)
    ptosgal.innerText = parseInt(teamvisita8.value) + parseInt(teamlocal9.value) + parseInt(teamlocal11.value)
    ptosusa.innerText = parseInt(teamlocal8.value) + parseInt(teamlocal10.value) + parseInt(teamvisita12.value)
    //CALCULO GOLES A FAVOR GRUPO B
    golesing.innerText = parseInt(equipoLocal7.value) + parseInt(equipoVisitante10.value) + parseInt(equipoVisitante11.value)
    golesira.innerText = parseInt(equipoVisitante7.value) + parseInt(equipoVisitante9.value) + parseInt(equipoLocal12.value)
    golesgal.innerText = parseInt(equipoVisitante8.value) + parseInt(equipoLocal9.value) + parseInt(equipoLocal11.value)
    golesusa.innerText = parseInt(equipoLocal8.value) + parseInt(equipoLocal10.value) + parseInt(equipoVisitante12.value)
    //CALCULO GOLES EN CONTRA GRUPO B
    golesconing.innerText = parseInt(equipoVisitante7.value) + parseInt(equipoLocal10.value) + parseInt(equipoLocal11.value)
    golesconira.innerText = parseInt(equipoLocal7.value) + parseInt(equipoLocal9.value) + parseInt(equipoVisitante12.value)
    golescongal.innerText = parseInt(equipoLocal8.value) + parseInt(equipoVisitante9.value) + parseInt(equipoVisitante11.value)
    golesconusa.innerText = parseInt(equipoVisitante8.value) + parseInt(equipoVisitante10.value) + parseInt(equipoLocal12.value)
    //DIFERENCIA GOLES GRUPO B
    difgoling.innerText = parseInt(golesing.innerText) - parseInt(golesconing.innerText)
    difgolira.innerText = parseInt(golesira.innerText) - parseInt(golesconira.innerText)
    difgolgal.innerText = parseInt(golesgal.innerText) - parseInt(golescongal.innerText)
    difgolusa.innerText = parseInt(golesusa.innerText) - parseInt(golesconusa.innerText)
    //CALCULO PUNTOS GRUPO C
    ptosarg.innerText = parseInt(teamlocal13.value) + parseInt(teamlocal15.value) + parseInt(teamlocal17.value) 
    ptosars.innerText = parseInt(teamvisita13.value) + parseInt(teamlocal16.value) + parseInt(teamvisita18.value)
    ptosmex.innerText = parseInt(teamlocal14.value) + parseInt(teamvisita15.value) + parseInt(teamlocal18.value)
    ptospol.innerText = parseInt(teamvisita14.value) + parseInt(teamvisita16.value) + parseInt(teamvisita17.value)
    //CALCULO GOLES A FAVOR GRUPO C
    golesarg.innerText = parseInt(equipoLocal13.value) + parseInt(equipoLocal15.value) + parseInt(equipoLocal17.value)
    golesars.innerText = parseInt(equipoVisitante13.value) + parseInt(equipoLocal16.value) + parseInt(equipoVisitante18.value)
    golesmex.innerText = parseInt(equipoLocal14.value) + parseInt(equipoVisitante15.value) + parseInt(equipoLocal18.value)
    golespol.innerText = parseInt(equipoVisitante14.value) + parseInt(equipoVisitante16.value) + parseInt(equipoVisitante17.value)
    //CALCULO GOLES EN CONTRA GRUPO C
    golesconarg.innerText = parseInt(equipoVisitante13.value) + parseInt(equipoVisitante15.value) + parseInt(equipoVisitante17.value)
    golesconars.innerText = parseInt(equipoLocal13.value) + parseInt(equipoVisitante16.value) + parseInt(equipoLocal18.value)
    golesconmex.innerText = parseInt(equipoVisitante14.value) + parseInt(equipoLocal15.value) + parseInt(equipoVisitante18.value)
    golesconpol.innerText = parseInt(equipoLocal14.value) + parseInt(equipoLocal16.value) + parseInt(equipoLocal17.value)
    //DIFERENCIA GOLES GRUPO C
    difgolarg.innerText = parseInt(golesarg.innerText) - parseInt(golesconarg.innerText)
    difgolars.innerText = parseInt(golesars.innerText) - parseInt(golesconars.innerText)
    difgolmex.innerText = parseInt(golesmex.innerText) - parseInt(golesconmex.innerText)
    difgolpol.innerText = parseInt(golespol.innerText) - parseInt(golesconpol.innerText)
    //CALCULO PUNTOS GRUPO D
    ptosfra.innerText = parseInt(teamlocal19.value) + parseInt(teamlocal22.value) + parseInt(teamvisita24.value) 
    ptosaus.innerText = parseInt(teamvisita19.value) + parseInt(teamvisita21.value) + parseInt(teamlocal23.value)
    ptosdin.innerText = parseInt(teamlocal20.value) + parseInt(teamvisita22.value) + parseInt(teamvisita23.value)
    ptostun.innerText = parseInt(teamvisita20.value) + parseInt(teamlocal21.value) + parseInt(teamlocal24.value)
    //CALCULO GOLES A FAVOR GRUPO D
    golesfra.innerText = parseInt(equipoLocal19.value) + parseInt(equipoLocal22.value) + parseInt(equipoVisitante24.value)
    golesaus.innerText = parseInt(equipoVisitante19.value) + parseInt(equipoVisitante21.value) + parseInt(equipoLocal23.value)
    golesdin.innerText = parseInt(equipoLocal20.value) + parseInt(equipoVisitante22.value) + parseInt(equipoVisitante23.value)
    golestun.innerText = parseInt(equipoVisitante20.value) + parseInt(equipoLocal21.value) + parseInt(equipoLocal24.value)
    //CALCULO GOLES EN CONTRA GRUPO D
    golesconfra.innerText = parseInt(equipoVisitante19.value) + parseInt(equipoVisitante22.value) + parseInt(equipoLocal24.value)
    golesconaus.innerText = parseInt(equipoLocal19.value) + parseInt(equipoLocal21.value) + parseInt(equipoVisitante23.value)
    golescondin.innerText = parseInt(equipoVisitante20.value) + parseInt(equipoLocal22.value) + parseInt(equipoLocal23.value)
    golescontun.innerText = parseInt(equipoLocal20.value) + parseInt(equipoVisitante21.value) + parseInt(equipoVisitante24.value)
    //DIFERENCIA GOLES GRUPO D
    difgolfra.innerText = parseInt(golesfra.innerText) - parseInt(golesconfra.innerText)
    difgolaus.innerText = parseInt(golesaus.innerText) - parseInt(golesconaus.innerText)
    difgoldin.innerText = parseInt(golesdin.innerText) - parseInt(golescondin.innerText)
    difgoltun.innerText = parseInt(golestun.innerText) - parseInt(golescontun.innerText)
    //CALCULO PUNTOS GRUPO E
    ptosesp.innerText = parseInt(teamlocal26.value) + parseInt(teamlocal27.value) + parseInt(teamlocal29.value) 
    ptoscra.innerText = parseInt(teamvisita26.value) + parseInt(teamlocal28.value) + parseInt(teamlocal30.value)
    ptosale.innerText = parseInt(teamlocal25.value) + parseInt(teamvisita27.value) + parseInt(teamvisita30.value)
    ptosjap.innerText = parseInt(teamvisita25.value) + parseInt(teamvisita28.value) + parseInt(teamvisita29.value)
    //CALCULO GOLES A FAVOR GRUPO E
    golesesp.innerText = parseInt(equipoLocal26.value) + parseInt(equipoLocal27.value) + parseInt(equipoLocal29.value)
    golescra.innerText = parseInt(equipoVisitante26.value) + parseInt(equipoLocal28.value) + parseInt(equipoLocal30.value)
    golesale.innerText = parseInt(equipoLocal25.value) + parseInt(equipoVisitante27.value) + parseInt(equipoVisitante30.value)
    golesjap.innerText = parseInt(equipoVisitante25.value) + parseInt(equipoVisitante28.value) + parseInt(equipoVisitante29.value)
    //CALCULO GOLES EN CONTRA GRUPO E
    golesconesp.innerText = parseInt(equipoVisitante26.value) + parseInt(equipoVisitante27.value) + parseInt(equipoVisitante29.value)
    golesconcra.innerText = parseInt(equipoLocal26.value) + parseInt(equipoVisitante28.value) + parseInt(equipoVisitante30.value)
    golesconale.innerText = parseInt(equipoVisitante25.value) + parseInt(equipoLocal27.value) + parseInt(equipoLocal30.value)
    golesconjap.innerText = parseInt(equipoLocal25.value) + parseInt(equipoLocal28.value) + parseInt(equipoLocal29.value)
    //DIFERENCIA GOLES GRUPO E
    difgolesp.innerText = parseInt(golesesp.innerText) - parseInt(golesconesp.innerText)
    difgolcra.innerText = parseInt(golescra.innerText) - parseInt(golesconcra.innerText)
    difgolale.innerText = parseInt(golesale.innerText) - parseInt(golesconale.innerText)
    difgoljap.innerText = parseInt(golesjap.innerText) - parseInt(golesconjap.innerText)
    //CALCULO PUNTOS GRUPO F
    ptosbel.innerText = parseInt(teamlocal32.value) + parseInt(teamlocal33.value) + parseInt(teamvisita35.value) 
    ptoscan.innerText = parseInt(teamvisita32.value) + parseInt(teamvisita34.value) + parseInt(teamlocal36.value)
    ptosmar.innerText = parseInt(teamlocal31.value) + parseInt(teamvisita33.value) + parseInt(teamvisita36.value)
    ptoscro.innerText = parseInt(teamvisita31.value) + parseInt(teamlocal34.value) + parseInt(teamlocal35.value)
    //CALCULO GOLES A FAVOR GRUPO F
    golesbel.innerText = parseInt(equipoLocal32.value) + parseInt(equipoLocal33.value) + parseInt(equipoVisitante35.value)
    golescan.innerText = parseInt(equipoVisitante32.value) + parseInt(equipoVisitante34.value) + parseInt(equipoLocal36.value)
    golesmar.innerText = parseInt(equipoLocal31.value) + parseInt(equipoVisitante33.value) + parseInt(equipoVisitante36.value)
    golescro.innerText = parseInt(equipoVisitante31.value) + parseInt(equipoLocal34.value) + parseInt(equipoLocal35.value)
    //CALCULO GOLES EN CONTRA GRUPO F
    golesconbel.innerText = parseInt(equipoVisitante32.value) + parseInt(equipoVisitante33.value) + parseInt(equipoLocal35.value)
    golesconcan.innerText = parseInt(equipoLocal32.value) + parseInt(equipoLocal34.value) + parseInt(equipoVisitante36.value)
    golesconmar.innerText = parseInt(equipoVisitante31.value) + parseInt(equipoLocal33.value) + parseInt(equipoLocal36.value)
    golesconcro.innerText = parseInt(equipoLocal31.value) + parseInt(equipoVisitante34.value) + parseInt(equipoVisitante35.value)
    //DIFERENCIA GOLES GRUPO F
    difgolbel.innerText = parseInt(golesbel.innerText) - parseInt(golesconbel.innerText)
    difgolcan.innerText = parseInt(golescan.innerText) - parseInt(golesconcan.innerText)
    difgolmar.innerText = parseInt(golesmar.innerText) - parseInt(golesconmar.innerText)
    difgolcro.innerText = parseInt(golescro.innerText) - parseInt(golesconcro.innerText)
        
parseInt('') === 0 
  });} 

let database = 'valores_de_input'

const getData = async () => {
  const res = await localStorage[database] ? JSON.parse(localStorage[database]) : []
  return res
}
const setData = (data) => {
  localStorage[database] = JSON.stringify(data)
}
const mainId = "contenido";
const url = location.href;
let main = document.querySelector(`#${mainId}`);

const datosFormulario = [];

const nombreCompleto = document.getElementById("entername");
const email = document.getElementById("email");
//GOLES GRUPO A - FECHA 1
const qatar1 = document.getElementById("equipoLocal1");
const ecuador1 = document.getElementById("equipoVisitante1");
const senegal1 = document.getElementById("equipoLocal2");
const pbajos1 = document.getElementById("equipoVisitante2");
//GOLES GRUPO A - FECHA 2
const qatar2 = document.getElementById("equipoLocal3");
const senegal2 = document.getElementById("equipoVisitante3");
const ecuador2 = document.getElementById("equipoLocal4");
const pbajos2 = document.getElementById("equipoVisitante4");
//GOLES GRUPO A - FECHA 3
const ecuador3 = document.getElementById("equipoLocal5");
const senegal3 = document.getElementById("equipoVisitante5");
const pbajos3 = document.getElementById("equipoLocal6");
const qatar3 = document.getElementById("equipoVisitante6");
//PUNTOS QATAR
const puntosQatar1 = document.getElementById("teamlocal1");
const puntosQatar2 = document.getElementById("teamlocal3");
const puntosQatar3 = document.getElementById("teamvisita6");
//PUNTOS ECUADOR
const puntosEcuador1 = document.getElementById("teamvisita1");
const puntosEcuador2 = document.getElementById("teamvisita4");
const puntosEcuador3 = document.getElementById("teamlocal5");
//PUNTOS SENEGAL
const puntosSenegal1 = document.getElementById("teamlocal2");
const puntosSenegal2 = document.getElementById("teamvisita3");
const puntosSenegal3 = document.getElementById("teamvisita5");
//PUNTOS PAISES BAJOS
const puntosPaisesBajos1 = document.getElementById("teamvisita2");
const puntosPaisesBajos2 = document.getElementById("teamlocal4");
const puntosPaisesBajos3 = document.getElementById("teamlocal6");
//GRUPO B - FECHA 1
const inglaterra1 = document.getElementById("equipoLocal7");
const iran1 = document.getElementById("equipoVisitante7");
const eeuu1 = document.getElementById("equipoLocal8");
const gales1 = document.getElementById("equipoVisitante8");
//GRUPO B - FECHA 2
const gales2 = document.getElementById("equipoLocal9");
const iran2 = document.getElementById("equipoVisitante9");
const eeuu2 = document.getElementById("equipoLocal10");
const inglaterra2 = document.getElementById("equipoVisitante10");
//GRUPO B - FECHA 3
const gales3 = document.getElementById("equipoLocal11");
const inglaterra3 = document.getElementById("equipoVisitante11");
const iran3 = document.getElementById("equipoLocal12");
const eeuu3 = document.getElementById("equipoVisitante12");
//PUNTOS INGLATERRA
const puntosInglaterra1 = document.getElementById("teamlocal7");
const puntosInglaterra2 = document.getElementById("teamvisita10");
const puntosInglaterra3 = document.getElementById("teamvisita11");
//PUNTOS IRAN
const puntosIran1 = document.getElementById("teamvisita7");
const puntosIran2 = document.getElementById("teamvisita9");
const puntosIran3 = document.getElementById("teamlocal12");
//PUNTOS EEUU
const puntosEeuu1 = document.getElementById("teamlocal8");
const puntosEeuu2 = document.getElementById("teamlocal10");
const puntosEeuu3 = document.getElementById("teamvisita12");
//PUNTOS GALES
const puntosGales1 = document.getElementById("teamvisita8");
const puntosGales2 = document.getElementById("teamlocal9");
const puntosGales3 = document.getElementById("teamlocal11");
//GRUPO C - FECHA 1
const argentina1 = document.getElementById("equipoLocal13");
const arabia1 = document.getElementById("equipoVisitante13");
const mexico1 = document.getElementById("equipoLocal14");
const polonia1 = document.getElementById("equipoVisitante14");
//GRUPO C - FECHA 2
const argentina2 = document.getElementById("equipoLocal13");
const mexico2 = document.getElementById("equipoVisitante13");
const arabia2 = document.getElementById("equipoLocal14");
const polonia2 = document.getElementById("equipoVisitante14");
//GRUPO C - FECHA 3
const argentina3 = document.getElementById("equipoLocal15");
const polonia3 = document.getElementById("equipoVisitante15");
const mexico3 = document.getElementById("equipoLocal16");
const arabia3 = document.getElementById("equipoVisitante16");
//PUNTOS ARGENTINA
const puntosArgentina1 = document.getElementById("teamlocal13");
const puntosArgentina2 = document.getElementById("teamlocal15");
const puntosArgentina3 = document.getElementById("teamlocal17");
//PUNTOS ARABIA SAUDITA
const puntosArabia1 = document.getElementById("teamvisita13");
const puntosArabia2 = document.getElementById("teamlocal16");
const puntosArabia3 = document.getElementById("teamvisita18");
//PUNTOS MEXICO
const puntosMexico1 = document.getElementById("teamlocal14");
const puntosMexico2 = document.getElementById("teamvisita15");
const puntosMexico3 = document.getElementById("teamlocal18");
//PUNTOS POLONIA
const puntosPolonia1 = document.getElementById("teamvisita14");
const puntosPolonia2 = document.getElementById("teamvisita16");
const puntosPolonia3 = document.getElementById("teamvisita17");
//GRUPO D - FECHA 1
const francia1 = document.getElementById("equipoLocal13");
const australia1 = document.getElementById("equipoVisitante13");
const dinamarca1 = document.getElementById("equipoLocal14");
const tunez1 = document.getElementById("equipoVisitante14");
//GRUPO D - FECHA 2
const tunez2 = document.getElementById("equipoLocal13");
const australia2 = document.getElementById("equipoVisitante13");
const francia2 = document.getElementById("equipoLocal14");
const dinamarca2 = document.getElementById("equipoVisitante14");
//GRUPO D - FECHA 3
const australia3 = document.getElementById("equipoLocal15");
const dinamarca3 = document.getElementById("equipoVisitante15");
const tunez3 = document.getElementById("equipoLocal16");
const francia3 = document.getElementById("equipoVisitante16");
//PUNTOS FRANCIA
const puntosFrancia1 = document.getElementById("teamlocal19");
const puntosFrancia2 = document.getElementById("teamlocal22");
const puntosFrancia3 = document.getElementById("teamvisita24");
//PUNTOS AUSTRALIA
const puntosAustralia1 = document.getElementById("teamvisita19");
const puntosAustralia2 = document.getElementById("teamvisita21");
const puntosAustralia3 = document.getElementById("teamlocal23");
//PUNTOS DINAMARCA
const puntosDinamarca1 = document.getElementById("teamlocal20");
const puntosDinamarca2 = document.getElementById("teamvisita22");
const puntosDinamarca3 = document.getElementById("teamvisita23");
//PUNTOS TUNEZ
const puntosTunez1 = document.getElementById("teamvisita20");
const puntosTunez2 = document.getElementById("teamlocal21");
const puntosTunez3 = document.getElementById("teamlocal24");
//GRUPO E - FECHA 1
const alemania1 = document.getElementById("equipoLocal25");
const japon1 = document.getElementById("equipoVisitante25");
const españa1 = document.getElementById("equipoLocal26");
const costa1 = document.getElementById("equipoVisitante26");
//GRUPO E - FECHA 2
const japon2 = document.getElementById("equipoVisitante28");
const españa2 = document.getElementById("equipoLocal27");
const costa2 = document.getElementById("equipoLocal28");
const alemania2 = document.getElementById("equipoVisitante27");
//GRUPO E - FECHA 3
const japon3 = document.getElementById("equipoVisitante29");
const costa3 = document.getElementById("equipoLocal30");
const españa3 = document.getElementById("equipoLocal29");
const alemania3 = document.getElementById("equipoVisitante30");
//PUNTOS ALEMANIA
const puntosAlemania1 = document.getElementById("teamlocal25");
const puntosAlemania2 = document.getElementById("teamvisita27");
const puntosAlemania3 = document.getElementById("teamvisita30");
//PUNTOS JAPON
const puntosJapon1 = document.getElementById("teamvisita25");
const puntosJapon2 = document.getElementById("teamvisita28");
const puntosJapon3 = document.getElementById("teamvisita29");
//PUNTOS ESPAÑA
const puntosEspaña1 = document.getElementById("teamlocal26");
const puntosEspaña2 = document.getElementById("teamlocal27");
const puntosEspaña3 = document.getElementById("teamlocal29");
//PUNTOS COSTA RICA
const puntosCosta1 = document.getElementById("teamvisita26");
const puntosCosta2 = document.getElementById("teamlocal28");
const puntosCosta3 = document.getElementById("teamlocal30");
//GRUPO F - FECHA 1
const marruecos1 = document.getElementById("equipoLocal25");
const croacia1 = document.getElementById("equipoVisitante25");
const belgica1 = document.getElementById("equipoLocal26");
const canada1 = document.getElementById("equipoVisitante26");
//GRUPO F - FECHA 2
const belgica2 = document.getElementById("equipoVisitante28");
const marruecos2 = document.getElementById("equipoLocal27");
const croacia2 = document.getElementById("equipoLocal28");
const canada2 = document.getElementById("equipoVisitante27");
//GRUPO F - FECHA 3
const croacia3 = document.getElementById("equipoVisitante29");
const belgica3 = document.getElementById("equipoLocal30");
const canada3 = document.getElementById("equipoLocal29");
const marruecos3 = document.getElementById("equipoVisitante30");
//PUNTOS MARRUECOS
const puntosMarruecos1 = document.getElementById("teamlocal31");
const puntosMarruecos2 = document.getElementById("teamvisita33");
const puntosMarruecos3 = document.getElementById("teamvisita36");
//PUNTOS CROACIA
const puntosCroacia1 = document.getElementById("teamvisita31");
const puntosCroacia2 = document.getElementById("teamlocal34");
const puntosCroacia3 = document.getElementById("teamlocal35");
//PUNTOS BELGICA
const puntosBelgica1 = document.getElementById("teamlocal32");
const puntosBelgica2 = document.getElementById("teamlocal33");
const puntosBelgica3 = document.getElementById("teamvisita35");
//PUNTOS CANADA
const puntosCanada1 = document.getElementById("teamvisita32");
const puntosCanada2 = document.getElementById("teamvisita34");
const puntosCanada3 = document.getElementById("teamlocal36");
//GRUPO G - FECHA 1
const suiza1 = document.getElementById("equipoLocal37");
const camerun1 = document.getElementById("equipoVisitante37");
const brasil1 = document.getElementById("equipoLocal38");
const serbia1 = document.getElementById("equipoVisitante38");
//GRUPO G - FECHA 2
const camerun2 = document.getElementById("equipoLocal39");
const serbia2 = document.getElementById("equipoVisitante39");
const brasil2 = document.getElementById("equipoLocal40");
const suiza2 = document.getElementById("equipoVisitante40");
//GRUPO G - FECHA 3
const camerun3 = document.getElementById("equipoLocal41");
const brasil3 = document.getElementById("equipoVisitante41");
const serbia3 = document.getElementById("equipoLocal42");
const suiza3 = document.getElementById("equipoVisitante42");
//PUNTOS SUIZA
const puntosSuiza1 = document.getElementById("teamlocal37");
const puntosSuiza2 = document.getElementById("teamvisita40");
const puntosSuiza3 = document.getElementById("teamvisita42");
//PUNTOS CAMERUN
const puntosCamerun1 = document.getElementById("teamvisita37");
const puntosCamerun2 = document.getElementById("teamlocal39");
const puntosCamerun3 = document.getElementById("teamlocal41");
//PUNTOS BRASIL
const puntosBrasil1 = document.getElementById("teamlocal38");
const puntosBrasil2 = document.getElementById("teamlocal40");
const puntosBrasil3 = document.getElementById("teamvisita41");
//PUNTOS SERBIA
const puntosSerbia1 = document.getElementById("teamvisita38");
const puntosSerbia2 = document.getElementById("teamvisita39");
const puntosSerbia3 = document.getElementById("teamlocal42");
//GRUPO H - FECHA 1
const uruguay1 = document.getElementById("equipoLocal43");
const corea1 = document.getElementById("equipoVisitante43");
const portugal1 = document.getElementById("equipoLocal44");
const ghana1 = document.getElementById("equipoVisitante44");
//GRUPO H - FECHA 2
const corea2 = document.getElementById("equipoLocal45");
const ghana2 = document.getElementById("equipoVisitante45");
const portugal2 = document.getElementById("equipoLocal46");
const uruguay2 = document.getElementById("equipoVisitante46");
//GRUPO H - FECHA 3
const corea3 = document.getElementById("equipoLocal47");
const portugal3 = document.getElementById("equipoVisitante47");
const ghana3 = document.getElementById("equipoLocal48");
const uruguay3 = document.getElementById("equipoVisitante48");
//PUNTOS URUGUAY
const puntosUruguay1 = document.getElementById("teamlocal43");
const puntosUruguay2 = document.getElementById("teamvisita46");
const puntosUruguay3 = document.getElementById("teamvisita48");
//PUNTOS COREA DEL SUR
const puntosCorea1 = document.getElementById("teamvisita43");
const puntosCorea2 = document.getElementById("teamlocal45");
const puntosCorea3 = document.getElementById("teamlocal47");
//PUNTOS PORTGUAL
const puntosPortugal1 = document.getElementById("teamlocal44");
const puntosPortugal2 = document.getElementById("teamlocal46");
const puntosPortugal3 = document.getElementById("teamvisita47");
//PUNTOS GHANA
const puntosGhana1 = document.getElementById("teamvisita44");
const puntosGhana2 = document.getElementById("teamvisita45");
const puntosGhana3 = document.getElementById("teamlocal48");

const obtenerDatos = async () => {
  const datos = await getData()
  nombreCompleto.value = datos[0].nombre
  email.value = datos[0].correo
}

const btnenvio = document.getElementById("enviar");
const btnguardo = document.getElementById("guardar");

const save = () => {

    const DatosFinales = {
        //NOMBRE DEL PARTICIPANTE
        Nombre: nombreCompleto.value,
        Correo: email.value,
        //PUNTOS GRUPO A
        GAPuntosQatar: parseInt(puntosQatar1.value)+parseInt(puntosQatar2.value)+parseInt(puntosQatar3.value),
        GAPuntosEcuador: parseInt(puntosEcuador1.value)+parseInt(puntosEcuador2.value)+parseInt(puntosEcuador3.value),
        GAPuntosSenegal: parseInt(puntosSenegal1.value)+parseInt(puntosSenegal2.value)+parseInt(puntosSenegal3.value),
        GAPuntosPaisesBajos: parseInt(puntosPaisesBajos1.value)+parseInt(puntosPaisesBajos2.value)+parseInt(puntosPaisesBajos3.value),
        //GRUPO A - FECHA 1
        QatarVsEcuador: qatar1.value+"-"+ecuador1.value,
        SenegalVsPaisesBajos: senegal1.value+"-"+pbajos1.value,
        //GRUPO A - FECHA 2
        QatarVsSenegal: qatar2.value+"-"+senegal2.value,
        EcuadorVsPaisesBajos: ecuador2.value+"-"+pbajos2.value,
        //GRUPO A - FECHA 3
        EcuadorVsSenegal: ecuador3.value+"-"+senegal3.value,
        PaisesBajosVsQatar: pbajos3.value+"-"+qatar3.value,
        //PUNTOS GRUPO B
        GBPuntosInglaterra: parseInt(puntosInglaterra1.value)+parseInt(puntosInglaterra2.value)+parseInt(puntosInglaterra3.value),
        GBPuntosIran: parseInt(puntosIran1.value)+parseInt(puntosIran2.value)+parseInt(puntosIran3.value),
        GBPuntosEEUU: parseInt(puntosEeuu1.value)+parseInt(puntosEeuu2.value)+parseInt(puntosEeuu3.value),
        GBPuntosGales: parseInt(puntosGales1.value)+parseInt(puntosGales2.value)+parseInt(puntosGales3.value),
        //GRUPO B - FECHA 1
        InglaterraVsIran: inglaterra1.value+"-"+iran1.value,
        EEUUVsGales: eeuu1.value+"-"+gales1.value,
        //GRUPO B - FECHA 2
        GalesVsIran: gales2.value+"-"+iran2.value,
        EEUUVsInglaterra: eeuu2.value+"-"+inglaterra2.value,
        //PUNTOS GRUPO C
        GCPuntosArgentina: parseInt(puntosArgentina1.value)+parseInt(puntosArgentina2.value)+parseInt(puntosArgentina3.value),
        GCPuntosArabiaSaudita: parseInt(puntosArabia1.value)+parseInt(puntosArabia2.value)+parseInt(puntosArabia3.value),
        GCPuntosMexico: parseInt(puntosMexico1.value)+parseInt(puntosMexico2.value)+parseInt(puntosMexico3.value),
        GCPuntosPolonia: parseInt(puntosPolonia1.value)+parseInt(puntosPolonia2.value)+parseInt(puntosPolonia3.value),
        //GRUPO C - FECHA 3
        GalesVsInglaterra: gales3.value+"-"+inglaterra3.value,
        IranVsEEUU: iran3.value+"-"+eeuu3.value,
        //GRUPO C - FECHA 1
        AgentinaVsArabiaSaudita: argentina1.value+"-"+arabia1.value,
        MexicoVsPolonia: mexico1.value+"-"+polonia1.value,
        //GRUPO C - FECHA 2
        AgentinaVsMexico: argentina2.value+"-"+mexico2.value,
        ArabiaSauditaVsPolonia: arabia2.value+"-"+polonia2.value,
        //GRUPO C - FECHA 3
        AgentinaVsPolonia: argentina3.value+"-"+polonia3.value,
        MexicoVsArabiaSaudita: mexico3.value+"-"+arabia3.value,
        //PUNTOS GRUPO D
        GDPuntosFrancia: parseInt(puntosFrancia1.value)+parseInt(puntosFrancia2.value)+parseInt(puntosFrancia3.value),
        GDPuntosAustralia: parseInt(puntosAustralia1.value)+parseInt(puntosAustralia2.value)+parseInt(puntosAustralia3.value),
        GDPuntosDinamarca: parseInt(puntosDinamarca1.value)+parseInt(puntosDinamarca2.value)+parseInt(puntosDinamarca3.value),
        GDPuntosTunez: parseInt(puntosTunez1.value)+parseInt(puntosTunez2.value)+parseInt(puntosTunez3.value),
        //GRUPO D - FECHA 1
        FranciaVsAustralia: francia1.value+"-"+australia1.value,
        DinamarcaVsTunez: dinamarca1.value+"-"+tunez1.value,
        //GRUPO D - FECHA 2
        TunezVsAustralia: tunez2.value+"-"+australia2.value,
        DinamarcaVsTunez: francia2.value+"-"+dinamarca2.value,
        //GRUPO D - FECHA 3
        AustraliaVsDinamarca: australia3.value+"-"+dinamarca3.value,
        TunezVsFrancia: tunez3.value+"-"+francia3.value,
        //PUNTOS GRUPO E
        GEPuntosAlemania: parseInt(puntosAlemania1.value)+parseInt(puntosAlemania2.value)+parseInt(puntosAlemania3.value),
        GEPuntosJapon: parseInt(puntosJapon1.value)+parseInt(puntosJapon2.value)+parseInt(puntosJapon3.value),
        GEPuntosEspaña: parseInt(puntosEspaña1.value)+parseInt(puntosEspaña2.value)+parseInt(puntosEspaña3.value),
        GEPuntosCostaRica: parseInt(puntosCosta1.value)+parseInt(puntosCosta2.value)+parseInt(puntosCosta3.value),
        //GRUPO E - FECHA 1
        AlemaniaVsJapon: alemania1.value+"-"+japon1.value,
        EspañaVsCostaRica: españa1.value+"-"+costa1.value,
        //GRUPO E - FECHA 2
        JaponVsEspaña: japon2.value+"-"+españa2.value,
        CostaRicaVsAlemania: costa2.value+"-"+alemania2.value,
        //GRUPO E - FECHA 3
        JaponVsCostaRica: japon3.value+"-"+costa3.value,
        EspañaVsAlemania: españa3.value+"-"+alemania3.value,
        //PUNTOS GRUPO F
        GFPuntosMarruecos: parseInt(puntosMarruecos1.value)+parseInt(puntosMarruecos2.value)+parseInt(puntosMarruecos3.value),
        GFPuntosCroacia: parseInt(puntosCroacia1.value)+parseInt(puntosCroacia2.value)+parseInt(puntosCroacia3.value),
        GFPuntosBelgica: parseInt(puntosBelgica1.value)+parseInt(puntosBelgica2.value)+parseInt(puntosBelgica3.value),
        GFPuntosCanada: parseInt(puntosCanada1.value)+parseInt(puntosCanada2.value)+parseInt(puntosCanada3.value),
        //GRUPO F - FECHA 1
        MarruecosVsCroacia: marruecos1.value+"-"+croacia1.value,
        BelgicaVsCanada: belgica1.value+"-"+canada1.value,
        //GRUPO F - FECHA 2
        BelgicaVsMarruecos: belgica2.value+"-"+marruecos2.value,
        CroaciaVsCanada: croacia2.value+"-"+canada2.value,
        //GRUPO F - FECHA 3
        CroaciaVsBelgica: croacia3.value+"-"+belgica3.value,
        CanadaVsMarruecos: canada3.value+"-"+marruecos3.value,
        //PUNTOS GRUPO G
        GGPuntosSuiza: parseInt(puntosSuiza1.value)+parseInt(puntosSuiza2.value)+parseInt(puntosSuiza3.value),
        GGPuntosCamerun: parseInt(puntosCamerun1.value)+parseInt(puntosCamerun2.value)+parseInt(puntosCamerun3.value),
        GGPuntosBrasil: parseInt(puntosBrasil1.value)+parseInt(puntosBrasil2.value)+parseInt(puntosBrasil3.value),
        GGPuntosSerbia: parseInt(puntosSerbia1.value)+parseInt(puntosSerbia2.value)+parseInt(puntosSerbia3.value),
        //GRUPO G - FECHA 1
        SuizaVsCamerun: suiza1.value+"-"+camerun1.value,
        BrasilVsSerbia: brasil1.value+"-"+serbia1.value,
        //GRUPO G - FECHA 2
        CamerunVsSerbia: camerun2.value+"-"+serbia2.value,
        BrasilVsSuiza: brasil2.value+"-"+suiza2.value,
        //GRUPO G - FECHA 3
        CamerunVsBrasil: camerun3.value+"-"+brasil3.value,
        SerbiaVsSuiza: serbia3.value+"-"+suiza3.value,
        //PUNTOS GRUPO H
        GHPuntosPortugal: parseInt(puntosPortugal1.value)+parseInt(puntosPortugal2.value)+parseInt(puntosPortugal3.value),
        GHPuntosGhana: parseInt(puntosGhana1.value)+parseInt(puntosGhana2.value)+parseInt(puntosGhana3.value),
        GHPuntosUruguay: parseInt(puntosUruguay1.value)+parseInt(puntosUruguay2.value)+parseInt(puntosUruguay3.value),
        GHPuntosCoreaDelSur: parseInt(puntosCorea1.value)+parseInt(puntosCorea2.value)+parseInt(puntosCorea3.value),
        //GRUPO H - FECHA 1
        UruguayVsCoreaDelSur: uruguay1.value+"-"+corea1.value,
        PortugalVsGhana: portugal1.value+"-"+ghana1.value,
        //GRUPO H - FECHA 2
        CoreaDelSurVsGhana: corea2.value+"-"+ghana2.value,
        PortugalVsUruguay: portugal2.value+"-"+uruguay2.value,
        //GRUPO H - FECHA 3
        CoreaDelSurVsPortugal: corea3.value+"-"+portugal3.value,
        GhanaVsUruguay: ghana3.value+"-"+uruguay3.value,
};
datosFormulario.push(DatosFinales);
localStorage.setItem("valores_de_input", JSON.stringify(datosFormulario));
setData(datosFormulario)

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: '¡Sus datos han sido guardados!',
  showConfirmButton: false,
  timer: 1500
})
}

btnguardo.addEventListener("click", (e) => {
e.preventDefault();
save()
});


btnenvio.addEventListener('click', (event) => {
  event.preventDefault();

  save()
        
        let params = {
          user_id: 'YZOWeLUZ1_Etps_pW',
          service_id: 'service_r0db0vd',
          template_id: 'template_kl38lkg',
            template_params: {
                to_Nombre: nombreCompleto.value,
                to_email: email.value,
                to_GAPuntosQatar: parseInt(puntosQatar1.value)+parseInt(puntosQatar2.value)+parseInt(puntosQatar3.value),
                to_GAPuntosEcuador: parseInt(puntosEcuador1.value)+parseInt(puntosEcuador2.value)+parseInt(puntosEcuador3.value),
                to_GAPuntosSenegal: parseInt(puntosSenegal1.value)+parseInt(puntosSenegal2.value)+parseInt(puntosSenegal3.value),
                to_GAPuntosPaisesBajos: parseInt(puntosPaisesBajos1.value)+parseInt(puntosPaisesBajos2.value)+parseInt(puntosPaisesBajos3.value),
                to_GBPuntosInglaterra: parseInt(puntosInglaterra1.value)+parseInt(puntosInglaterra2.value)+parseInt(puntosInglaterra3.value),
                to_GBPuntosIran: parseInt(puntosIran1.value)+parseInt(puntosIran2.value)+parseInt(puntosIran3.value),
                to_GBPuntosEEUU: parseInt(puntosEeuu1.value)+parseInt(puntosEeuu2.value)+parseInt(puntosEeuu3.value),
                to_GBPuntosGales: parseInt(puntosGales1.value)+parseInt(puntosGales2.value)+parseInt(puntosGales3.value),
                to_GCPuntosArgentina: parseInt(puntosArgentina1.value)+parseInt(puntosArgentina2.value)+parseInt(puntosArgentina3.value),
                to_GCPuntosArabiaSaudita: parseInt(puntosArabia1.value)+parseInt(puntosArabia2.value)+parseInt(puntosArabia3.value),
                to_GCPuntosMexico: parseInt(puntosMexico1.value)+parseInt(puntosMexico2.value)+parseInt(puntosMexico3.value),
                to_GCPuntosPolonia: parseInt(puntosPolonia1.value)+parseInt(puntosPolonia2.value)+parseInt(puntosPolonia3.value),
                to_GDPuntosFrancia: parseInt(puntosFrancia1.value)+parseInt(puntosFrancia2.value)+parseInt(puntosFrancia3.value),
                to_GDPuntosAustralia: parseInt(puntosAustralia1.value)+parseInt(puntosAustralia2.value)+parseInt(puntosAustralia3.value),
                to_GDPuntosDinamarca: parseInt(puntosDinamarca1.value)+parseInt(puntosDinamarca2.value)+parseInt(puntosDinamarca3.value),
                to_GDPuntosTunez: parseInt(puntosTunez1.value)+parseInt(puntosTunez2.value)+parseInt(puntosTunez3.value),
                to_GEPuntosAlemania: parseInt(puntosAlemania1.value)+parseInt(puntosAlemania2.value)+parseInt(puntosAlemania3.value),
                to_GEPuntosJapon: parseInt(puntosJapon1.value)+parseInt(puntosJapon2.value)+parseInt(puntosJapon3.value),
                to_GEPuntosEspaña: parseInt(puntosEspaña1.value)+parseInt(puntosEspaña2.value)+parseInt(puntosEspaña3.value),
                to_GEPuntosCostaRica: parseInt(puntosCosta1.value)+parseInt(puntosCosta2.value)+parseInt(puntosCosta3.value),
                to_GFPuntosMarruecos: parseInt(puntosMarruecos1.value)+parseInt(puntosMarruecos2.value)+parseInt(puntosMarruecos3.value),
                to_GFPuntosCroacia: parseInt(puntosCroacia1.value)+parseInt(puntosCroacia2.value)+parseInt(puntosCroacia3.value),
                to_GFPuntosBelgica: parseInt(puntosBelgica1.value)+parseInt(puntosBelgica2.value)+parseInt(puntosBelgica3.value),
                to_GFPuntosCanada: parseInt(puntosCanada1.value)+parseInt(puntosCanada2.value)+parseInt(puntosCanada3.value),
                to_GGPuntosSuiza: parseInt(puntosSuiza1.value)+parseInt(puntosSuiza2.value)+parseInt(puntosSuiza3.value),
                to_GGPuntosCamerun: parseInt(puntosCamerun1.value)+parseInt(puntosCamerun2.value)+parseInt(puntosCamerun3.value),
                to_GGPuntosBrasil: parseInt(puntosBrasil1.value)+parseInt(puntosBrasil2.value)+parseInt(puntosBrasil3.value),
                to_GGPuntosSerbia: parseInt(puntosSerbia1.value)+parseInt(puntosSerbia2.value)+parseInt(puntosSerbia3.value),
                to_GHPuntosPortugal: parseInt(puntosPortugal1.value)+parseInt(puntosPortugal2.value)+parseInt(puntosPortugal3.value),
                to_GHPuntosGhana: parseInt(puntosGhana1.value)+parseInt(puntosGhana2.value)+parseInt(puntosGhana3.value),
                to_GHPuntosUruguay: parseInt(puntosUruguay1.value)+parseInt(puntosUruguay2.value)+parseInt(puntosUruguay3.value),
                to_GHPuntosCoreaDelSur: parseInt(puntosCorea1.value)+parseInt(puntosCorea2.value)+parseInt(puntosCorea3.value),
/*              from_name: "Formulario",
                to_name: nombreCompleto.value,
                message: curso.value,
                p_curso: precioCurso,
                n_cuotas: cuotas.value,
                p_cuota: precioCuotas,
                reply_to: "formulario",
                f_nacimiento: fechaNacimiento.value,
                to_telefono: telefono.value,
                to_pais: paises.value,
                to_curso: curso.value, */}};

        let headers = {
            'Content-type': 'application/json'};
      
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)};
  fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '¡Sus datos han sido enviados!',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        return httpResponse.text()
          .then(text => Promise.reject(text));
      }
    })
    .catch((error) => {
      console.log('Oops... ' + error);
    });
});
obtenerDatos()

btnguardo.addEventListener('click', () => {
  swal({
    title: "Ya estas participando!",
    text: "Tus resultados han sido guardados!",
    icon: "success",
  });
  })
