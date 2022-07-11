import { joinUrl } from './joinUrl';

it('joinUrl', () => {
  expect(joinUrl('', '')).toEqual('/');
  expect(joinUrl('', '', '')).toEqual('/');
  expect(joinUrl('', '', '', '')).toEqual('/');

  expect(joinUrl('', 'a')).toEqual('/a');
  expect(joinUrl('', 'a', '')).toEqual('/a/');

  expect(joinUrl('/a', '/b')).toEqual('/a/b');
  expect(joinUrl('a', 'b', 'c')).toEqual('a/b/c');
  expect(joinUrl('/a', '/b', '/c')).toEqual('/a/b/c');
  expect(joinUrl('/a/', '/b/', '/c/')).toEqual('/a/b/c/');
});
