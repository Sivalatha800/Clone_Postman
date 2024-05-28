import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoRemittance(){
    let url = 'http://localhost:4200/';
    let base64Key = 'RevalKey';
    let credentials = 'sivalatha.r@revalsys.com|U2FsdGVkX1/IjNF7HvHXqIqtC0JuC167AKDdCvqZr5c=';
    let encryptedUrl = CryptoJS.AES.encrypt(credentials, base64Key).toString();
    // let fullurl = url+'SSO?SSOId='+ encryptedUrl;
    console.log('encryptedUrl', encryptedUrl)
   let fullurl = url+'SSO?SSOId='+ encodeURIComponent(encryptedUrl);
    console.log(fullurl)
    window.open(fullurl, '_blank')
  }

}
