import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

function Login() {
  const router = useIonRouter();

  const doLogin = function () {
    router.push('/app', 'forward', 'replace');
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonButton expand="full" onClick={doLogin}>
          Login
        </IonButton>

      </IonContent>
    </IonPage>
  );

}

export default Login;
