    import { FormEvent } from 'react';

    type buttonProps = {
        value : string | number;
    }

    export function Button(props : buttonProps){

        return(
            <li className='buttons__itens'>{props.value}</li>
        );
    }