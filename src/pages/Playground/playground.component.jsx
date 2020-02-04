import React, { Fragment } from 'react';

import classes from './playground.module.scss';
import Form from '../../components/Modules/Form/Form';
import AnswerReveals from '../../components/Modules/AnswerReveals/AnswerReveals';

const Playground = () => (
	<Fragment>
		<div className={classes.section}>
			<Form />
			<AnswerReveals />
		</div>
	</Fragment>
);

export default Playground;
