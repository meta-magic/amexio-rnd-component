import { ValueAccessorBase } from './value-accessor';
import { InputValidator } from './input.validator';

export class BaseInput<T> extends ValueAccessorBase<T> {
  
    onFocus(event:any){
        this.checkValidity();
    }

    onInput(event:any){
        this.checkValidity();
    }

    onBlur2(event:any){
        this.checkValidity();
    }

    onChange(event:any){
        this.checkValidity();
    }

    checkValidity(){
    }
    
    validateOnInit(){
        return true;
    }

    isVali1d() {
        return true;
    }
    
}