import { Component } from '@angular/core';
import { EXAMPLES, SOLUTIONPOINTS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  solutionPoints: string[] = SOLUTIONPOINTS;

  // Regular expression to match ISO 8601 date strings
  regexIsoDate = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;


  // Check if a string is an ISO date
  isIsoDate = (value:string) => typeof value === 'string' && this.regexIsoDate.test(value);

  // Convert ISO date strings to JavaScript Date objects
  toJavascriptDate = (obj: any): any => {
    // your code here
  };
  

  ngOnInit() {
    console.log(this.toJavascriptDate(EXAMPLES.example1));
  }
}
