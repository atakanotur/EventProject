import axios, {AxiosInstance} from 'axios';
import {
  MyEvent,
  MyEventType,
  Participant,
  UserForLogin,
  UserForRegister,
} from '../types';

const baseUrl = 'http://192.168.1.188:8087/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getResource = async (endpoint: string) => {
  return await axiosInstance
    .get(endpoint)
    .then((response: any) => {
      console.log('getResource.response', response);
      return response;
    })
    .catch((error: any) => {
      console.log('getResource.error', error);
      return null;
    });
};

const postResource = async (endpoint: string, data: any) => {
  return await axiosInstance
    .post(endpoint, data)
    .then((response: any) => {
      console.log('postResource.response', response);
      return response;
    })
    .catch((error: any) => {
      console.log('postResource.error', error);
      return null;
    });
};

//Auth
export const Login = async (userForLogin: UserForLogin) => {
  const endpoint = `${baseUrl}/Auth/login`;
  return await postResource(endpoint, userForLogin);
};

export const Register = async (userForRegister: UserForRegister) => {
  const endpoint = `${baseUrl}/Auth/register`;
  return await postResource(endpoint, userForRegister);
};

//MyEvents
export const getAllMyEvents = async () => {
  const endpoint = `${baseUrl}/MyEvents/getall`;
  return await getResource(endpoint);
};

export const getMyEventsByUserId = async (userId: number) => {
  const endpoint = `${baseUrl}/MyEvents/getbyuserid/${userId}`;
  return await getResource(endpoint);
};

export const getMyEventById = async (myEventId: number) => {
  const endpoint = `${baseUrl}/MyEvents/getmyeventbyid/${myEventId}`;
  return await getResource(endpoint);
};

export const addMyEvent = async (myEvent: MyEvent) => {
  const endpoint = `${baseUrl}/MyEvents/add`;
  return await postResource(endpoint, myEvent);
};

export const deleteMyEvent = async (myEvent: MyEvent) => {
  const endpoint = `${baseUrl}/MyEvents/delete`;
  return await postResource(endpoint, myEvent);
};

export const updateMyEvent = async (myEvent: MyEvent) => {
  const endpoint = `${baseUrl}/MyEvents/update`;
  return await postResource(endpoint, myEvent);
};

//MyEventTypes
export const getAllMyEventTypes = async () => {
  const endpoint = `${baseUrl}/MyEventTypes/getall()`;
  return await getResource(endpoint);
};

export const addMyEventType = async (myEventType: MyEventType) => {
  const endpoint = `${baseUrl}/MyEventTypes/add`;
  return await postResource(endpoint, myEventType);
};

export const deleteMyEventType = async (myEventType: MyEventType) => {
  const endpoint = `${baseUrl}/MyEventTypes/delete`;
  return await postResource(endpoint, myEventType);
};

export const updateMyEventType = async (myEventType: MyEventType) => {
  const endpoint = `${baseUrl}/MyEventTypes/update`;
  return await postResource(endpoint, myEventType);
};

//Participants
export const getAllParticipants = async () => {
  const endpoint = `${baseUrl}/Participants/getall`;
  return await getResource(endpoint);
};

export const getParticipantByUserId = async (userId: number) => {
  const endpoint = `${baseUrl}/Participants/getbyuserid/${userId}`;
  return await getResource(endpoint);
};

export const getParticipantsByEventId = async (myEventId: number) => {
  const endpoint = `${baseUrl}/Participants/getbyeventid/${myEventId}`;
  return await getResource(endpoint);
};

export const addParticipant = async (participant: Participant) => {
  const endpoint = `${baseUrl}/Participants/add`;
  return await postResource(endpoint, participant);
};

export const deleteParticipant = async (participant: Participant) => {
  const endpoint = `${baseUrl}/Participants/delete`;
  return await postResource(endpoint, participant);
};

export const updateParticipant = async (participant: Participant) => {
  const endpoint = `${baseUrl}/Participants/update`;
  return await postResource(endpoint, participant);
};

export const test = async () => {
  const result = await axios.get(`https://reqres.in/api/users?page=2`);
  console.log('result', result);
};
