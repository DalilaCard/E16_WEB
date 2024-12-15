import { Component } from '@angular/core';
import { DadoComponent } from "../dado/dado.component";

@Component({
  selector: 'app-tirardados',
  imports: [DadoComponent],
  templateUrl: './tirardados.component.html',
  styleUrl: './tirardados.component.css'
})
export class TirardadosComponent {
  n1:number=0
  n2:number=0
  n3:number=0
  resultado:string="Tira para Jugar"

  tirar(){
    this.n1=Math.floor(Math.random()*5)+1
    this.n2=Math.floor(Math.random()*5)+1
    this.n3=Math.floor(Math.random()*5)+1
    if(this.n1==this.n2 && this.n3==this.n1){
      this.resultado="Felicidades Ganaste!!!"
    }else{
      
      this.resultado="Perdiste. Vuelve a intentars"
    }

        
  }

}
