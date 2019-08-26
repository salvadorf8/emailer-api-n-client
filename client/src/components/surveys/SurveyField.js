import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div className='field'>
			<input type='text' autoComplete='off' placeholder={label} {...input} />
			{touched && error ? <div className='ui pointing red basic label'>{error}</div> : ''}
		</div>
	);
};
