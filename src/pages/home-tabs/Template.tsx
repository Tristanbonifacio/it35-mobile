import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  }from'@ionic/react';

const Template: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Template</IonTitle>
            <IonButton>Button</IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="Ion-Padding">
            <h1>Template</h1>
            </IonContent>
    </IonPage>
    
  );
};
export default Template;
