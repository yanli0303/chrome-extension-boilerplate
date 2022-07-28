import { addListener } from '@extension/utils';
import { requestHandlers, responseHandlers } from './handlers';

addListener('content', requestHandlers, responseHandlers);
