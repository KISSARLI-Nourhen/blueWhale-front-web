import { Component, OnInit } from '@angular/core';
import { TableReferenceService } from 'src/app/services/table-reference.service';
import { Product }  from "src/app/model/product.model";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products;
  public editProduct;
  public delProduct;

  constructor(private tableReferenceService: TableReferenceService) { }

  ngOnInit(): void {
  }

  public getProducts(): void{
  this.tableReferenceService.getProducts().subscribe(
    data=>{
      this.products = data;
      console.log(this.products);
    }, error=>{
      console.log("erreur de chargement");
    });
  }

  public addProduct(f: NgForm): void{
    document.getElementById("add-product-form").click();
    this.tableReferenceService.addProduct(f.value).subscribe(
    data=>{
      this.getProducts();
      f.reset();
    }, error=>{
      console.log("erreur de chargement");
    }
    );
  }

  public updateProduct(product: Product){
    document.getElementById("update-product-form").click();
    this.tableReferenceService.updateProduct(product).subscribe(data=>{
      this.getProducts();
    }, error=>{
      console.log("Erreur de chargement");
    });
  }

  public getProductClicked(product: Product){
    this.editProduct = product;
    console.log(this.editProduct);
     console.log(this.editProduct.product_name);
    this.delProduct = product;
  }


  public  deleteProduct(productId: number): void{
    document.getElementById('delete-product-form').click();
     this.tableReferenceService.deleteProduct(productId).subscribe(
     data=>{
       this.getProducts();
     },
     (error)=>{
       console.log("erreur chargement");
     });
  }

  public onSearchProduct(key: string): void{
    const results: Product[] =[];
    for(const c of this.products){
      if(c.product_name.toLowerCase().indexOf(key.toLowerCase()) != -1){
          results.push(c);
      }
    }
    this.products = results;
    if(results.length === 0 || !key){
      this.getProducts();
  }


}
}
