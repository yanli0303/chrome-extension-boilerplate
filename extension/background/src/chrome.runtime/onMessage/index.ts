import { MessageAddress, addRuntimeMessageListener } from '@localhost/chrome';
import { log } from '../../log';
import { requestHandlers, responseHandlers } from './handlers';

addRuntimeMessageListener({
  to: MessageAddress.Background,
  requestHandlers,
  responseHandlers,
  log,
});
