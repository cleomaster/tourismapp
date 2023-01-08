import { db } from "./../constants/config";
import { doc, addDoc, getDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";

export const bookNow = async (place, phone, participants) => {
    try {
        await addDoc(collection(db, "bookings"), {
          place,
          phone,
          participants
        });
        console.log("booked")
      } catch (e) {
        console.log(e);
      }
}