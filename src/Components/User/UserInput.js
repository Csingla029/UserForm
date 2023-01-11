import React, { useState } from 'react';
import styles from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button"
import ErrorModal from '../UI/ErrorModal';
const UserInput = (props) => {
    const [enteredUsername,newUsername] = useState('');
    const [enteredAge,newAge] = useState('');
    const [error,setError] = useState();
    const onSubmitChangeHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        // console.log(enteredUsername,enteredAge);
        props.onAddUser(enteredUsername,enteredAge);
        newUsername('');
        newAge('');
    }
    const onChangeUsernameHandler = (event) => {
        newUsername(event.target.value);
    }
    const onChangeAgeHandler = (event) => {
        newAge(event.target.value);
    }

    const errorHander = () => {
        setError(null);
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHander}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={onSubmitChangeHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={onChangeUsernameHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={onChangeAgeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};
export default UserInput;