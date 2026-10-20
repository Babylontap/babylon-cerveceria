// Necesario para que el celular ofrezca "Instalar app". No guarda datos: el sistema siempre se carga en vivo.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
