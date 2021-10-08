import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { TableReferenceService } from 'src/app/services/table-reference.service';
import { Country } from 'src/app/model/country.model';
//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    public countries;
    public editCountry: Country;
    public delCountry: Country;

  constructor(private tableReferenceService:TableReferenceService) { }

  ngOnInit(): void {

  }

  //country component
      public getCountries(): void{
        this.tableReferenceService.getCountries().subscribe(data=>{
            this.countries=data;
             console.log(this.countries);
            }, err=>{
            console.log("erreur de chargement")
            })
      }

      public  addCountry(addForm: NgForm): void{
        document.getElementById('add-country-form').click();
        this.tableReferenceService.addCountry(addForm.value).subscribe(
        response=>{
          this.getCountries();
          console.log(addForm);
          console.log(addForm.value);
          addForm.reset();
        },
        (error)=>{
          console.log("erreur chargement");
          addForm.reset();
        })
      }

      public updateCountry(country: Country) {
         document.getElementById('update-country-form').click();
           this.tableReferenceService.updateCountry(country).subscribe(response=>{
            this.getCountries();
           }, err=>{
            console.log("erreur chargement");
           })
      }

     public  deleteCountry(countryId: number): void{
      document.getElementById('delete-country-form').click();
         this.tableReferenceService.deleteCountry(countryId).subscribe(
         response=>{
           this.getCountries();
         },
         (error)=>{
           console.log("erreur chargement");
         });
        }

    //methode for get country thant we want to update and delete
    public getCountryClicked(country: Country){
        this.editCountry = country;
        this.delCountry = country;
    }

    public onSearchCountry(key: string): void{
          const results: Country[] =[];
          for(const c of this.countries){
            if(c.country_name.toLowerCase().indexOf(key.toLowerCase()) != -1 || c.iso2.toLowerCase().indexOf(key.toLowerCase()) != -1
            || c.iso3.toLowerCase().indexOf(key.toLowerCase()) != -1){
                results.push(c);
            }
          }
          this.countries = results;
          if(results.length === 0 || !key){
            this.getCountries();
          }
    }


}
