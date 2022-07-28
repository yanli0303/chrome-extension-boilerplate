import { addListener } from '@extension/utils';
import { requestHandlers, responseHandlers } from './handlers';

addListener('background', requestHandlers, responseHandlers);
