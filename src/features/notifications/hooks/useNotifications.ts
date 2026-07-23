import {
 useEffect,
 useState
} from "react";

import {
 notificationService
} from "../services/notificationService";

import type {
 Notification
} from "../types/notification.types";


export const useNotifications =()=>{

 const [
 notifications,
 setNotifications
 ] = useState<Notification[]>([]);


 const [
 loading,
 setLoading
 ] = useState(true);


 useEffect(()=>{

  const load = async()=>{

   const data =
    await notificationService
    .getNotifications();

   setNotifications(data);

   setLoading(false);

  };

  load();

 },[]);


 return {
   notifications,
   loading
 };

};