import { FC, createElement as h } from 'react';
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';

import '../assets/Alert.scss';

export type AlertProps = StandardProps & {
  /** Description for the 'heading' prop */
  heading?: string
};

export const Alert: FC<AlertProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  heading,
  ...attrs
}) => {
  const classes = classBuilder('dbt-design-system-alert', classBlock, classModifiers, className);
  const title = heading || 'Alert';

  return (
    <div {...attrs} className={classes()}>
      <h1 className={classes('heading')}>{title}</h1>
      {children}
    </div>
  );
};

Alert.displayName = 'Alert';

export default Alert;
