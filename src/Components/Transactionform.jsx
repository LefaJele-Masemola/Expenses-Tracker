import React, { useState } from 'react';

const Transactionform = ({ onAddExpense }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date)
        };
        onAddExpense(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label> {/*title of expense*/}
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Amount</label>  {/*amount of expense*/}
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Date</label>  {/*date of expense or purchase*/}
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default Transactionform;
