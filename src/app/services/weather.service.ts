import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_KEY = '62ab7928b8dfae9b7a12dbad00398c62'

  constructor(private http: HttpClient) { }

}
