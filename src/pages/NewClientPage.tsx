import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const NewClientPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NewClientPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default NewClientPage;
