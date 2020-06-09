import React, {Fragment, useState} from 'react'; 
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({saveBudget, saveRemaining, updateQuestion}) => {
    //definir  state
    const [quantity, saveQuantity]= useState(0);
    const [error, saveError]= useState(false);

    //funcion que lee presupuesto
    const defineBudget = e => {
        saveQuantity(parseInt(e.target.value, 10))
    }

    //submit para definir el presupuesto
    const addBudget = e => { 
        e.preventDefault();

        //Validar
        if(quantity < 1 ||isNaN(quantity)){
            saveError(true);
            return;
        }
        //Si se pasa la validación
        saveError(false);
        saveBudget(quantity);
        saveRemaining(quantity);
        updateQuestion(false);
    }

    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto Ingresado es Incorrecto"/> : null}

            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange= {defineBudget}
                />

                <input
                    type="submit"
                    className= "button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}

export default Question;