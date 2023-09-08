import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
	declarations: [LoadingSpinnerComponent, AlertComponent, PlaceholderDirective],
	imports: [CommonModule],
	exports: [LoadingSpinnerComponent, PlaceholderDirective, AlertComponent],
})
export class SharedModule {}
