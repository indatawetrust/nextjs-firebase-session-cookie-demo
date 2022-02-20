import firebase from 'firebase-admin';
import firebaseAdminConfig from 'config/firebaseAdmin'

const admin = !firebase.apps.length ? firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAdminConfig),
}) : firebase.app()

export default admin
