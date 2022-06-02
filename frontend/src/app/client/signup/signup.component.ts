import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service1: MyserviceService,) { }

  ngOnInit(): void {
  }

  registerException1 = /[A-Za-z]{2,40}/;
  registerException2 = /[A-Za-z0-9]{2,40}/;
  //registerException3 = 
  
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    name: new FormControl(''),
    adress: new FormControl(''),
      cp: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      civility: new FormControl(''),
      login: new FormControl(''),
      confirm_password: new FormControl(''),
      password: new FormControl('')
    
  });

  isValid:boolean=false;
  submitForm(){
    this.isValid = this.signupForm.valid;
    if(this.isValid)
    {
      this.service1.postClient();
    }
  }

}
