import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})

export class CheckSampleComponent implements OnInit,
                                             AfterContentChecked,
                                             DoCheck,
                                             AfterContentInit,
                                             AfterViewInit,
                                             AfterViewChecked,
                                             OnDestroy
  {

  quantidade: number = 0;


  constructor() { }

  adicionar(){
    this.quantidade += 1;

  }

  decrementar(){
    this.quantidade -= 1;
  }

  //checked -> content -> view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
    //throw new Error('ngAfterViewChecked');
  }

  //quando o primeiro conteúdo é iniciado
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    //throw new Error('ngAfterViewInit');
  }

  //após alguma alteração verifica o conteúdo
  ngAfterContentInit(): void {
    console.log("gAfterContentInit")
    //throw new Error('gAfterContentInit');
  }

  //após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
    //throw new Error('AfterContentChecked');
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend!")
    //throw new Error('Method not implemented.');
  }

}
