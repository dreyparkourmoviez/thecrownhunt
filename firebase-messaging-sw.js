importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCFHmx3VNvJ1GG5UKMudN_D9T8jRezwhUw",
  authDomain: "crown-hunt-6646a.firebaseapp.com",
  projectId: "crown-hunt-6646a",
  storageBucket: "crown-hunt-6646a.firebasestorage.app",
  messagingSenderId: "888723729352",
  appId: "1:888723729352:web:664bc8ace9ad908c00aefd"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200]
  });
});
