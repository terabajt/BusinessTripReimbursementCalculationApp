import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserReimbursementComponent } from "./user-reimbursement.component";
import { UserReimbursementRoutingModule } from "./user-reimbursement-routing.module";
import { UserReimbursementMenuComponent } from "./user-reimbursement-menu/user-reimbursement-menu.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [UserReimbursementComponent, UserReimbursementMenuComponent],
	imports: [CommonModule, UserReimbursementRoutingModule, FontAwesomeModule],
})
export class UserReimbursementModule {}
