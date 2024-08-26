import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-body-layout',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.scss'
})
export class BodyLayoutComponent implements OnInit {

  @Input() currentLocation: any


  ngOnInit(): void {
    console.log('currentLocation', this.currentLocation)
  }

}
