import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 9, 8);
  const expenseTitle = "car insurance";
  const expenseAmount = 294.67;

  return (
    <div>
      <div className="expense-item">
        <div>{expenseDate}</div>
        <div className="expense-item__description">
          <h2> {expenseTitle} </h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
