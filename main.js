if('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
  navigator.serviceWorker.register('/sw.js')
                            .then(res => console.log('service worker cargo correctamente',res))
                            .catch(err => console.log('service worker no se ha cargado', err));   
}else{

console.log('Service Worker no es soportado en este navegador');

}