import { PersistentLogger } from '@localhost/utils';

const log = new PersistentLogger(chrome.storage.local, 'p');
log.loadSettings();

export { log };
