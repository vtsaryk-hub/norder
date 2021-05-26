import {AbstractControl, FormGroup} from "@angular/forms";

export function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


// function for confirm password validation
export function isEquals(controlName: string, comparableControlName: string) {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName);
    const comparableControl = formGroup.get(comparableControlName);

    if (comparableControl?.errors && !comparableControl.errors.notEquals) {
      return;
    }

    if (control?.value !== comparableControl?.value) {
      comparableControl?.setErrors({ notEquals: true });
    } else {
      comparableControl?.setErrors(null);
    }
  }
}
