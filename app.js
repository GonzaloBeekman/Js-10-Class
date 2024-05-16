class CJugadores{
    constructor(nombre,pos,edad,est,p,nac){
        this.nombre = nombre;
        this.pos = pos;
        this.edad = edad;
        this.est = est;
        this.p = p;
        this.nac = nac;
    }
}

const jugador = [
    new CJugadores("Fábio1","G",43,1.88,86,"Brasil"),
    new CJugadores("Marlon4","D",28,1.83,78,"Brasil"),
    new CJugadores("Marcelo12","D",35,1.73,72,"Brasil"),
    new CJugadores("Nino33","D",26,1.88,82,"Brasil"),
    new CJugadores("John Kennedy9","A",21,1.73,71,"Brasil"),
    new CJugadores("Keno11","A",34,1.78,72,"Brasil"),
    new CJugadores("Germán Cano14","A",35,1.78,81,"Argentina"),
];

function listarJugadores(){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 6> Todos los Jugadores </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Posicion </th>");
    document.write("<th> Edad </th>");
    document.write("<th> Estatura </th>");
    document.write("<th> Peso </th> ");
    document.write("<th> Nacionalidad </th> </tr>");
    for(let i = 0 ; i < jugador.length ; i++){
        document.write("<tr>");
        document.write("<td>" + jugador[i].nombre + "</td>");
        document.write("<td>" + jugador[i].pos + "</td>");
        document.write("<td>" + jugador[i].edad + "</td>");
        document.write("<td>" + jugador[i].est + "</td>");
        document.write("<td>" + jugador[i].p + "kg</td>");
        document.write("<td>" + jugador[i].nac + "</td>");
        document.write("</tr>")
    }
    document.write("</table>");
}
function listarJugadoresArgentinos(){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 2> Jugadores Argentinos </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Posicion </th> </tr>");
    for(let i = 0 ; i < jugador.length ; i++){
        if(jugador[i].nac == "Argentina"){
            document.write("<tr>");
            document.write("<td>" + jugador[i].nombre + "</td>");
            document.write("<td>" + jugador[i].pos + "</td>");
            document.write("</tr>");
        }
    }
    document.write("</table>")
}
function listarJugadoresPorPeso(){ 
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 2> Jugadores que pesan entre 75 y 80 kg </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Peso </th> </tr>");
    for(let i = 0 ; i < jugador.length ; i++){
        if(jugador[i].p >= 75 && jugador[i].p <= 80){
            document.write("<tr>");
            document.write("<td>" + jugador[i].nombre + "</td>");
            document.write("<td>" + jugador[i].p + "kg </td>");
            document.write("</tr>");
        }
    }
    document.write("</table>")
}
function jugadorMasAlto(){
    let jugadorMasAlto = jugador[0];
    for (let i = 1; i < jugador.length; i++) {
        if (jugador[i].est > jugadorMasAlto.est) {
            jugadorMasAlto = jugador[i];
        }
    }
    document.write("El jugador más alto es:", jugadorMasAlto.nombre);
}
listarJugadores();
listarJugadoresArgentinos();
listarJugadoresPorPeso();
jugadorMasAlto();