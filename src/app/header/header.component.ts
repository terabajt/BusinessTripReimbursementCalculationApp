import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	constructor(private authService: AuthService) {}
	date: string = new Date().toLocaleDateString("pl-PL");
	userName: any;
	amIAdmin = undefined;
	amIUndefined = true;

	ngOnInit(): void {
		this.authService.user.subscribe(item => {
			this.userName = item?.email;
		});
		this.authService?.amIAdmin.subscribe(item => {
			this.amIAdmin = item;
		});
	}
}
