import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Alert from '../src/Alert';

describe('Alert', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(Alert, minimalProps));
    });

    it('renders an element', async () => expect(screen.getByRole('generic')).toBeInTheDocument());
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };

    beforeEach(async () => {
      render(h(Alert, props));
    });

    it('renders an element', async () => expect(screen.getByRole('generic')).toBeInTheDocument());
  });
});
