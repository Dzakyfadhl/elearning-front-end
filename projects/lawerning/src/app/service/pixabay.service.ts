import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Constants from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class PixabayService {
  constructor(private http: HttpClient) {}

  getPhotos(category: string): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(`${Constants.PIXABAY_URL}`, {
      headers: headers,
      params: {
        key: '18572370-ca70c40fd7e56714d2cb27928',
        q: category,
      },
    });
  }
}
