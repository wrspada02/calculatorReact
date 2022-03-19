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

            if(clickedButton === "ON" || clickedButton === "C"){
                displayCalc.value = "";
            }else if(clickedButton === "="){
                let infoDisplay = displayCalc.value;
                displayCalc.value = (eval(`${infoDisplay}`));
                //preciso verificar a expressao numerica, e onde tiver os operadores substituir por operadores do js. * / + - etc...
            }else{
                displayCalc.value = String(displayCalc.value) + String(aritmetica);
            }
        }

        
        

        return(
            <li className='buttons__itens' onClick={handleShowNumberInput}>
                {props.value}
            </li>
        );
    }