export const reviewBudget = (budget, remaining) => {
    let classe;

    if( (budget/4) > remaining){
        classe = 'alert alert-danger';        
    } else if((budget/2)>remaining){
        classe= 'alert alert-warning';
    } else{
        classe = 'alert alert-success';
    }
    return classe;
}