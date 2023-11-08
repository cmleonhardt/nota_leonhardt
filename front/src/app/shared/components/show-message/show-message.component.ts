import {Component, Input, NgModule} from '@angular/core';
import {DxToastModule} from "devextreme-angular";

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent {

  @Input()
  visivel: boolean = false;

  @Input()
  type = 'info';
  // info = poup-up azul informação com background azul
  // warning = poup-up para alerta com background amarelo
  // error = poup-up para erro com background vermelho
  // sucess = poup-up para confirmar operação com background verde

  @Input()
  message: string;
  // Informar mensagem ou variavel com mensagem para ser mostrada



}
@NgModule({
  imports: [
    DxToastModule

  ],
  declarations: [ ShowMessageComponent],
  exports: [ShowMessageComponent]
})
export class ShowMessageModule{ }
