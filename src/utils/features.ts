// import { MessageResponse } from '../types/apitypes';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {SerializedError} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
type ResType={
    data:MessageResponse
}|{
error:FetchBaseQueryError | SerializedError;
}


export const responseToast=(res:ResType,navigate:NavigateFunction | null,
    url:string
)=>{

if("data" in res){
  toast.success(res.data.message);
  if(navigate) navigate(url);
}
else{
    const error=res.error as FetchBaseQueryError;
    const messageResponse= error.data as MessageResponse
    toast.error(messageResponse.message);
}

}