import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryService } from '../country.service';
import { AboutForm } from './home-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  aboutForm!: FormGroup
  aboutFormObj: AboutForm = new AboutForm();
  constructor (private _fb:FormBuilder, private _countryService:CountryService){

  }

  ngOnInit(): void {
    this.aboutForm = this._fb.group({
      nameF: ['',Validators.required],
      email: ['',Validators.required],
      comments: ['',Validators.required]
    })
  }
  onSubmit(form:FormGroup){
    this.aboutFormObj.nameF = this.aboutForm.value.nameF;
    this.aboutFormObj.email = this.aboutForm.value.email;
    this.aboutFormObj.comments = this.aboutForm.value.comments;
    console.log(this.aboutForm.value);
    this._countryService.aboutFormDataPost(this.aboutForm).subscribe((res)=> {
      console.log(res);
      
    });
    // this._countryService.aboutFormDataPost(this.aboutForm).subscribe((res) => {
    //   console.log("UpdatedData:",res);
    //   // alert("data added successfully ");
    // },
    // (error) => {
    //   // alert("data not added");
    // });
  }
}
