self.addEventListener('push', function(event) {
    const options = {
        body: 'This is a push notification!',
        icon: '/icon.png',
        badge: '/badge.png'
    };
    event.waitUntil(
        self.registration.showNotification('Notification Title', options)
    );
});
