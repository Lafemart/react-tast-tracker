import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText]= useState('')
    const [day, setDay]= useState('')
    const [reminder, setReminder]= useState(false)

    const onChangeTextHandler = (event)=>{
        setText(event.target.value)
    };

    const onChangeDayHandler = (event)=>{
        setDay(event.target.value)
    };

    const onChangeReminderHandler = (event)=>{
        setReminder(event.currentTarget.checked)
    };
    
    const onSubmit = (event) =>{
        event.preventDefault()
        
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="add 
            Task" 
            value={text} onChange={onChangeTextHandler}
            required
            />
        </div>
        <div className="form-control">
            <label htmlFor="">Day and time</label>
            <input type="text" placeholder="add Day & Time"
            value={day} onChange={onChangeDayHandler}
            required
            />            
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" checked={reminder}
            value={reminder} onChange={onChangeReminderHandler}
            />
        </div>
        <input className="btn btn-block" type="submit" value={'Save Task'}         
        />
    </form>
  )
}

export default AddTask