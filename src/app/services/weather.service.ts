import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  API_URL = 'https://api.openweathermap.org'
  API_KEY = '62ab7928b8dfae9b7a12dbad00398c62'

  constructor(private http: HttpClient) { }

  getCityWeather(city: string) {
    return this.http.get(`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${city}&appid=${this.API_KEY}&units=metric`)
  }

  getWeather(lat: number, lon: number) {
    return this.http.get(`${this.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`)
  }

  getCurrentWeather(city: string) {
    return this.http.get(`${this.API_URL}/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${this.API_KEY}`)
  }

  setGeolocationToLocalStorage(lat: number, lon: number) {
    const currentGeolocation = {
      lat: lat,
      lon: lon,
      name: 'Current place',
      date: new Date()
    }

    localStorage.setItem('savedLocation', JSON.stringify(currentGeolocation));
  }

  getGeolocationFromLocalStorage() {
    let currentGeolocation = {}

    if (localStorage.getItem('savedLocation')) {
      currentGeolocation = JSON.parse(localStorage.getItem('savedLocation') ?? 'null')
    }

    return currentGeolocation;
  }

}
