import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService 
{

  url: string = "http://localhost:3000/Product";
  urlcategory:string="http://localhost:3000/Product/?category=";

  constructor(private http : HttpClient) { }

  // getProduct(): Observable<any> 
  // {
  //   return this.http.get<any>(this.url);
  // }

  // getProduct()
  // {
  //   return this.http.get<any>("http://localhost:3000/Product")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  getProduct()
  {
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductByCategory(category:any):Observable<any>
  {
    return this.http.get<any>(this.urlcategory+{category})
  }
}
