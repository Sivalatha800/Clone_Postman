import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperModuleServiceService } from 'src/app/services/helper-module-service.service';
import * as CryptoJS from 'crypto-js'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-response',
  templateUrl: './get-response.component.html',
  styleUrls: ['./get-response.component.css']
})
export class GetResponseComponent implements OnInit {

  getResponseForm: FormGroup;
  submitted: boolean = false;
  respContent: any;

  constructor(private formBuilder: FormBuilder,
    private api: HelperModuleServiceService, private router: Router,) {

    this.getResponseForm = this.formBuilder.group({
      url: ['', [Validators.required]],
      request: [''],
      token: [''],
      // resContent:['']
    });
  }

  ngOnInit(): void {
  }

  get formValidations() {
    return this.getResponseForm.controls;
  }

  submit() {
    if (this.getResponseForm.valid) {
      debugger
      let req:any = '';
      if(this.getResponseForm.value.request !=undefined && this.getResponseForm.value.request != null && this.getResponseForm.value.request != ''){
        req = JSON.parse(this.getResponseForm.value.request)
      }
      
      this.api.postAPITestService(this.getResponseForm.value.url, req, this.getResponseForm.value.token).subscribe((res: any) => {
        this.respContent = {};
        if (res) {
          this.respContent = res;
        } else {
          this.respContent = {};
        }
      }, (error:HttpErrorResponse) => {
        this.respContent = error;
      });
    
    } else {
      this.submitted = true;
    }

  }
}
