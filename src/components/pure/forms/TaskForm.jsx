import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({ add, lengthTasks }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        
        add(newTask)
    }

    return (
        <div>
            <form onSubmit={ addTask } className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill m-4'>
                    <input ref={nameRef} type='text' id='nameTask' placeholder='Add task' className='form-control form-control-lg mb-2' required/>
                    <input ref={descriptionRef} type='text' id='descriptionTask' placeholder='Add description' className='form-control form-control-lg mb-2' required/>
                    <select className='form-control form-control-lg mb-4' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </select>
                    <button type='submit' className='btn btn-success btn-lg ms-2'>
                        { lengthTasks > 0 ? 'Add a new Task' : 'Add your first task' }
                    </button>
                </div>   
            </form>
        </div>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
