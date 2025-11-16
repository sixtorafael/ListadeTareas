import { Component, signal } from '@angular/core';
import { TarjetaLibroComponent } from './components/tarjeta-libro/tarjeta-libro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TarjetaLibroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('trabajo');
}
