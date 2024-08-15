import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weatherData: any;
  error: string = '';

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getWeather(lat, lon);
        },
        error => {
          this.error = 'Невозможно определить местоположение';
        }
      );
    } else {
      this.error = 'Геолокация не поддерживается вашим браузером';
    }
  }



  getWeather(lat: number, lon: number) {
    // this.weatherService.getWeather(lat, lon).subscribe(
    //   data => this.weatherData = data,
    //   error => this.error = 'Не удалось получить данные о погоде'
    // );

    console.log('lat', lat, 'lon', lon)

  }
}
