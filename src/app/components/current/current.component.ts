import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { interval, startWith, switchMap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-current',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './current.component.html',
  styleUrl: './current.component.scss'
})
export class CurrentComponent implements OnInit {

  weatherService = inject(WeatherService)
  private location: any;
  public weatherData: any;

  ngOnInit(): void {
    this.location = this.weatherService.getGeolocationFromLocalStorage()

    if (this.location) {
      interval(10000)
        .pipe(
          startWith(0),
          switchMap(() => this.weatherService.getCurrentWeather(this.location.lat, this.location.lon))
        )
        .subscribe((data) => {
          this.weatherData = data;
          console.log('data', data);
        });
    }

  }

}
