import { Component, OnInit,ViewChild } from '@angular/core';
import { TableReferenceService } from 'src/app/services/table-reference.service';
import { Country } from 'src/app/model/country.model';
//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm }   from '@angular/forms';
import {Observable} from 'rxjs';
import { CountryComponent } from 'src/app/components/country/country.component';

@Component({
  selector: 'app-table-reference',
  templateUrl: './table-reference.component.html',
  styleUrls: ['./table-reference.component.css']
})
export class TableReferenceComponent implements OnInit {
  public countries;
  public editCountry: Country;
  public delCountry: Country;

  constructor(private tableReferenceService:TableReferenceService) { }

  ngOnInit(): void {
    //this.getCountries();
  }

  //product component

}
