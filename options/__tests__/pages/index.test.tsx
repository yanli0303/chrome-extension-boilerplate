import { render } from '@testing-library/react';
import Index from '../../pages/index';

test('changes the class when hovered', () => {
  const component = render(<Index />);
  expect(component).toMatchSnapshot();
});
