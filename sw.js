const CACHE_NAME = 'cache_calculadora_pwa-', CACHE_VERSION = "2",
toCache = [
    './',
    './style.css',
    './bootstrap.min.css',
    './script.js',
    './calculadora.js',
]

//Fase de instalacion de SW, almacena en cache los activos estaticos
self.addEventListener('install',e=>{
    e.waitUntil(
        caches.open(CACHE_NAME + CACHE_VERSION).then(cache =>{
            return cache.addAll(toCache).then(() => self.skipWaiting())
        })
        .catch(error => console.log("Fallo el registro de cache",error))
    )
});

//Activa el SW y busca los recursos para funcionar sin conexion
self.addEventListener('activate',e=>{
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(cacheNombres =>{
            cacheNombres.map(cacheNombre =>{
                if(cacheWhitelist.indexOf(cacheNombre)===-1 && cacheNombre.indexOf(CACHE_NAME + CACHE_VERSION) === -1 ){
                    console.log("nueva versión encontrada")
                    return caches.delete(cacheNombre)
                }
            })
        })
        .then(() => self.clients.claim())
    )
});

//Recupera una URL 
self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request).then(res =>{
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    )
});