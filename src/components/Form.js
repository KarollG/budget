import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({saveExpenditure, saveCreateExpenditure}) => {
    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError]= useState(false);

    //Cuando el usuario agrega un gasto
    const addExpenditure = e =>{
        //para poder ejecutar el codigo
        e.preventDefault();

        //validar
        if( quantity<1 ||isNaN(quantity) || name.trim()=== ''){
            saveError(true);    
            return;
        }
        saveError(false);    
        //construir el gasto 
        const expenditure ={
            name, 
            quantity,
            id : shortid.generate()
        }
        // console.log(expenditure);
        
        //pasar el gasto al componente principal
        // addNewExpenditure(expenditure);
        saveExpenditure(expenditure);
        saveCreateExpenditure(true);

        //resetear el formulario
        saveName('');
        saveQuantity(0);

    }


    return ( 
        <form
            onSubmit= {addExpenditure}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Todos los campos son obligatorios o Presupuesto Incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value = {name}
                    onChange={e => saveName(e.target.value)}
                /> 
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value = {quantity}
                    onChange={e => saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />    
        </form>
     );
}
 
Form.propTypes = {
    saveExpenditure: PropTypes.func.isRequired,
    saveCreateExpenditure: PropTypes.func.isRequired
}

export default Form;