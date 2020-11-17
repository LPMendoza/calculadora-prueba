if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(reg=>console.log("Registro de SW exitoso",reg))
    .catch(error=>console.warn("Error al tratar de registrar SW",error))
}