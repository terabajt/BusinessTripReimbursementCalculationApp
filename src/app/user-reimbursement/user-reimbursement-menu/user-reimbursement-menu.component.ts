import { Component } from "@angular/core";
import { faCoffee, faHouse, faPlus, faPrint, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-user-reimbursement-menu",
	templateUrl: "./user-reimbursement-menu.component.html",
	styleUrls: ["./user-reimbursement-menu.component.css"],
})
export class UserReimbursementMenuComponent {
	faHouse = faHouse;
	faPlus = faPlus;
	faPrint = faPrint;
	faRightToBracket = faRightToBracket;
}
