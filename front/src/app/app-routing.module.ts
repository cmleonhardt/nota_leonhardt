import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangePasswordFormComponent, CreateAccountFormComponent, LoginFormComponent, ResetPasswordFormComponent} from './shared/components';
import {AuthGuardService} from './shared/services';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {DxDataGridModule, DxFormModule, DxSelectBoxModule} from 'devextreme-angular';
import {TestePageComponent} from "./pages/teste-page/teste-page.component";
import { SelectBoxCidadeEstadoModule} from "./shared/components/select-box-cidade-estado/select-box-cidade-estado.component";
import {ClientesComponent} from "./pages/clientes/clientes.component";
import {ProdutosComponent} from "./pages/produtos/produtos.component";
import {NotasComponent} from "./pages/notas/notas.component";

const routes: Routes = [
  {
    path: 'notas',
    component: NotasComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'teste',
    component: TestePageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash: true}),
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule,
    SelectBoxCidadeEstadoModule,

  ],

  providers: [AuthGuardService],

  exports: [RouterModule],

  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    TestePageComponent
  ]
})
export class AppRoutingModule { }
