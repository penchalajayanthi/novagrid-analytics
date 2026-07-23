import type {
  Notification,
} from "../types/notification.types";


export const notifications: Notification[] = [

{
 id:"1",
 title:"Project Completed",
 message:"NovaGrid mobile application has been completed.",
 type:"Project",
 priority:"High",
 isRead:false,
 createdAt:"2026-07-22T10:30:00",
 user:{
   name:"Alex",
   avatar:"https://i.pravatar.cc/100?img=1"
 }
},

{
 id:"2",
 title:"Meeting Reminder",
 message:"Team meeting scheduled at 3:00 PM.",
 type:"Meeting",
 priority:"Medium",
 isRead:false,
 createdAt:"2026-07-22T09:00:00"
},

{
 id:"3",
 title:"New Task Assigned",
 message:"You have been assigned a new task.",
 type:"Task",
 priority:"Low",
 isRead:true,
 createdAt:"2026-07-21T14:00:00"
},

{
 id:"4",
 title:"Security Alert",
 message:"Password changed successfully.",
 type:"System",
 priority:"High",
 isRead:false,
 createdAt:"2026-07-20T12:00:00"
}

];