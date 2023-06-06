import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {

constructor(
private apiCallsService: ApiCallsService
){

}

ngOnInit(): void {
this.apiCallsService.getUsers().subscribe(data=>{
  console.log(data);

})
}


}
