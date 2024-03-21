import { createContext, useState , useEffect} from "react";
import {TextField , Button, Container, Box} from "@mui/material";
import styles from './Todolist.module.css'
import Todoitems from "./Todoitems";

export const TodoItemContext = createContext();


function todolist(){

    const [task , setTask ]  = useState("")
    const [todo , setTodo] = useState([])   


    function addTodo(todo){
        if(todo === ""){
            return
        }
        setTodo(prevTask => [...prevTask, {task: todo, isEditing: false }])
        
        setTask("")
    }

    function handleOnChange(e){
        setTask(e.target.value)
    }

    function editForm(task,index){

    

    setTodo(task.map((item, i) => i === index ? { ...item, isEditing: !item.isEditing} : item))
    //  console.log(task)
      
        
    }


    function saveUpdatedValue(task,index,value){
        setTodo(task.map((item, i) => i === index? {...item, task: value, isEditing: !item.isEditing}: item))
    }


    return(
        <div className={styles["container-add-task"]} >
            <Container maxWidth="md" className={styles["container-form"]}>
                <Box display="flex" justifyContent="center" >
                    <TextField variant="standard" id="addToDo" type="text" placeholder="Add your task" value={task} className={styles['container-input']} onChange={handleOnChange}></TextField>
                    <Button size="small" variant="contained"className={styles['container-button']} onClick={() => addTodo(task)} disableElevation>Add</Button>
                </Box>
            </Container>
            <Container>
                <TodoItemContext.Provider value={todo}>
                    <Todoitems editForm={editForm} saveUpdatedValue={saveUpdatedValue} />
                </TodoItemContext.Provider>
            </Container>
        </div>
    )


}

export default todolist 