import { PersistentLogger } from '@localhost/utils';

const log = new PersistentLogger(chrome.storage.local, 'o');
log.loadSettings();

export { log };
