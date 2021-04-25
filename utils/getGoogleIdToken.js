import firebase from "firebase";

const getGoogleIdToken = async (idToken) => {
  const credential = await firebase.auth.GoogleAuthProvider.credential(idToken);
  const auth = await firebase.auth().signInWithCredential(credential);
  const googleIdToken = await auth.user.getIdToken();
  return googleIdToken;
};

export default getGoogleIdToken;
