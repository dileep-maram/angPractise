import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  constructor(private http:HttpClient) { }
  aboutFormDataPost(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any) => {
      return res;
    }))
  }

}
