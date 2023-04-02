import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAUDOeibSNauywyEr9IjcNJ8NDALioQhMw",
  authDomain: "produhacks-2023-bff0d.firebaseapp.com",
  projectId: "produhacks-2023-bff0d",
  storageBucket: "produhacks-2023-bff0d.appspot.com",
  databaseURL: "https://produhacks-2023-bff0d.firebaseio.com",
  messagingSenderId: "427858059092",
  appId: "1:427858059092:web:5db315ca674dd8365bb2c1",
  measurementId: "G-4P0ZYDG4CW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of upcoming tasks from your database
export async function getUpcomingTasks(userId) {
  const tasksCol = collection(db, "tasks");
  const tasksSnapshot = await getDocs(tasksCol);
  const upcomingTasksList = tasksSnapshot.docs
    .filter((doc) => doc.data().userId == userId && !doc.data().isFinished)
    .map((doc) => doc.data());
  return upcomingTasksList;
}

// Get a list of completed tasks from your database
export async function getCompletedTasks(userId) {
  const tasksCol = collection(db, "tasks");
  const tasksSnapshot = await getDocs(tasksCol);
  const completedTasksList = tasksSnapshot.docs
    .filter((doc) => doc.data().userId == userId && doc.data().isFinished)
    .map((doc) => doc.data());
  return completedTasksList;
}

// Get user information from your database
export async function getUserInfo(userId) {
  const usersCol = collection(db, "userRoles");
  const usersSnapshot = await getDocs(usersCol);
  const userInfo = usersSnapshot.docs.filter((doc) => doc.data().userId == userId).map((doc) => doc.data());
  return userInfo[0];
}