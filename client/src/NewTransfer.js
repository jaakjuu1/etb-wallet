import React, { useState } from 'react'

function NewTransfer ({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined)

  const updateTransfer = (e, field) => {
    const value = e.target.value
    setTransfer({ ...transfer, [field]: value })
  }

  const submit = e => {
    console.log(transfer)
    e.preventDefault()
    createTransfer(transfer)
  }

  return (
    <div>
      <h2>Create transfer</h2>
      <form onSubmit={e => submit(e)}>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='text'
          onChange={e => updateTransfer(e, 'amount')}
        />
        <label htmlFor='to'>To</label>
        <input id='to' type='text' onChange={e => updateTransfer(e, 'to')} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewTransfer
