import { PersistentLogger } from '@localhost/utils';

const log = new PersistentLogger(chrome.storage.local, 'c');
log.loadSettings();

export { log };
