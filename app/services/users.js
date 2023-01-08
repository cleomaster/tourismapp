import { db } from "./../constants/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Alert } from "react-native";

export const registerUser = async (email, password) => {
  try {
    await setDoc(doc(db, "users", email), {
      email,
      password,
    });
    console.log("Registered");
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (email, password, navigation, data) => {
  try {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      if (docSnap.data().password !== password)
        return Alert.alert("Wrong email or password");
      navigation.navigate("CurrentLocationScreen", data);
    } else {
      Alert.alert("Wrong email or password");
    }
  } catch (e) {
    console.log("not logged");
  }
};
