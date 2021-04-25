import firebase from "firebase";

const getIdTokenByGoogle = async (idToken) => {
  const credential = await firebase.auth.GoogleAuthProvider.credential(idToken);
  const auth = await firebase.auth().signInWithCredential(credential);
  const idTokenByGoogle = await auth.user.getIdToken();
  return idTokenByGoogle;
};

export default getIdTokenByGoogle;
