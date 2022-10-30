import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAAeAztf-l7U_ascoymkp_rd_1DDyg2Xps",
	authDomain: "react-chat-app-466ed.firebaseapp.com",
	projectId: "react-chat-app-466ed",
	storageBucket: "react-chat-app-466ed.appspot.com",
	messagingSenderId: "748065016067",
	appId: "1:748065016067:web:960a8e984596af61620136",
	measurementId: "G-HR8NMH9P8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
