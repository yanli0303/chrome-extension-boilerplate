import { MessageAddress, addRuntimeMessageListener } from '@localhost/chrome';
import { log } from '../../log';
import { requestHandlers, responseHandlers } from './handlers';

addRuntimeMessageListener({
  to: MessageAddress.ContentScript,
  requestHandlers,
  responseHandlers,
  log,
});

chrome.runtime
  .sendMessage({
    from: MessageAddress.ContentScript,
    to: MessageAddress.Background,
    type: 'hello',
  })
  .catch((error) => log.error('send hello error', error));
