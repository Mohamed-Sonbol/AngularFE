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
  @ViewChild('AddStudentDialog')
  AddStudentDialog!: TemplateRef<any>;
  @ViewChild('ViewStudentDialog')
  ViewStudentDialog!: TemplateRef<any>;
  @ViewChild('UpdateStudentDialog')
  UpdateStudentDialog!: TemplateRef<any>;
  @ViewChild('DeleteStudentDialog')
  DeleteStudentDialog!: TemplateRef<any>;
  @ViewChild('ViewCourseDialog')
  ViewCourseDialog!: TemplateRef<any>;
  constructor(public dialog: MatDialog, private crudService: CrudService) { }

  Students_DATA: any = [];
  Course_DATA2: any = [];
  displayedColumns: string[] = ['ID','Name'];
  displayedColumns2: string[] = ['ID','Course Name', "Student_ID"];
  ViewStudentsdataSource = this.Students_DATA;
  ViewSCoursesdataSource = this.Course_DATA2;






  openAddStudentDialog() {
    let dialogRef = this.dialog.open(this.AddStudentDialog);
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

openViewStudentDialog() {
  this.crudService.GetUsers()
  .subscribe((res) => {
    this.Students_DATA = res;
      console.log(this.Students_DATA.data)
      this.ViewStudentsdataSource = this.Students_DATA.data;
    }, (err: any) => {
      console.log(err);
  });
  let dialogRef = this.dialog.open(this.ViewStudentDialog);
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


openUpdateStudentDialog() {

  let dialogRef = this.dialog.open(this.UpdateStudentDialog);
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
openDeleteStudentDialog() {
  
  let dialogRef = this.dialog.open(this.DeleteStudentDialog);
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
openViewCourseDialog() {
  this.crudService.Getcourses()
  .subscribe((res) => {
    this.Course_DATA2 = res;
      console.log(this.Course_DATA2.data)
      this.ViewSCoursesdataSource = this.Course_DATA2.data;
    }, (err: any) => {
      console.log(err);
  });
  let dialogRef = this.dialog.open(this.ViewCourseDialog);
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



onSendDelete(form: NgForm){  
  if(form.status === 'INVALID')
  {
    // display error in your form
  }else{
    this.crudService.deleteUser(form.value.Studentid)
.subscribe((err: any) => {
    console.log(err);
});
      console.log(form.value.Studentname)
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
  }
  
}



onSendUpdate(form: NgForm){  
  if(form.status === 'INVALID')
  {
    // display error in your form
  }else{
    this.crudService.updateUser(form.value.Studentid, form.value.Studentname)
.subscribe((err: any) => {
    console.log(err);
});
      console.log(form.value.Studentname)
      this.dialog.closeAll(); // Close opened diaglo
    // do whatever you want to do with your data
  }
  
}


onSendAdd(form: NgForm){  
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


