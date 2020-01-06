import React, { Fragment } from 'react';

import classes from './Playground.module.scss';
// import RotatingCards from '../../components/Modules/RotatingCards/RotatingCards';
import Form from '../../components/Modules/Form/Form';
import AnswerReveals from '../../components/Modules/AnswerReveals/AnswerReveals';

const Playground = () => (
  <Fragment>
    <div className={ classes.section }>
      <Form />
      <AnswerReveals />
    </div>
  </Fragment>
);

export default Playground;