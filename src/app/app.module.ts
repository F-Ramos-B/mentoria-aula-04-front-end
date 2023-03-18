import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalharPessoaComponent } from './components/detalhar-pessoa/detalhar-pessoa.component';
import { HeaderFooterColetivoComponent } from './components/header-footer-coletivo/header-footer-coletivo.component';
import { ListarPessoasComponent } from './components/listar-pessoas/listar-pessoas.component';
import { PessoaService } from './services/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoasComponent,
    DetalharPessoaComponent,
    HeaderFooterColetivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
