import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserFieldsWindowComponent } from '../user-fields-window/user-fields-window.component';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	@Input() viewUser: boolean
	userDetailsArr = []

	constructor(
		public dialog: MatDialog,
		private router: Router
	) {
	}
	ngOnInit() {
		if (localStorage.getItem('userDetails')) {
			this.userDetailsArr = JSON.parse(localStorage.getItem('userDetails'));
		}
	}

	addUser() {
		const dialogObj = this.dialog.open(UserFieldsWindowComponent, {
			width: '700px',
			data: { name: '', email: '', phoneNumber: '', password: '', confirmPassword: '' },
			disableClose: true
		})

		dialogObj.afterClosed().subscribe((result) => {
			if (result) {
				result['data']['id'] = Math.random()
				this.userDetailsArr.push(result['data'])
			}
		})
	}

	editUser(userData) {
		let id = userData['id']
		const dialogObj = this.dialog.open(UserFieldsWindowComponent, {
			width: '700px',
			data: userData,
			disableClose: true
		})

		dialogObj.afterClosed().subscribe((result) => {
			if (result) {
				let index = this.userDetailsArr.findIndex(ele => ele['id'] == id)
				if (index > -1) {
					result['data']['id'] = Math.random()
					this.userDetailsArr.splice(index, 1, result['data'])
				}
			}
		})
	}
	public deleteUser(userData) {
		let localStorageData = JSON.parse(localStorage.getItem('userDetails'))
		let userId = userData['id']
		let index = this.userDetailsArr.findIndex(ele => ele['id'] == userId)
		if (index > -1) {
			this.userDetailsArr.splice(index, 1)
			localStorageData.splice(index,1)
			localStorage.setItem('userDetails', JSON.stringify(localStorageData));
		}
	}

	sendDataToNextPage() {
		localStorage.setItem('userDetails', JSON.stringify(this.userDetailsArr));
		window.open('viewUser','_blank')
	}

	gotoPreviosPage() {
		localStorage.setItem('userDetails', JSON.stringify(this.userDetailsArr));
		this.router.navigate([''])
	}
}
