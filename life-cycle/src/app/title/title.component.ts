import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome: string = ''

  constructor() {
    console.log(`Construtor ${this.nome}`)
   }
  ngOnChanges(): void {
    console.log(`OnChenges ${this.nome}`);
  }

  ngOnInit(): void {
    this.nome = this.nome + "X";
    console.log(`OnInit ${this.nome}`);
    //this.nome = `Olá! ${this.nome}`
    //console.log("Olá! Sou o nascimento do Title Component")
    //throw new Error('Method not implemented.');
  }





}
