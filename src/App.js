import './App.css';
import {firebaseApp}  from "./firebase";
import { getMessaging,getToken,onMessage } from "firebase/messaging";

const firebaseMessaging = getMessaging(firebaseApp);
getToken(firebaseMessaging, {vapidKey: "type user validKey"}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  
});

onMessage(firebaseMessaging, (payload) => {
  console.log('Message received. ', payload);
})


// firebaseMessaging
//   .requestPermission()
//   .then(() => {
//     return getToken(); // 등록 토큰 받기
//   })
//   .then(function (token) {
//     console.log(token); //토큰 출력
//   })
//   .catch(function (error) {
//     console.log("FCM Error : ", error);
//   });

//   firebaseMessaging.onMessage((payload) => {
//     console.log(payload.notification.title);
//     console.log(payload.notification.body);
//   });

  function App() {
    return (
      <div className="App">
        <h1>FCM TEST</h1>
      </div>
    );
  }

export default App;
