import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
    setEditing(false);
  };

  const [editing, setEditing] = useState(false);
  const editingHandler = () => setEditing(true);
  const resetEditingHandler = () => setEditing(false);

  return (
    <div className="new-expense">
      {!editing && <button onClick={editingHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={resetEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
