import {useState} from 'react'

const AddTask = ( {onAdd} ) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {

        e.preventDefault();

        if(!text){
            alert('Please add task');
            return;
        }
        onAdd ( { text, day, reminder })

        setText('');
        setDay('');
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder='Add Task'></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" value={day} onChange={ (e) => setDay(e.target.value)}  placeholder='Day & Time'></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={ (e) => setReminder(e.currentTarget.checked)} ></input>
            </div>
            <input type="submit" value="Save Task" className='btn btn-block'></input>
        </form>
    )
}

export default AddTask;
