import classes from './MealItemForm.module.css';
import Input from './../../UI/Input';
import { useRef } from 'react';

const MealItemForm = (props) => {
    const amountInputRef = useRef();


    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount; //convert string to no

        if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5)
            return;
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount" input={{   //passing props
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm;