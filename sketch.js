let mode;
let idk;
let tilbage;
let kilder;
let energi;
var Elpic;
var fuspic;
var Form

function setup() {
  createCanvas(1000, 750);
  mode = 1;
  console.info(document.body);
  Elpic = loadImage('Elpic.png')
  fuspic = loadImage('Picture2.png')
  form = loadImage ('Form.PNG')
  
  
  elektrolyse = createButton ('Elektrolyse');
  elektrolyse.mousePressed(elektrolyse2);
  elektrolyse.position(0,350)
  
  fusion = createButton ('Fusion')
  fusion.mousePressed(fusion2)
  fusion.position(81,350)

  kilder = createButton ('Kilder')
  kilder.mousePressed(kilder2)
  kilder.position(192,350)
  
  energi = createButton ('Energi')
  energi.mousePressed(energi2)
  energi.position(137,350)

}
function elektrolyse2(){
  mode = 2;
  elektrolyse.position(0,0)
  fusion.position(81,0)
  kilder.position(192,0)
  energi.position(137,0)
}
function fusion2(){
  mode = 3;
  elektrolyse.position(0,0)
  fusion.position(81,0)
  kilder.position(192,0)
  energi.position(137,0)
}
function kilder2(){
  mode = 4;
   elektrolyse.position(0,0)
  fusion.position(81,0)
  kilder.position(192,0)
  energi.position(137,0)
}
function energi2() {
  mode = 5;
  elektrolyse.position(0,0)
  fusion.position(81,0)
  kilder.position(192,0)
  energi.position(137,0)
  
}

function draw() {
  background(170);
  
  if (mode == 1) {
    screen1();
  } else if (mode === 2) {
    screen2();
  } else if (mode === 3) {
    screen3();
  } else if (mode === 4) {
    screen4();
  } else if (mode === 5) {
    screen5();
  }
}

//Useful to have multiple elements on one screen
function screen1() {
  textSize(32);
  fill(0, 102, 153);
text ('Introduktion', 10, 30, 1000,500);
  
  textSize(16);
  fill(0,55,55);
  text ('Dette er en hjemmeside som er dedikeret til en skole opgave, her kan du læse om elektrolyse samt fusion og hvilke funktioner de hver især har.',10, 90, 550,500);
  
  textSize(16)
  fill(0,55,55);
  text ('For at lære mere om fusion og elektrolyse kan du trykke på knapperne herunder og læse mere. Hvis du er interesseret i at vide hvor jeg fik informationen fra, så er der også en kildeliste',10, 150, 500,500);
}

function screen2() {
 textSize(32);
  fill(0, 102, 153);
text ('Elektrolyse', 10, 30, 1000,950);
  
  textSize(16);
  fill(0,55,55);
  text ('Elektrolyse er en non-spontan reaktion som man kan bruge til at splite vand og skabe hydrogen samt oxygen fra det. Elektrolyse virker ved at man har en elektrisk ladning der ledes igennem en opløsning der indeholder ioner, så som vand. Som man kan se på billedet herunder så har man en elektrisk celle hvor man har placeret 2 elektroder, en Anode som er positiv samt en katode som er negativ. Strøm påføres og Anoden bliver så positivt ladt mens katoden bliver negativt ladt.Når der sendes strøm igennem vand så vil det adskille sig i H+ ioner og OH- ioner. De positive ladte H+ ioner vil herefter blive tiltrukket til katoden da de er modsat ladt og derfor tiltrukket til hinanden.De negative OH- ioner vil også blive tiltrukket til anoden', 10, 90,950,1000);
  
  image(Elpic,10,300)
  
}

