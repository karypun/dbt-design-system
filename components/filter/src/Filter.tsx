import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Filter.scss';

export type FilterProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Filter: FC<FilterProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('dbt-design-system-filter', classBlock, classModifiers, className);
  const title = heading || 'Filter';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Filter.displayName = 'Filter';

export default Filter;
