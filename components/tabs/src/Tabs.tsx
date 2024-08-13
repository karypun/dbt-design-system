import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { Tabs as NGUTabs } from '@not-govuk/tabs';

import '../assets/Tabs.scss';

export type TabsProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Tabs: FC<TabsProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('dbt-design-system-tabs', classBlock, classModifiers, className);
  const title = heading || 'Tabs';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
