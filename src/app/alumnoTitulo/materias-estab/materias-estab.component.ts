import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoAnaliticoService } from 'src/app/_services/alumno-analitico.service';
import { GroupBy, MateriasElement, MATERIAS_DATA } from './materiasData';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-materias-estab',
  templateUrl: './materias-estab.component.html',
  styleUrls: ['./materias-estab.component.scss']
})
export class MateriasEstabComponent implements OnInit, AfterViewInit {

  loading = false;
  @Input() idAlumnoEstabOferta: number;

  displayedColumns: string[] =
    ['orden', 'materia', 'nota', 'condicion', 'mes', 'anio', 'establecimiento'];
  public dataSource = new MatTableDataSource<MateriasElement | GroupBy>(MATERIAS_DATA);

  allData!: (MateriasElement | GroupBy)[];
  filters: string[] = [];

  constructor(private alumnoAnaliticoService: AlumnoAnaliticoService) { }

  ngOnInit(): void {
    this.loading = true;
    this.alumnoAnaliticoService.recuperarMaterias(this.idAlumnoEstabOferta).subscribe({
      next: (v) => {
        const dataAgrupada = this.groupBy(v, 'nombreAnio');
        console.log(dataAgrupada);
        const ds = this.producirDatasource(dataAgrupada);
        this.dataSource = new MatTableDataSource<MateriasElement | GroupBy>(ds);
        this.allData = this.dataSource.data;
        this.loading = false;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  ngAfterViewInit(): void {
  }

  private groupBy(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  private producirDatasource(data) {
    const d = [];
    Object.keys(data).forEach(key => {
      d.push({ nombreAnio: key, isGroupBy: true, expanded: false });
      const values = data[key];
      values.forEach(element => {
        d.push(element);
      });
    });
    return d;
  }

  isGroup(index: any, item: any): boolean {
    return item.isGroupBy;
  }

  groupHeaderClick(row: any): void {
    row.expanded = !row.expanded;
    if (row.expanded) {
      this.sacarFiltro(row.nombreAnio);
    } else {
      this.nuevoFiltro(row.nombreAnio);
    }
    this.dataSource.data = this.aplicarFiltros();
  }

  aplicarFiltros(): (MateriasElement | GroupBy)[] {
    let elemFiltrado = this.allData;
    this.filters.forEach(element => {
      elemFiltrado = elemFiltrado.filter(e => {
        return (e.isGroupBy || e.nombreAnio !== element);
      });
    });
    return elemFiltrado;
  }

  nuevoFiltro(filtro: string): void {
    if (!this.filters.includes(filtro)) {
      this.filters.push(filtro);
    }
  }

  sacarFiltro(filtro: string): void {
    if (this.filters.includes(filtro)) {
      this.filters.splice(this.filters.indexOf(filtro), 1);

    }
  }

  sortData(sort: Sort) {
    console.log(sort);
  }
}




