import { Injectable } from '@angular/core';
import { StocksResponse } from '../models/stocks-response';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocksUrl = '/api/stocks';

  constructor(private http: HttpClient) { }
  
  getStocks(): Observable<StocksResponse> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.append('Accept', 'application/json');
    return this.http.get<StocksResponse>(this.stocksUrl, {headers: headers});    
  }
}
