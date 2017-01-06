function main(tiempo) {
    
    var puntos = tiempo.split(':');
    var horas = Number(puntos[0]);
    var minutos = puntos[1];
    var segundos = puntos[2].substr(0,2);
    var AMPM = puntos[2].substr(2);

    if (horas === 12) {
    	horas = 0;
    }
    if (AMPM.toLowerCase() === 'pm') {
    	horas += 12;
    }
    if (horas < 10) {
    	horas = '0' + horas;
    }
    console.log([horas,minutos,segundos].join(':'));
}