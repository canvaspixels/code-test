import { getMessages, getMembers } from './data';

export default function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: Promise.all([getMessages(), getMembers()])
  };
}