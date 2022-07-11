import { addListener } from 'utils';
import { requestHandlers, responseHandlers } from './handlers';

addListener('background', requestHandlers, responseHandlers);
