import { MessageAddress, addRuntimeMessageListener } from '@localhost/chrome';
import { log } from '../../../app/log';
import { requestHandlers, responseHandlers } from './handlers';

addRuntimeMessageListener({
  to: MessageAddress.Popup,
  requestHandlers,
  responseHandlers,
  log,
});
