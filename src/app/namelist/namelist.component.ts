import { Component, OnInit } from '@angular/core';
import { nameType } from './nametype';

@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.css']
})
export class NamelistComponent implements OnInit {
  
  constructor(){

  }
  
  ngOnInit(): void {
    
  }
  selectedName:any;
  names: nameType[] = [
    {
      id: 1,
      realName: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      }},
      {
        id: 2,
        realName: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          }},
          {
            id: 3,
            realName: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
              street: "Douglas Extension",
              city: "McKenziehaven",
              zipcode: "59590-4157",
            }
            },
            {
              id: 4,
              realName: "Patricia Lebsack",
              username: "Karianne",
              email: "Julianne.OConner@kory.org",
              address: {
                street: "Hoeger Mall",
                city: "South Elvis",
                zipcode: "53919-4257",
              }
              }

  ]
}
