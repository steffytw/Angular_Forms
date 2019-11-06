import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  forbiddenUsernames=['Anna','Aleena'];
  forbiddenNames(control:FormControl):{[s:String]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value)!==-1){
      return{'nameIsForbidden':true}
    }
    return null
  }
  forbiddenEmails(control:FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{    //callback function
        setTimeout(()=>{                        //fuction
          if(control.value == 'test@test.com'){
            resolve({'emailIsForbidden': true})
          }else{
            resolve(null)
          }
        },1500);             //setTimeout has 2 parameters

    })
    return promise
  }
  
  signupForm:FormGroup
  ngOnInit(){
    this.signupForm=new FormGroup({
      'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    })

    this.signupForm.statusChanges.subscribe((status)=>{
      console.log(status)
    })
  }
  genders=['male','female'];
  onSubmit(){
    console.log(this.signupForm)
  }
  onaddHobbies(){
   
      const control=new FormControl(null,Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control)

 
    }
  
}
