import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

//  onSubmit(form:NgForm)
//  {
//    console.log(form);
//  }
answer:string;
isSubmitted=false;
userdata={};
    @ViewChild('f',{static:false})signupForm:NgForm
    onSubmit(){
      console.clear();
      
      console.log(this.signupForm);
      this.isSubmitted=true;
      this.userdata=this.signupForm.value;
      this.signupForm.reset();
    }

    genders=['male','female'];
    //setvalue

    // suggestUserName(){
    //   const suggestedName='superuser';
    //   this.signupForm.setValue({
    //     username:suggestedName,
    //     email:'',
    //     secret:'',
    //     questionAnswer:'',
    //     gender:'female'
    //   });
    // }

    //patchvalue

    suggestUserName(){
      const suggestedName='superuser';
      this.signupForm.form.patchValue({
        username:suggestedName,
      });
    }

    
}
