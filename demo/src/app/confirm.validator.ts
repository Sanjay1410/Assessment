
import { FormGroup } from '@angular/forms';
    
export function ConfirmValidator(firstString: string, secondString: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[firstString];
        const matchingControl = formGroup.controls[secondString];

        if (matchingControl.errors && !matchingControl.errors.confirmValidator) {
            return;
        }
        
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}