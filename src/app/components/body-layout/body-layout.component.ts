import { Component, Input, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CurrentComponent } from "../current/current.component";

@Component({
  selector: 'app-body-layout',
  standalone: true,
  imports: [MatTabsModule, CurrentComponent],
  templateUrl: './body-layout.component.html',
  styleUrl: './body-layout.component.scss'
})
export class BodyLayoutComponent implements OnInit {

  ngOnInit(): void {
  }

}
