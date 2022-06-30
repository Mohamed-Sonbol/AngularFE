import { Component,Input, TemplateRef, Injectable, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormControl, NgForm, Validators,  FormBuilder, FormGroup  } from '@angular/forms';
import { CrudService } from './service/crud.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: AppComponent}   
  ]
})
export class AppComponent {
  @ViewChild('callAPIDialog')
  callAPIDialog!: TemplateRef<any>;
  @ViewChild('callAPIDialog2')
  callAPIDialog2!: TemplateRef<any>;
  @ViewChild('callAPIDialog3')
  callAPIDialog3!: TemplateRef<any>;
  @ViewChild('callAPIDialog4')
  callAPIDialog4!: TemplateRef<any>;
  @ViewChild('callAPIDialog5')
  callAPIDialog5!: TemplateRef<any>;
  @ViewChild('background')
  background!: TemplateRef<any>;
  constructor(public dialog: MatDialog, private crudService: CrudService) { }

  ELEMENT_DATA: any = [];
  ELEMENT_DATA2: any = [];
  displayedColumns: string[] = ['ID','Name'];
  displayedColumns2: string[] = ['ID','Course Name', "Student_ID"];
  dataSource = this.ELEMENT_DATA;
  dataSource2 = this.ELEMENT_DATA2;






  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe((result: string | undefined) => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
}

openDialog2() {
  this.crudService.GetUsers()
  .subscribe((res) => {
    this.ELEMENT_DATA = res;
      console.log(this.ELEMENT_DATA.data)
      this.dataSource = this.ELEMENT_DATA.data;
    }, (err: any) => {
      console.log(err);
  });
  let dialogRef = this.dialog.open(this.callAPIDialog2);
  dialogRef.updateSize('30%');
  dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })


}


openDialog3() {

  let dialogRef = this.dialog.open(this.callAPIDialog3);
  dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })


}openDialog4() {
  
  let dialogRef = this.dialog.open(this.callAPIDialog4);
  dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })


}openDialog5() {
  this.crudService.Getcourses()
  .subscribe((res) => {
    this.ELEMENT_DATA2 = res;
      console.log(this.ELEMENT_DATA2.data)
      this.dataSource2 = this.ELEMENT_DATA2.data;
    }, (err: any) => {
      console.log(err);
  });
  let dialogRef = this.dialog.open(this.callAPIDialog5);
  dialogRef.updateSize('30%');
  dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })


}



onSend3(form: NgForm){  
  if(form.status === 'INVALID')
  {
    // display error in your form
  }else{
    this.crudService.deleteUser(form.value.Studentid)
.subscribe((res) => {
  this.ELEMENT_DATA = res;
    console.log(this.ELEMENT_DATA.data)
    this.dataSource = this.ELEMENT_DATA.data;
  }, (err: any) => {
    console.log(err);
});
      console.log(form.value.Studentname)
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
  }
  
}



onSend2(form: NgForm){  
  if(form.status === 'INVALID')
  {
    // display error in your form
  }else{
    this.crudService.updateUser(form.value.Studentid, form.value.Studentname)
.subscribe((res) => {
  this.ELEMENT_DATA = res;
    console.log(this.ELEMENT_DATA.data)
    this.dataSource = this.ELEMENT_DATA.data;
  }, (err: any) => {
    console.log(err);
});
      console.log(form.value.Studentname)
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
  }
  
}


onSend(form: NgForm){  
  if(form.status === 'INVALID')
  {
    // display error in your form
  }else{
    this.crudService.AddUser(form.value).subscribe(() => {
        console.log('User added successfully!')
      }, (err: any) => {
        console.log(err);
    });
      console.log(form.value.Studentname)
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
  }
  
}

}


