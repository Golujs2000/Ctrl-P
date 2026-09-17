// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Web app's Firebase configuration provided by client
const firebaseConfig = {
  apiKey: "AIzaSyCM_DAgSAH6SQfwl4ij8Dd3AXjHV7iJcds",
  authDomain: "ctrl-p-d5a8e.firebaseapp.com",
  projectId: "ctrl-p-d5a8e",
  storageBucket: "ctrl-p-d5a8e.firebasestorage.app",
  messagingSenderId: "1025953116575",
  appId: "1:1025953116575:web:ad42040da6a65ea1114daa",
  measurementId: "G-GCJ3Z1N6Y7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics safely
export let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {
    // Analytics unsupported in current environment
  });
}
