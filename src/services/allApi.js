import axiosConfig from "./axiosConfig";
import { BaseUrl } from "./baseURL";


export const addEvents=async (reqBody)=>{
    return await axiosConfig("post",`${BaseUrl}/eventsData`,reqBody)
}

export const getEvents=async()=>{
    return await axiosConfig("get",`${BaseUrl}/eventsData`,"")
}

export const deleteEvents=async(id)=>{
    return await axiosConfig("delete",`${BaseUrl}/eventsData/${id}`,{})
}

export const editEvents=async(id,reqBody)=>{
    return await axiosConfig("put",`${BaseUrl}/eventsData/${id}`,reqBody)
}

export const registerStudent=async(reqBody)=>{
    return await axiosConfig("post",`${BaseUrl}/registers`,reqBody)
}