import { Component, OnInit } from '@angular/core';
import { Std } from '../model/std';
import { StdService } from '../std.service';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.css']
})
export class StdListComponent implements OnInit {

  stds:Std[] = [];

  constructor(private stdservice:StdService) { }

  ngOnInit(): void {
    this.getStds();
  }

  getStds(){
    this.stdservice.getStds().subscribe(
      result => {
        this.stds = result
        console.log(result)
      },error => {
        console.log(error);
      }
    )
  }

  delete(id:number){
    if(confirm("Are You Want delete Student Data ?")){
      this.stdservice.deleteStd(id).subscribe(
        result => {
          console.log(result);
          if(result){
            this.stds = this.stds.filter(item => item.id != id);
          }
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
