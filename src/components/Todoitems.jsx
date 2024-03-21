
import { useContext, useEffect, useState } from "react"
import React  from "react";
import { TodoItemContext } from "./Todolist";
import { Container, List,ListItem, ListItemText, ListItemSecondaryAction, Divider ,Checkbox, TextField, Button} from "@mui/material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import styles from './Todoitems.module.css'

function todoitems({editForm, saveUpdatedValue}){

const task = useContext(TodoItemContext)


const [listedTask, setListedTask] = useState([])
const [editedField , setEditedField] = useState("")

function handleOnUpdate(task,index) {
    
 editForm(task,index)
 
 setEditedField(task[index].task)
 

}

function handleOnDelete(index){

  const newVal = task.splice(index,1)
  setListedTask(newVal)

}





const listItems = task.map((item, index) =>
                                            task[index].isEditing ?<React.Fragment><TextField type="text" value={editedField} onChange={(e) => setEditedField(e.target.value)}></TextField><Button onClick={() => saveUpdatedValue(task,index,editedField)}>Save</Button></React.Fragment> : <React.Fragment>
                                                <ListItem key={index} >
                                                <Checkbox />
                                                <ListItemText primary={item.task}></ListItemText>  
                                                <ListItemSecondaryAction>
                                                    <IconButton onClick={() => handleOnUpdate(task,index)}>
                                                        <ModeEditOutlineIcon color="primary"/>    
                                                    </IconButton>  
                                                    <IconButton onClick={() => handleOnDelete(index) }>
                                                        <DeleteOutlineIcon color="error"/>    
                                                    </IconButton>    
                                                </ListItemSecondaryAction>                                          
                                            </ListItem>
                                            <Divider/>
                                            </React.Fragment>
                                            )

    return(
     <Container maxWidth="md" className={styles["container-list"]} >
        <List className={styles['container-list-item']} >
            {listItems}
        </List>
     </Container>
    )




}

export default todoitems

//className= {styles["list-item"]} 