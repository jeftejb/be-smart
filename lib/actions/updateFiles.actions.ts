"use server";

import { UTApi } from "uploadthing/server";
 
export const utapi = new UTApi();

 
export const  uploadFilesSend = async (files:any)=> {
 
 
  const response = await utapi.uploadFiles(files);
  console.log(response)
}
 