# BusinessTripReimbursementCalculationApp

## Deploy up-to-date version

The up-to-date version of app is on the [DEPLOY](https://businesstripreimbursementcalc.web.app) site.

## About
This pplication has 2 views (end user + administrator) with different capabilities:
For the end user:
-	Button to create a new reimbursement claim
o	Field to input the trip date
o	Possibility to add multiple receipts from a dropdown list to claim refund (for example: taxi, hotel, plane ticket, train)
o	Possibility to claim for a daily allowance:
	Input a number of days or time range of trip thanks to which it is possible to calculate reimbursement
	A checkbox is available to disable on specific days
o	Possibility to claim for reimbursement of car usage by driven distance:
	Input a distance which results in an amount to reimburse
o	Output field with total reimbursement amount
(Sum of all receipts, daily allowance and/or car mileage)
 
For the administrator:
o	Field to input rates for daily allowance and mileage
	Initially configure 15$/day for the daily allowance
	Initially configure 0.3 $/km for the car mileage
o	Possibility to edit the list of available receipts from the drop down list
o	Possibility to define reimbursement limits for single calculation result (per receipt type, total reimbursement, or distance)

## Add your environments file
Into ./environments add your environment.ts file with your firebase API key like:
export const environment = {
	production: false,
	firebaseAPIKey: "YOUR_FIREBASE_API_KEY",
};

## Manual

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
