import {
 notifications
} from "../data/notifications";


export const notificationService = {

 getNotifications(){
   return Promise.resolve(
     notifications
   );
 }

};