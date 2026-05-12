// Importa os scripts do Firebase versão Compat (necessário para Service Workers)
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Configuração do seu GL Pro Governance
const firebaseConfig = {
  apiKey: "AIzaSyCxnT-eCXN82lEPK5Holo5c6E5etPYkOZA",
  authDomain: "gl-pro-governance.firebaseapp.com",
  projectId: "gl-pro-governance",
  storageBucket: "gl-pro-governance.firebasestorage.app",
  messagingSenderId: "486444042386",
  appId: "1:486444042386:web:d4eacf8a9962d786747e4b"
};

// Inicializa o app no background
firebase.initializeApp(firebaseConfig);

// Inicializa a escuta de mensagens em segundo plano
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em segundo plano ', payload);
  
  const notificationTitle = payload.notification.title || 'GL Pro Governance';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico' // Você pode colocar o link de uma logo da GL aqui futuramente
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
