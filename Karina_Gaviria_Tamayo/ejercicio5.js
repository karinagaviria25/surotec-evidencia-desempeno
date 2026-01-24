export function evaluarAsistencia(llegada){
    let multasTotales = 0;
    let retardosGraves = 0;
    const limite_minutos = 8 * 60;

    for (let horaEntrada of llegadas) {
        let partes = horaEntrada.split(":");
        let minutosLlegada = parseInt(partes[0]) * 60 + parseInt(partes[1]);
        
        if (minutosLlegada > limite_minutos) {
            let diferencia = minutosLlegada - limite_minutos;
            multasTotales += diferencia * 2;

            if (diferencia > 15) {
                retardosGraves++;
            }
        }
    }

    if (retardosGraves > 2) {
        return "Suspendido";
    }

    return multasTotales;
}