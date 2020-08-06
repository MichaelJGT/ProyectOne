import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { ListaComponent } from "./lista/lista.component";
import { DetallesComponent } from "./detalles/detalles.component";
import { FooterComponent } from "./footer/footer.component";
import { RegistroComponent } from "./registro/registro.component";
import { InicioComponent } from "./inicio/inicio.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { HeaderLoginComponent } from "./header-login/header-login.component";
import { CajaLoginComponent } from "./caja-login/caja-login.component";
import {
  NgReduxModule,
  NgRedux,
  DevToolsExtension,
} from "@angular-redux/store";
import { IappState, INITIAL_STATE, rootReducer } from "./store";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    ListaComponent,
    DetallesComponent,
    FooterComponent,
    RegistroComponent,
    InicioComponent,
    HeaderLoginComponent,
    CajaLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IappState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    let estadoInicial = INITIAL_STATE;
    if (devTools.isEnabled()) {
      ngRedux.configureStore(rootReducer, estadoInicial, [], enhancers);
    } else {
      estadoInicial = INITIAL_STATE;
      ngRedux.configureStore(rootReducer, estadoInicial, []);
    }
  }
}
