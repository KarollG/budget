import React , {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  //definir el state
  const [budget, saveBudget] = useState(0); 
  const [remaining, saveRemaining] = useState(0);  
  const [showquestion, updateQuestion ] = useState(true);  
  const [expenditures, saveExpenditures] = useState([]);
  const [expenditure, saveExpenditure] = useState({});
  const  [createexpenditure, saveCreateExpenditure] = useState(false);


  //useEffect que actualiza el restante
  useEffect(()=>{
    if (createexpenditure){
      //agrega el nuevo presupuesto
      saveExpenditures([
        ...expenditures,
        expenditure
  
      ]);

      //resta el presupuesto actual
      const remainingBudget = remaining - expenditure.quantity;
      saveRemaining(remainingBudget);

      //resetear a false
      saveCreateExpenditure(false);
    }
  }, [expenditure, createexpenditure, expenditures, remaining]);

  //cuando se agregue um nuevo gasto
 /*  const addNewExpenditure = expenditure => {
    // console.log(expenditure);
    saveExpenditures([
      ...expenditures,
      expenditure

    ])
  }
   */

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          {showquestion? (
            <Question 
              saveBudget ={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}

            />
          ) :
              (
                <div className="row">
                  <div className="one-half column">
                    <Form 
                      // addNewExpenditure = {addNewExpenditure}
                      saveExpenditure = {saveExpenditure}
                      saveCreateExpenditure = {saveCreateExpenditure}
                    />
                  </div>
                  <div className="one-half column">
                    <List 
                      expenditures ={expenditures}
                    />
                    <BudgetControl 
                      budget={budget}
                      remaining={remaining}
                    />
                  </div>
                </div>
              )
          }
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
