import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = "YOUR_FIREBASE_CONFIG_HERE";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(userAuth === null) {
    console.log("userAuth == null");
    return;
  };

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();
  if(!userSnapShot.exists) {
    try {
      await userRef.set({
        email: userAuth.email,
        displayName: userAuth.displayName,
        createdAt: new Date().toJSON(),
        ...additionalData,
      })
    } catch(error) {
      console.log(error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch()
  objectsToAdd.forEach((objectToAdd) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectToAdd);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const converted = collectionsSnapshot.docs.map((doc) => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  });

  return converted.reduce((acc, collectionObj) => {
    acc[collectionObj.title.toLowerCase()] = collectionObj;
    return acc;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export const getUserCartRef = async (userId) => {
  const cartsRef = firestore.collection('/carts').where('userId','==', userId);
  const querySnapshot = await cartsRef.get();
  if(querySnapshot.empty) {
    const userCartRef = firestore.collection('/carts').doc();
    await userCartRef.set({userId, cartItems: []});
    return userCartRef;
  }
  return querySnapshot.docs[0].ref;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;