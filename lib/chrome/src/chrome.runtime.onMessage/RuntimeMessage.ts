import type { MessageAddress } from './MessageAddress';

export interface RequestMessage {
  /**
   * The sender address.
   */
  from: MessageAddress;
  /**
   * The recipients of the message.
   * An empty array means the message is sent to all recipients.
   */
  to: MessageAddress | MessageAddress[];
  /**
   * The message type.
   */
  type: string;

  /**
   * The message body.
   */
  body: any;
}

export interface ResponseMessage extends RequestMessage {
  /**
   * Indicates whether the message is a response to a request.
   */
  isReply: true;

  /**
   * The status of the message.
   * The status can be one of the following:
   * - ok: the request was processed successfully.
   * - error: failed to process the request.
   */
  status: 'ok' | 'error';
}

type RuntimeMessage = RequestMessage | ResponseMessage;

/**
 * Tells whether the address is a recipient of the message.
 * @param param0 The message.
 * @param address The address to check.
 * @returns True if the address is a recipient of the message.
 */
export const isRecipient = (
  { to }: RuntimeMessage,
  address: MessageAddress
): boolean => {
  if (Array.isArray(to)) {
    return to.length === 0 || to.includes(address);
  }
  return to === address;
};
