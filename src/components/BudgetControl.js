import React , {Fragment} from 'react';
import {reviewBudget} from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({budget,remaining}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${budget}
            </div>
            <div className={reviewBudget(budget, remaining)}>
                Restante: ${remaining}
            </div>
        </Fragment>
     );
}
 
//documentar la app
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default BudgetControl;