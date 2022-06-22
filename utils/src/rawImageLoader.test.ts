import { rawImageLoader } from './rawImageLoader';

test('rawImageLoader', () => {
  expect(rawImageLoader({ src: 'url' })).toEqual('url');
});