function screen3() {
textSize(32);
  fill(0, 102, 153);
text ('Fusion', 10, 30, 1000,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Fusion er den samme proces der driver hydrogen bomber samt stjerner.I en fusions reaktion så tager man 2 lete elementer så som, en hydrogen-2 og hydrogen-3, deuterium og tritium. Eller hydrogen-2 og helium-3, deuterium og helion. Med forskellige elementer og isotoper, kommer forskellige faktorer så som reaktions temperatur.', 10, 90, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Hvis man bruger tritium så kræver det 150 millioner grader celius før at den kan skabe et helium-4 atom samt skyde en neutron ud. Men, hvis man bruger helium-3 så kræver det en temperatur på 200 millioner og den skyder så en helium-4 atom sammen med en proton ud.', 10, 150, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Når du har valgt dit brændstof så skal du varme det op til dens reaktions temperatur, dette gør at elementerne kan overvinde den elektromagnetiske frastødning og deres kerne kombinere til at blive et tungere stof. Hvis man kikker på, især de tungere elementer, på et periodisk system så kan man se at deres vægt er lidt mindre end hvis man tog deres mængde af protoner og neutroner og satte dem sammen. Det betyder at hvis man laver et tungere element ud af nogle der er lettere, så skal noget af dens vægt blive til energi. Det er så den her energi vi kan bruge til at varme vand til damp, og med brug af nogle turbiner kan vi lave det om til strøm.', 10, 250, 950,1000);
  
  image(fuspic,10,400)
}

function screen4() {
textSize(32);
  fill(0, 102, 153);
text ('Kilder', 10, 30, 1000,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Kilde 1# https://www.experimentarium.dk/klima/forsoeg-med-elektrolyse/', 10, 90, 1000,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Kilde 2# https://science.howstuffworks.com/fusion-reactor2.htm', 10, 120, 1000,1000);
  
    textSize(16);
  fill(0,55,55);
  text ('Kilde 3# https://www.fusion.qst.go.jp/english/kougaku-e/TPL/page2.html', 10, 150, 1000,1000);
}
function screen5(){
  textSize(32);
  fill(0, 102, 153);
text ('Hvor meget energi får man med fusion', 10, 30, 1000,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Lad os prøve at regne ud hvor meget energi vi kan få ud af at bruge helium-3 som et brændstof i en fusions reaktor. Ifølge kilde 2# så kan vi bruge Einsteins meget kendte formel, E = mc^2', 10, 90, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('til at finde mængden af energi vi får. E står igen for energi, m står for masse og c står for lysets hastighed. Da vi allerede kender lysets hastighed, så skal vi bare finde massen. herunder kan man se den reaktion som bliver lavet når man bruger Helium-3 og deuterium til at skabe energi i en fusion reaktor.', 10, 130, 950,1000);
  textSize(16);
  fill(0,55,55);
  text ('He3 + D -> He4 + proton + energi', 10, 200, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Når helium-3 og deuterium rammer hinanden så bliver de lavet om til et tungere stof som så er helium-4, samt så bliver der også skudt en proton ud af den. Til sidst kommer der også noget energi ud af reaktionen. Selvom der er den samme mængde af neutroner og protoner på begge sider af reaktionen så mister helium-4 noget af dens masse som så bliver lavet om til energi. Det kan man se ved at massen af helium-4 plus protonen er ikke det samme som massen af helium-3 plus deuterium. Vi kan derfor finde mængden af masse som bliver lavet om energi ved at tage massen af vores reaktanter, altså helium-3 og deuterium, og minus dem med massen af vores produkt, helium-4 og en proton.', 10, 230, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Så massen af vores reaktanter er 2,014102+3,016029=5.030131 u.', 10, 350, 950,1000)
  
  textSize(16);
  fill(0,55,55);
  text ('Massen af vores produkt er 4,002603+1,007276=5.009879 u', 10, 370, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Vi kan til sidst finde ændringen af massen ved at minus vores tal med hinanden 5.030131-5.009879=0.020252 u', 10, 400, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Vi kan så smide det ind i Einsteins formel og det kommer til at se sådan her ud', 10, 430, 950,1000);
  
  image(form,10,460)
  
  textSize(16);
  fill(0,55,55);
  text ('Dette er det samme som 0,0000000000030225261 joules af energi.', 10, 560, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('Lad os sammenligne det med råolie, hvis vi regner lidt ud så kan vi finde ud af at vi skal lave omrking 2,05*10^21 reaktioner for at lave lige så meget energi som en tønde råolie. vi kan så få det til at vi skal bruge 10,3 milligram helium-3 og 6,9 milligram af deuterium.', 10, 590, 950,1000);
  
  textSize(16);
  fill(0,55,55);
  text ('', 10, 130, 950,1000);
}
/*textSize(16);
  fill(0,55,55);
  text ('', 10, 130, 950,1000);*/

/*function setMode(n) {
  mode = n;
  document.body.className = "screen-" + mode;
}*/

//Method 1: More flexible, any order
/*function mousePressed() {
  if (mode == 1) {
    setMode(2);
  } else if (mode === 2) {
    setMode(3);
  } else if (mode === 3) {
    setMode(1);
  }
}*/