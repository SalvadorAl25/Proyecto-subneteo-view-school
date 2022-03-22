import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad-i',
  templateUrl: './unidad-i.component.html',
  styles: []
})
export class UnidadIComponent implements OnInit {
  public Collapsed1 = false;
  public Collapsed2 = true;
  public Collapsed3 = true;
  public CollapsedWAN = false;
  public CollapsedMAN = true;
  public CollapsedLAN = true;
  constructor() {
  }

  ngOnInit() {
  }

}
