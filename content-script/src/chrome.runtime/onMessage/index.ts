import { addListener } from 'utils';
import { requestHandlers, responseHandlers } from './handlers';

addListener('content', requestHandlers, responseHandlers);
