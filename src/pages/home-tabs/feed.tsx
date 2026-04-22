import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Feed: React.FC = () => {

  const games = [
    {name: 'Pokemon Greeen'},
    {name: 'Pokemon Yellow'},
    {name: 'Pokemon Blue'}
  ]


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            <IonTitle>Feed</IonTitle>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true}>

          {games.map((item, index) => (
            <IonItem>
               <IonCard>
                  <img alt="Silhouette of mountains" src="https://images5.alphacoders.com/946/thumb-1920-946091.png" />
                    <IonCardHeader>
                       <IonCardTitle>{item.name}</IonCardTitle>
                           <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                       <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
               </IonCard>
            </IonItem>


          ))}


        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;