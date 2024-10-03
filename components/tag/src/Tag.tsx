import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Tag.scss';

export type TagProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Tag: FC<TagProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('dbt-design-system-tag', classBlock, classModifiers, className);
  const title = heading || 'Tag';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Tag.displayName = 'Tag';

export default Tag;
