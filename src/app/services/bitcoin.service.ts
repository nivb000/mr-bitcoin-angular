import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  getRate(): Observable<Object> {
    return this.http.get(`https://blockchain.info/ticker`).pipe(map(res => {
      return res
    }))
  }
  getRatesKeys<T>(): Observable<Array<string>> {
    return this.http.get(`https://blockchain.info/ticker`).pipe(map(res => {
      return Object.keys(res);
    }))
  }

}
