import { render } from '@testing-library/react';
import Loading from './Loading';

test('test', () => {
  const component = render(<Loading />);
  expect(component).toMatchSnapshot();
});
