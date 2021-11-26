import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { UserFieldsWindowComponent } from '../user-fields-window/user-fields-window.component';

@Component({
    selector: 'app-view-user-details',
    templateUrl: './view-user-details.component.html',
    styleUrls: ['./view-user-details.component.scss']
})
export class ViewUserDetailsComponent implements OnInit {

    userDetailsArr: any
    constructor(
        private dialog: MatDialog,
        private dataTransfer: DataService,
        private router: Router
    ) { }

    ngOnInit() {
        this.dataTransfer.currentData.subscribe((result)=>{
            this.userDetailsArr = result
        })
    }

    editUser(userData) {
        let id = userData['id']
        const dialogObj = this.dialog.open(UserFieldsWindowComponent, {
            width: '700px',
            data: userData
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

    gotoPreviosPage(){
    localStorage.setItem('userDetails', JSON.stringify(this.userDetailsArr));
        this.router.navigate([''])
    }
}
