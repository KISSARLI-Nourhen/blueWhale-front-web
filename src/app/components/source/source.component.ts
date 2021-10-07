import { Component, OnInit } from '@angular/core';
import { TableReferenceService } from 'src/app/services/table-reference.service';
import { Source } from "src/app/model/source.model";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  public sources: Source[];
  public editSource: Source;
  public delSource: Source;

  constructor(private tableReferenceService: TableReferenceService) { }

  ngOnInit(): void {
  }

  public getSources(): void{
    this.tableReferenceService.getSources().subscribe(data=>{
      this.sources = data;
      console.log(this.sources);
    }, error=>{
      console.log("erreur de chargement");
    });
  }

  public getClickedSource(source: Source): void{
    this.editSource = source;
    this.delSource = source;
  }

  public addSource(form: NgForm): void{
    document.getElementById("add-source-modal").click();
    this.tableReferenceService.addSource(form.value).subscribe(data=>{
      this.getSources();
      form.reset();
    }, error=>{
      console.log("erreur de chargement");
    });
  }

  public updateSource(source: Source): void {
    document.getElementById("update-source-modal").click();
    this.tableReferenceService.updateSource(source).subscribe(data=>{
      this.getSources();

    }, error=>{
      console.log("erreur de chargement");
    });
  }
  public deleteSource(source_id: number): void {
   document.getElementById("delete-source-modal").click();
    this.tableReferenceService.deleteSource(source_id).subscribe(data=>{
      this.getSources();
    }, error=>{
       console.log("erreur de chargement");
    });
  }


  public onSearchSource(key: string): void{
    const results: Source[] =[];
    for(const c of this.sources){
      if(c.source_name.toLowerCase().indexOf(key.toLowerCase()) != -1 ){
          results.push(c);
      }
    }
    this.sources = results;
    if(results.length === 0 || !key){
      this.getSources();
    }
  }
}
