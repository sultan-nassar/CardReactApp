import axios from "axios";
import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useEffect } from "react";

export default function useAxios() {
  const snack = useSnack();

  const { token } = useUser(); //1

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token; //2
    const requestInterceptor = axios.interceptors.request.use((data) => {
      console.log("this log came from interceptor request");
      return Promise.resolve(data);
    }, null);
    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        console.log(error.message);
        snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor); //4
      axios.interceptors.response.eject(responseInterceptor); //4 בזמן עדכון טוקן אלה מוחקים את הטוקן
    };
  }, [snack, token]); //3 כאשר יוצאים או מתחברים זה מתעדכן
}
//תהליך שעובר הקובץ
//האתר עולה
//נכנסנו לעמוד כרטיסים
//useAxios is called
//האפקט רץ, נוצרים 2 אינטרספטורס ומתווסף טוקן  (ריק) להאדר
//נניח שהמשתמש ביצע פעולת התחברות
//הטוקן התעדכן
//איך נגיב?
// 1. נהיה חייבים לעדכן את הטוקן בהאדר
//איך טיפלנו ב1 - הוספנו את הטוקן בדפנדסיס של האפקט
//מה אמור לקרות אם האפקט רץ שוב?
// יווצרו עוד 2 אינטרספטורס
//אז כדי למנוע את זה, כאשר האפקט הקודם נגמר נמחק את האינטרספטורס הישנים
