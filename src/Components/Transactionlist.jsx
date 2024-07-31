import React from 'react';
import Transactionitem from './Transactionitem';

const Transactionlist = ({ expenses, onRemoveExpense }) => {
    return (
        <ul>
            {/* Iterate over the list of expenses and render an ExpenseItem for each */}
            {expenses.map((expense) => (
                <Transactionitem key={expense.id} expense={expense} onRemoveExpense={onRemoveExpense} />
            ))}
        </ul>
    );
};

export default Transactionlist;
