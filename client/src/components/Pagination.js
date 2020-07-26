import './pagination.styles.scss';

import React from 'react';

const Pagination = ({ surveysPerPage, totalSurveys, handlePaginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalSurveys / surveysPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <React.Fragment>
            {pageNumbers.map((number) => (
                <div key={number} className='ui pagination menu'>
                    <div className='item' onClick={() => handlePaginate(number)}>
                        {number}
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Pagination;
