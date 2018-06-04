import { getMessages, getMembers } from './data';
import getChatLog from './service';

describe('getChatLog', () => {
  it('returns action object', () => {
    expect(getChatLog().type).toBe('MESSAGES_LOADING');
  });
});