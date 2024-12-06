import { getAuth, onAuthStateChanged } from "firebase/auth";

export const getCurrentUser = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Example: Adding role manually for demonstration purposes.
        const userData = {
          uid: user.uid,
          email: user.email,
          role: user.email === "arslaanmazhar50@gmail.com" ? "admin" : "member", // Replace logic with a role field from your database if available
        };
        resolve(userData);
      } else {
        resolve(null);
      }
    });
  });
};
