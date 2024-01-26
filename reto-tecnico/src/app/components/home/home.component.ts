import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  products: any[] = [];
  consultaRealizada = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //ajuste unicamente el idioma de la tabla a español
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/es-CO.json',
    }
    };
  }

  ngOnDestroy(): void {
    // Desvincula el DataTables cuando el componente se destruye
    this.dtTrigger.unsubscribe();
  }

  consultarDatos(): void {
    this.dataService.getData().subscribe(data => {
      this.products = data;
      console.log('Datos cargados:', this.products);
      this.consultaRealizada = true; // Oculta el botón después de hacer clic
      this.dtTrigger.next(data); // Actualiza el DataTables
    });
  }
}
