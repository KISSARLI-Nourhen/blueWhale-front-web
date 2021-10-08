import { Component, OnInit,ViewChild } from '@angular/core';
import { TableReferenceService } from 'src/app/services/table-reference.service';
import { Country } from 'src/app/model/country.model';
import { Product } from 'src/app/model/product.model';
import { Source } from 'src/app/model/source.model';
//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';
import { CountryComponent } from 'src/app/components/country/country.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { SourceComponent } from 'src/app/components/source/source.component';
import { ProductTranslationComponent } from 'src/app/components/product-translation/product-translation.component';
import { CountryTranslationComponent } from 'src/app/components/country-translation/country-translation.component';


@Component({
  selector: 'app-table-reference',
  templateUrl: './table-reference.component.html',
  styleUrls: ['./table-reference.component.css']
})
export class TableReferenceComponent implements OnInit {


@ViewChild(CountryComponent) countryChild: CountryComponent;
@ViewChild(ProductComponent) productChild: ProductComponent;
@ViewChild(SourceComponent) sourceChild: SourceComponent;
@ViewChild(ProductTranslationComponent) productTranslationChild: ProductTranslationComponent;
@ViewChild(CountryTranslationComponent) countryTranslationChild: CountryTranslationComponent;

   showCountry: boolean=true;
   showProduct: boolean=true;
   showSource: boolean=true;
   showPT: boolean=true;
   showChild5: boolean=true;

  constructor(private tableReferenceService:TableReferenceService) { }

  ngOnInit(): void {

  }

  public reset(){
    this.showCountry=true;
    this.showProduct=true;
    this.showSource=true;
    this.showPT=true;
    this.showChild5=true;
  }

  public getChild(event): void{
    var idButton = event.target.attributes.id.nodeValue;
         if(idButton === "btnCountry"){
             this.getCountriesChild();
         }
          else if (idButton === "btnProduct"){
             this.getProductsChild();
         }
         else if(idButton === "btnSource"){
              this.getSourcesChild();
         }
         else if(idButton === "btnProductTrans"){
               this.getProductTranslationChild();
        } else if(idButton === "btnCountryTrans"){
                this.getCountryTranslationChild();
        }
  }


  public getCountriesChild(): void{
     this.showCountry =true;
     this.showProduct =false;
     this.showSource =false;
     this.showPT =false;
     this.showCT = false
     this.countryChild.getCountries();

  }

  public getProductsChild(): void{
     this.showProduct = true;
     this.showCountry = false;
     this.showSource = false;
     this.showPT =false;
     this.showCT = false
     this.productChild.getProducts();

  }

  public getSourcesChild(): void {
      this.showCountry = false;
      this.showProduct = false;
      this.showSource = true;
      this.showPT =false;
      this.showCT = false
     this.sourceChild.getSources();
  }

  public getProductTranslationChild(): void {
      this.showCountry = false;
      this.showProduct = false;
      this.showSource = false;
      this.showPT = true;
      this.showCT = false
    this.productTranslationChild.getProductTranslations();
  }

  public getCountryTranslationChild(): void {
        this.showCountry = false;
        this.showProduct = false;
        this.showSource = false;
        this.showPT = false;
        this.showCT = true
      this.countryTranslationChild.getCountryTranslations();
  }

}
