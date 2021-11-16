import React from 'react';
import { toast } from 'react-toastify';
  
const NotificationToast = ({ content, type, position, autoClose }) => {
  toast(<>{ content }</>, {
    toastId: +new Date(),
    type: type? type : false,
    position: position ? position : toast.POSITION.TOP_RIGHT,
    autoClose: autoClose ? autoClose : false,
  });
}

export default NotificationToast;
