    import { FormEvent, useEffect, useState } from 'react';

    type buttonProps = {
        value : string | number,
    }

    
    export function Button(props : buttonProps){

        let clickedButton = "";
        const displayCalc =  document.getElementById('visor__calculator') as HTMLInputElement;
        
        const [aritmetica, setAritmetica] = useState('');
        
        function handleShowNumberInput(event : FormEvent){

            clickedButton = event.currentTarget.innerHTML;
            setAritmetica(clickedButton);

            displayCalc.value = String(displayCalc.value) + String(aritmetica);
        }

        
        

        return(
            <li className='buttons__itens' onClick={handleShowNumberInput}>
                {props.value}
            </li>
        );
    }