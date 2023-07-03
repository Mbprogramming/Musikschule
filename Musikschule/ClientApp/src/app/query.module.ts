import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { MusikschuleQueryComponent } from './musikschule-query/musikschule-query.component';

@NgModule({
  declarations: [
    MusikschuleQueryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class QueryModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(MusikschuleQueryComponent, {
      injector: this.injector,
    });
    customElements.define('musikschule-query', el);
  }
}
