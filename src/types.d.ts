export interface Message {
  id: number;
  senderId: number;
  recipientId: number;
  messageText: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}