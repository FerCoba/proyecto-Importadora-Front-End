import { Component } from '@angular/core';
import { collectExternalReferences } from '@angular/compiler';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Importadora-Web';
}