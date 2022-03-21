import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        startYear={filterYear}
        onChangeFliter={filterChangeHandler}
      />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export default Expenses
