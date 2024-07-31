import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/Transactionform';
import ExpenseList from './Components/Transactionlist';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [
            ...prevExpenses,
            { ...expense, id: Math.random().toString() }
        ]);
    };

    const removeExpenseHandler = (id) => {
        setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <h1>Expenses Tracker</h1>
            <ExpenseForm onAddExpense={addExpenseHandler} />
            <ExpenseList expenses={expenses} onRemoveExpense={removeExpenseHandler} />
        </div>
    );
};

export default App;
