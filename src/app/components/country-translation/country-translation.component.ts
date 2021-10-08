import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';
import { Country } from 'src/app/model/country.model';
import { Country_translation } from 'src/app/model/Country_translation.model';
import { TableReferenceService } from '../../services/table-reference.service';
import {World_language} from 'src/app/model/World_language.model';


@Component({
  selector: 'app-country-translation',
  templateUrl: './country-translation.component.html',
  styleUrls: ['./country-translation.component.css']
})
export class CountryTranslationComponent implements OnInit {

public country_translations;
public country_projection=[];
public countries;
public languages;
public editCT: Country_translation;
public delCT: Country_translation;
public selectedProduct: Country;
public selectedLangue: World_language;

  constructor(private tableReferenceService: TableReferenceService) { }

  ngOnInit(): void {
    this.getCountries();
    this.getLanguages();
  }

  public getCountryTranslations(): void {
      this.tableReferenceService.getCountryTranslations().subscribe(data=>{
        this.country_translations = data;
        console.log(this.country_translations);
        this.country_translations._embedded.country_translations.forEach(ct=>{
          this.tableReferenceService.getCountryProjection(ct).subscribe(data=>{
            this.country_projection.push(data);
          }, error=>{
            console.log("erreur");
          });
          })
          console.log(this.country_projection);
      }, error=>{
        console.log("erreur de chargement");
      });
  }

  public addCT(form: NgForm): void {
    document.getElementById("add-PT-form").click();
    this.tableReferenceService.addCountryTranslations(form.value).subscribe(data=>{
      this.getCountryTranslations();
      form.reset();
    }, error=>{
      console.log("erreur le produit n'a pas été ajouté");
    });
  }

  public updateCT(form: NgForm): void{
     document.getElementById('edit-PT-form').click();
      this.tableReferenceService.updateCountryTranslations(form.value).
      subscribe(
      data=>{
              this.getCountryTranslations();
            },
      error=>{
               console.log("erreur de chargement") ;
               }
      );
  }

  public  deleteCT(ct_id: number): void{
     document.getElementById('delete-PT-form').click();
     this.tableReferenceService.deleteCountryTranslations(ct_id).subscribe(
     response=>{
       this.getCountryTranslations();
     },
     (error)=>{
       console.log("erreur chargement");
     });
  }

  public onGetClickedCT(ct: Country_translation){
      this.editCT = ct;
      //this.selectedProduct=this.editPT.product;
      console.log(this.editCT);
      console.log(this.editCT.country.country_name);
      this.delCT = ct;
     // this.selectedLangue=this.delPT.world_language;
      console.log(this.delCT);
  }

  public getCountries(): void{
    this.tableReferenceService.getCountries().subscribe(
      data=>{
        this.countries = data;
        console.log("countries");
        console.log(this.countries);
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

 public onSearchCT(key: string): void{
       const results: Country_translation[] =[];
       for(const c of this.country_projection){
         if(c.translation.toLowerCase().indexOf(key.toLowerCase()) != -1 || c.country.country_name.toLowerCase().indexOf(key.toLowerCase()) != -1){
             results.push(c);
         }
       }
       this.country_projection = results;
       if(results.length === 0 || !key){
         this.getCountryTranslations();
       }
  }

}
