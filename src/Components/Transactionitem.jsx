import React from 'react';

const Transactionitem = ({ expense, onRemoveExpense }) => {
    return (    
        <li>
            <div>{expense.title}</div>
            <div>{expense.amount}</div>
            <div>{expense.date.toDateString()}</div>
            <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
        </li>
    );
};

export default Transactionitem;

