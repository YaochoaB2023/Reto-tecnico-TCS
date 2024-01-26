import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  products: any[] = [];
  consultaRealizada = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.consultarDatos();
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
      // this.dtTrigger.next(); // Actualiza el DataTables
    });
  }
}

