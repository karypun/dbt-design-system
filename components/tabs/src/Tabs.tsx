import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import { NavigationMenu, NavigationMenuProps } from '@not-govuk/navigation-menu';

import '../assets/Tabs.scss';

export type TabsProps = StandardProps & NavigationMenuProps & {
};

export const Tabs: FC<TabsProps> = ({
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('dbt-design-system-tabs', classBlock, classModifiers, className);

  return (
    <NavigationMenu classModifiers="horizontal" {...attrs} className={classes()} />
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
