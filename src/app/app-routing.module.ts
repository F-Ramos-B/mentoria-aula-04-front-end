import { DetalharPessoaComponent } from './components/detalhar-pessoa/detalhar-pessoa.component';
import { ListarPessoasComponent } from './components/listar-pessoas/listar-pessoas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListarPessoasComponent },
  { path: 'detalhar-pessoa/:id', component: DetalharPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
