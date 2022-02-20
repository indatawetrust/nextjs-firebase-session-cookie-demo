import firebase from 'firebase-admin';
import firebaseAdminConfig from 'config/firebaseAdmin'

const admin = !firebase.apps.length ? firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAdminConfig),
  databaseURL: process.env.FIREBASE_DATABASE_URL
}) : firebase.app()

export default admin
