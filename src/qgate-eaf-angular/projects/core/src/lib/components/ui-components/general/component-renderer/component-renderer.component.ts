import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase } from 'projects/core/src/lib/dtos/QGate/Eaf/Domain/Components/General/ComponentBase.model';
import { TextBox } from 'projects/core/src/lib/dtos/QGate/Eaf/Domain/Components/Editors/TextBox.model';
import { ComponentType } from 'projects/core/src/lib/dtos/QGate/Eaf/Domain/Components/General/ComponentType.enum';

@Component({
  selector: 'eaf-component-renderer',
  templateUrl: './component-renderer.component.html',
  styleUrls: ['./component-renderer.component.css']
})
export class ComponentRendererComponent implements OnInit {
  @Input() model: any;
  @Input() component: ComponentBase;
  textBox: TextBox;
  constructor() { }

  ngOnInit() {
    if (this.component.Type === ComponentType.TextBox) {
      this.textBox = <TextBox> this.model;
    }
  }

}
