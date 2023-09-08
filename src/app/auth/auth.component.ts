import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnDestroy {
	isLoginMode = true;
	isLoading = false;
	error: string = null;
	@ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
	private closeSub$: Subscription;
	private authSub$: Subscription;
	constructor(
		private authService: AuthService,
		private router: Router,
		private componentFactoryResolver: ComponentFactoryResolver
	) {}
	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}
	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
		let authObs: Observable<AuthResponseData>;

		this.isLoading = true;
		if (this.isLoginMode) {
			authObs = this.authService.login(email, password);
		} else {
			authObs = this.authService.signup(email, password);
		}
		this.authSub$ = authObs.subscribe(
			resData => {
				console.log(resData);
				this.isLoading = false;
				this.router.navigate(["/user"]);
			},
			errorMessage => {
				console.log("Błąd: " + errorMessage);
				this.error = errorMessage;
				this.showErrorAlert(errorMessage);
				this.isLoading = false;
			}
		);
		form.reset();
	}
	onHandleError() {
		this.error = null;
	}
	private showErrorAlert(message: string) {
		// const alertComp = new AlertComponent();
		const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
		const hostViewContainerRef = this.alertHost.viewContainerRef;
		hostViewContainerRef.clear();

		const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
		componentRef.instance.message = message;
		this.closeSub$ = componentRef.instance.close.subscribe(() => {
			this.closeSub$.unsubscribe();
			hostViewContainerRef.clear();
		});
	}
	ngOnDestroy(): void {
		this.authSub$.unsubscribe();
	}
}
