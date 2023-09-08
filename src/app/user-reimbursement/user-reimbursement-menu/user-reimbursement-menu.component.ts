import { Component } from "@angular/core";
import { faCoffee, faHouse, faPlus, faPrint, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/auth/auth.service";

@Component({
	selector: "app-user-reimbursement-menu",
	templateUrl: "./user-reimbursement-menu.component.html",
	styleUrls: ["./user-reimbursement-menu.component.css"],
})
export class UserReimbursementMenuComponent {
	constructor(private authService: AuthService) {}
	faHouse = faHouse;
	faPlus = faPlus;
	faPrint = faPrint;
	faRightToBracket = faRightToBracket;

	logout() {
		this.authService.logout();
	}
}
