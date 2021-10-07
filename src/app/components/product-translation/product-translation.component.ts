import { Component, OnInit } from '@angular/core';
import { TableReferenceService } from '../../services/table-reference.service';
import { Product_translation } from 'src/app/model/productTranslation.model';
import { ProductComponent } from 'src/app/components/product/product.component';
import { NgForm } from '@angular/forms';
import {Product} from 'src/app/model/product.model';
import {World_language} from 'src/app/model/World_language.model';


@Component({
  selector: 'app-product-translation',
  templateUrl: './product-translation.component.html',
  styleUrls: ['./product-translation.component.css']
})
export class ProductTranslationComponent implements OnInit {

public product_translations;
public product_trans=[];
public products;
public languages;
public editPT: Product_translation;
public delPT: Product_translation;
public selectedProduct: Product;
public selectedLangue: World_language;


  constructor(private tableReferenceService: TableReferenceService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getLanguages();
  }


  public getProductTranslations(): void {
    this.tableReferenceService.getProductTranslations().subscribe(data=>{
      this.product_translations = data;
      console.log(this.product_translations);
      this.product_translations._embedded.product_translations.forEach(pt=>{
        this.tableReferenceService.getProdTranslated(pt).subscribe(data=>{
          this.product_trans.push(data);
        }, error=>{
          console.log("erreur");
        });
        })
        console.log(this.product_trans);
        //console.log("okkk");
    }, error=>{
      console.log("erreur de chargement");
    });
  }

  public addPT(form: NgForm): void {
    document.getElementById("add-PT-form").click();
    this.tableReferenceService.addPt(form.value).subscribe(data=>{
      this.getProductTranslations();
      form.reset();
    }, error=>{
      console.log("erreur le produit n'a pas été ajouté");
    });
  }

  public updatePT(form: NgForm): void{
   document.getElementById('edit-PT-form').click();
    this.tableReferenceService.updatePT(form.value).
    subscribe(
    data=>{
            this.getProductTranslations();
          },
    error=>{
             console.log("erreur de chargement") ;
             }
    );
  }

  public  deletePT(pt_id: number): void{
        document.getElementById('delete-PT-form').click();
           this.tableReferenceService.deletePT(pt_id).subscribe(
           response=>{
             this.getProductTranslations();
           },
           (error)=>{
             console.log("erreur chargement");
           });
  }

  public onGetClickedPT(pt: Product_translation){
          this.editPT = pt;
          //this.selectedProduct=this.editPT.product;
          console.log(this.editPT);
          console.log(this.editPT.product.product_name);
          this.delPT = pt;
         // this.selectedLangue=this.delPT.world_language;
          console.log(this.delPT);
  }

   /* public createPT(form: NgForm): void {
   // this.getProducts();
       // this.getLanguages();
        document.getElementById("add-PT-form").click();
        console.log(form.value);
        this.tableReferenceService.createPT(form.value).subscribe(data=>{
          this.getProductTranslations();

          form.reset();
        }, error=>{
          console.log("erreur le produit n'a pas été ajouté");
        });
      }*/

  public getProducts(): void{
    this.tableReferenceService.getProducts().subscribe(
      data=>{
        this.products = data;
        console.log(this.products);
      }, error=>{
        console.log("erreur de chargement");
      });
  }

   public getLanguages(): void{
      this.tableReferenceService.getLanguages().subscribe(
        data=>{
          this.languages = data;
          console.log(this.languages);
        }, error=>{
          console.log("erreur de chargement");
        });
   }

   public onSearchPT(key: string): void{
       const results: Product_translation[] =[];
       for(const c of this.product_trans){
         if(c.product.product_name.toLowerCase().indexOf(key.toLowerCase()) != -1 || c.translation.toLowerCase().indexOf(key.toLowerCase()) != -1){
             results.push(c);
         }
       }
       this.product_trans = results;
       if(results.length === 0 || !key){
         this.getProductTranslations();
       }
   }


}
