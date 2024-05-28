import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperModuleServiceService {

  constructor(public httpClient: HttpClient) { }

  postAPITestService(ApiUrl: string, data: any, token?: string): Observable<any> {
    debugger
    // ApiUrl='https://IIBHPAAPIDEV.revalweb.com/api/SaveBulkPolicyEnquiry'
    let headers = new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    // Construct HttpRequest without modifying URL
    const request = new HttpRequest<any>('POST', ApiUrl, data, {
      headers: headers,
      responseType: 'json' // Optional: Specify the expected response type
    });

    return this.httpClient.request(request).pipe(
      map((res: any) => res)
    );
  }

  sendPostRequest(url: string, headers: any, body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this.httpClient.post(url, body, httpOptions);
  }
}
