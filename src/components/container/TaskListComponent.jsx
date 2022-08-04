import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/TaskForm';
import TaskComponent from '../pure/TaskComponent';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING)
    
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Task State has been modified')
        setIsLoading(false)
        return () => {
            console.log('Tasklist Component is going to unmount...')
        };
    }, [tasks]);

    function taskCompleted(task) {
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask[index].completed = !tempTask[index].completed
        setTasks(tempTask)
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask.splice(index,1)
        setTasks(tempTask)
    }

    function addNewTask(task){
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
    }

    return (
        <>
            <div className='col-12'>

                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar style={ { position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task,i)=>{
                                    return(
                                        <TaskComponent task={task} key={i} complete={ taskCompleted } remove={ deleteTask }/>
                                    )  
                                })}
                         
                              
                            </tbody>     
                        </table>
                    </div>  
                </div>
                <TaskForm  add={ addNewTask } />
            </div>
            
        </>
    );
};


export default TaskListComponent;

