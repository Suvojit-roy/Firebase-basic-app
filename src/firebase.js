import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import config from './config'

firebase.initializeApp(config)

const auth=firebase.auth();
const db =firebase.firestore()

// const auth = app.auth()
// const db=firebase.firestore()
export {db,auth}

// export default app
