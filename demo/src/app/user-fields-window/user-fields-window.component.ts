import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmValidator } from '../confirm.validator';

@Component({
	selector: 'app-user-fields-window',
	templateUrl: './user-fields-window.component.html',
	styleUrls: ['./user-fields-window.component.scss']
})
export class UserFieldsWindowComponent implements OnInit {

	passwordValidate: boolean = false;

	form: FormGroup = this.formBuilder.group({
		name: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', Validators.required),
		confirmPassword: new FormControl(''),
		phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
	}, { validators: ConfirmValidator('password','confirmPassword') });

	constructor(
		private formBuilder: FormBuilder,
		private dialog: MatDialogRef<UserFieldsWindowComponent>,
		@Inject(MAT_DIALOG_DATA) public data: {name: any} // used to access the data that was passed in to a dialog
	) { }

	ngOnInit() {

		// fetching data from dialog and assign to formControl
		this.form.get('name').setValue(this.data['name'])
		this.form.get('email').setValue(this.data['email'])
		this.form.get('password').setValue(this.data['password'])
		this.form.get('confirmPassword').setValue(this.data['password'])
		this.form.get('phoneNumber').setValue(this.data['phoneNumber'])
	}


	submit() {
		if (this.form.valid) {
			console.log(this.form.value)
			this.dialog.close({data: this.form.value}) // dialog will close and sending data to parent
		}
	}

	// checking fieds are valid or not
	isFieldInvalid(field: string) {
		return (
			(this.form.get(field).invalid)
		);
	}
}
