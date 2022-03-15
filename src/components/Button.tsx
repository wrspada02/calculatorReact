    import { FormEvent } from 'react';

    type buttonProps = {
        value : string | number,
        //key : string,
    }

    export function Button(props : buttonProps){

        function handleShowNumberInput(event : FormEvent){
            const clickedButton = event.currentTarget.innerHTML;
            console.log(clickedButton);
            //let displayCalculator = document.querySelector(`.visor__calculator`);
            //console.log(displayCalculator);
        }

        return(
            <li className='buttons__itens' onClick={handleShowNumberInput}>
                {props.value}
                </li>
        );
    }