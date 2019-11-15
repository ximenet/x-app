import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';

@Component({
  selector: 'app-cont1',
  templateUrl: './cont1.component.html',
  styleUrls: ['./cont1.component.css']
})
export class Cont1Component implements OnInit {

  constructor(
    public pruebaservice: PruebaService
  ) { }

  ngOnInit(
  ) {
    this.pruebaservice.llamame().subscribe(
      (data) => {
      console.log(data);
      }
    );
  }

}
