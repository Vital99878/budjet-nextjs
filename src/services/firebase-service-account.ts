import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

class FirebaseServiceAccount {
  async login() {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      console.log("response: ", response);
      alert("Успешный вход через Google");
    } catch (error) {
      console.error("Ошибка входа через Google: ", error);
    }
  }
}

const fbAuthService = new FirebaseServiceAccount();

export default fbAuthService;
