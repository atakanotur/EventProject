export interface MyEvent {
  id: number;
  myEventTypeId: number;
  userId: number;
  name: string;
  address: string;
  date: Date;
  participantLimit: number;
  participantCount: number;
}

export interface MyEventType {
  id: number;
  name: string;
}

export interface Participant {
  id: number;
  myEventId: number;
  userId: number;
}

export interface MyEventDetail {
  eventId: number;
  eventTypeId: number;
  eventName: string;
  eventTypeName: string;
}

export interface ParticipantDetail {
  participantId: number;
  myEventId: number;
}

export interface UserForLogin {
  email: string;
  password: string;
}

export interface UserForRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserProfileDetail {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface InitialStateBase {
  isLoading: boolean;
  error: any;
}
