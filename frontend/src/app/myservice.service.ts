import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { of, tap, Observable } from 'rxjs';
import { Produit } from '../../shared/model/produit';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private httpClient: HttpClient) { }

  

  count: number = 0;
  public getCatalogue() : Observable<Produit[]> {
    return this.httpClient
      .get<Produit[]>(environment.catalog)
      .pipe(tap((v) => console.log(v)));
  }
  
  /*
  public getCatalogue() : Observable<Array<{ title: string, price: number }>> {
    return of([
      {title: "linux", price: 9.50},
      {title: "angular", price: 8.50},
      {title: "java", price: 6.50},
      {title: "windows", price: 8.00},
      {title: "docker", price: 7.50}
    ]);
  }
  */
  public getClient(): any {
    return [
      { name: 'francois', firstName: 'dupont'},
      { name: 'marc', firstName: 'freyeux'},
    ];
  }

  public postClient(firstName : string, name : string, adress : string, cp : number, city : string, country : string, phone : number, email : string, civility : string, login : string, password : string): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    console.log("PostClient from service");
    return this.httpClient
      .post<any>(environment.signup,{firstName, name, adress, cp, city, country, phone, email, civility, login, password},httpOptions)
      //.pipe(tap((v) => console.log(v)));  
  }

  public postLogin(login : string, password : string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    };
    
    return this.httpClient
      .post<any>(environment.login,{login, password},httpOptions)
      //.pipe(tap((v) => console.log(v)));  
  }

  public getCount(): number {
    this.count++;
    return this.count;
  }


}

