import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  nombre: string;
  completada: boolean;
  fecha: Date;
}

@Component({
  selector: 'app-tarjeta-libro',
  standalone: true,
  templateUrl: './tarjeta-libro.html',
  styleUrls: ['./tarjeta-libro.css'],
  imports: [CommonModule, FormsModule]
})
export class TarjetaLibroComponent {
  tareas: Tarea[] = [
    { nombre: 'Leer capítulo 1', completada: false, fecha: new Date('2025-11-15') },
    { nombre: 'Tomar apuntes', completada: true, fecha: new Date('2025-11-10') },
    { nombre: 'Revisar resumen', completada: false, fecha: new Date('2025-11-20') }
  ];

  nuevaTarea: string = '';
  nuevaFecha: string = '';
  tareaEditando: Tarea | null = null;
  mostrarAdvertencia: boolean = false;

  agregarTarea() {
    const texto = this.nuevaTarea.trim();
    const fecha = new Date(this.nuevaFecha);
    
    if (texto === '' || isNaN(fecha.getTime())) {
      this.mostrarAdvertencia = true;
      return;
    }

    this.mostrarAdvertencia = false;

    if (this.tareaEditando) {
      this.tareaEditando.nombre = texto;
      this.tareaEditando.fecha = fecha;
      this.tareaEditando = null;
    } else {
      this.tareas.push({ nombre: texto, completada: false, fecha });
    }
    this.nuevaTarea = '';
    this.nuevaFecha = '';
  }

  toggleCompletada(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }

  esProxima(tarea: Tarea): string | null {
    const hoy = new Date();
    const proxima = new Date(hoy);
    proxima.setDate(hoy.getDate() + 3);
    if (tarea.fecha >= hoy && tarea.fecha <= proxima) {
      return '¡Esta tarea está por vencer!';
    }
    return null;
  }

  editarTarea(tarea: Tarea) {
    this.tareaEditando = tarea;
    this.nuevaTarea = tarea.nombre;
    this.nuevaFecha = tarea.fecha.toISOString().split('T')[0];
  }

  eliminarTarea(tarea: Tarea) {
    this.tareas = this.tareas.filter(t => t !== tarea);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const advertenciaElement = document.getElementById('advertencia');

    if (this.mostrarAdvertencia && advertenciaElement && !advertenciaElement.contains(target)) {
      this.mostrarAdvertencia = false; // Ocultar el mensaje al hacer clic fuera
    }
  }
}
