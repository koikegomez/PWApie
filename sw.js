//Asignar nombre y versión de la cache
const CACHE_NAME = 'v1_cache_pwa';

//Ficheros a cachear en la aplicación
var urlsToCache = [
    './',
    './img/android-chrome-192x192.png',
    './img/android-chrme-384x384.png',
    './img/apple-touch-icon.png',
    './img/mstile-150x150.png',
    './img/OIG.jpg',
    './img/favicon16x16.png',
    './img/favicon-32x32.png',
    './img/safari-pinned-tab.svg'
];



    self.addEventListener('install', e => {
        e.waitUntil(
            caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .then(() => {
                        self.skipWaiting();
                    });
            })
            .catch(err => console.log('No se ha registrado el cache', err))
        );
    });

    self.addEventListener('activate', e => {

        e.waitUntil(
            caches.keys()
            .then(cacheNames=>{return Promise.all(cacheNames.map(cacheName=>{
                if(cacheWhiteList.indexOf(cacheName)===-1){
                    return caches.delete(cacheName);
                }
            })
        );
    })
        .then(()=>{
            self.clients.claim(); //activa la cache en el dispositivo.

        })
        );
    })


    self.addEventListener('fetch', e => {
        e.respondWith(
            caches.match(e.request)
            .then(res => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            })
        );
    });