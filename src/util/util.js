import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";

export const getData = async () => {
    return async () => {
        return onValue(ref(database, "/merchants"), (snapshot) => {
            let newVar = snapshot.val();
            return newVar;
        });
    };
};
