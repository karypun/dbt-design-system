import { createElement as h } from 'react';
import { render, screen } from '@not-govuk/component-test-helpers';
import Tabs from '../src/Tabs';

describe.skip('Tabs', () => {
  const minimalProps = {
  };

  describe('when given minimal valid props', () => {
    beforeEach(async () => {
      render(h(Tabs, minimalProps));
    });

    it('renders an element', async () => expect(screen.getByRole('generic')).toBeInTheDocument());
  });

  describe('when given all valid props', () => {
    const props = {
      ...minimalProps
    };

    beforeEach(async () => {
      render(h(Tabs, props));
    });

    it('renders an element', async () => expect(screen.getByRole('generic')).toBeInTheDocument());
  });
});
