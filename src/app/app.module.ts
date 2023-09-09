import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { LoggingService } from "./logging.service";

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, NgbModule, AppRoutingModule, HttpClientModule, SharedModule, NgbModule],
	providers: [LoggingService],
	bootstrap: [AppComponent],
})
export class AppModule {}
