import { cert, initializeApp, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "~root/firebase.json";

initializeApp({
	credential: cert(serviceAccount as ServiceAccount),
	databaseURL: "https://chat-app-746eb-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = getFirestore();

export const addUser = async (user) => db.collection("chat-app").doc("users").set(user);
