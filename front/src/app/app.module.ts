import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SideNavOuterToolbarModule, SingleCardModule} from './layouts';
import {
  ChangePasswordFormModule,
  CreateAccountFormModule,
  FooterModule,
  LoginFormModule,
  ResetPasswordFormModule
} from './shared/components';
import {AppInfoService, AuthService, ScreenService} from './shared/services';
import {UnauthenticatedContentModule} from './unauthenticated-content';
import {CidadeEstadoService} from "./shared/services/cidade-estado.service";
import {DxDataGridModule, DxDateBoxModule, DxSelectBoxModule, DxTextBoxModule, DxToastModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {
  SelectBoxCidadeEstadoModule
} from "./shared/components/select-box-cidade-estado/select-box-cidade-estado.component";
import {ClientesComponent} from './pages/clientes/clientes.component';
import {ProdutosComponent} from './pages/produtos/produtos.component';
import {NotasComponent} from './pages/notas/notas.component';
import {ClienteService} from "./shared/services/cliente.service";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {ProdutoService} from "./shared/services/produto.service";
import { OrderPipe } from './shared/components/order.pipe';
import {ShowMessageComponent, ShowMessageModule} from './shared/components/show-message/show-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProdutosComponent,
    NotasComponent,
    OrderPipe,

  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    DxSelectBoxModule,
    HttpClientModule,
    AppRoutingModule,
    SelectBoxCidadeEstadoModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxToastModule,
    ShowMessageModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    CidadeEstadoService,
    ClienteService,
    ProdutoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
