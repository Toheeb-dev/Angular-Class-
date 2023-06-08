import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() text:string = "Toheeb";
  constructor(){
    console.log('constructor called');
    
    console.log(this.text);
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    
  }
ngAfterViewInit(): void {
  console.log('ngAfterViewInit called');
  
}

  ngOnInit(): void {
    console.log('ngOnInit called');
    // console.log(this.text + 'ngOnInit');

  }
  ngDoCheck(): void {
    console.log('ngDocheck is called');
    
  }
  ngOnChanges(change: SimpleChanges){
    console.log('Onchanges was initiate')
    console.log(change);
    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was called');
    
  }

  message = "Hello from  Demo component class!, how are you";

  sayHello(){
    console.log(this.message);
    
  }

}
