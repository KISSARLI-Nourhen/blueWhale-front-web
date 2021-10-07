import { Component, OnInit } from '@angular/core';
import { ProductionService } from 'src/app/services/production.service';
import { NgForm } from '@angular/forms';
import { Faostat } from 'src/app/model/Faostat.model';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  //public faostats;
  public projectionFaostat =[];
    faostats: Faostat[] = [];
    currentFaostat?: Faostat;
    currentIndex = -1;
    title = '';

    page = 1;
    count = 0;
    pageSize = 20;
    pageSizes = [20, 30, 50, 100];


  constructor(private productionService : ProductionService) { }

  ngOnInit(): void {
    console.log("faostat");
    this.getFaostat();
    this.retrieveFaostats();
  }

  /*public getFaostat() : void{
    this.productionService.getFaostat().subscribe(data=>{
      this.faostats.push(data) ;
      this.faostats._embedded.faostats.forEach(faostat =>{
        this.productionService.getProjectionFaostat(faostat).subscribe(data=>{
          this.projectionFaostat.push(data);
        }, error=>{
          console.log("erreur projection faostat")
        });
      })
      console.log("projection Faostat");
      console.log(this.projectionFaostat);
    }, error =>{
      console.log("erreur de chargement");
    });
  }*/

  public getFaostat(): void {
    this.productionService.getFaostat().subscribe(data=>{
    this.faostats.push(data);
    console.log(this.faostats);
    }, error =>{
      console.log("erreur de chargement");
    });
  }


  public getRequestParams(page: number, pageSize: number): any {
      // tslint:disable-next-line:prefer-const
      let params: any = {};

      if (page) {
        params[`page`] = page - 1;
      }

      if (pageSize) {
        params[`size`] = pageSize;
      }
      return params;
  }

 public retrieveFaostats(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.productionService.getAll(params)
    .subscribe(
      response => {
        const { faostats, totalItems } = response;
        this.faostats = faostats;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
    });
 }

  public handlePageChange(event: number): void {
      this.page = event;
      this.retrieveFaostats();
  }

   public handlePageSizeChange(event: any): void {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveFaostats();
   }
  public refreshList(): void {
    this.retrieveFaostats();
    this.currentFaostat = undefined;
    this.currentIndex = -1;
  }


}
