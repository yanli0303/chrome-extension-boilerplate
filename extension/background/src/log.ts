import { PersistentLogger } from '@localhost/utils';

const log = new PersistentLogger(chrome.storage.local, 'b');
log.loadSettings();

export { log };
