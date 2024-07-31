import React from 'react';

const Transactionitem = ({ expense, onRemoveExpense }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(amount); //aded currency to Rands
    };

    return (
        <li>
            <span>{expense.title}: {formatCurrency(expense.amount)}</span>
            <button onClick={() => onRemoveExpense(expense.id)}>Remove</button> {/* remove button */}
        </li>
    );
};

export default Transactionitem;
