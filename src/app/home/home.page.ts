import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirstPagePage } from '../first-page/first-page.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  inputValue: string | undefined;
  status: string = '';
  selectedOption: string | undefined;

  constructor(private http: HttpClient, private navController: NavController) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data: any) => {
        this.checkbox1 = data.completed;
        this.inputValue = data.title;
      });

    this.http
      .get('https://jsonplaceholder.typicode.com/todos/2')
      .subscribe((data: any) => {
        this.checkbox2 = data.completed;
      });

    this.http
      .get('https://jsonplaceholder.typicode.com/todos/3')
      .subscribe((data: any) => {
        this.checkbox3 = data.completed;
      });
  }

  showStatus() {
    this.status = `Checkbox 1: ${this.checkbox1}, Checkbox 2: ${this.checkbox2}, Checkbox 3: ${this.checkbox3}, Input field: ${this.inputValue},Radio options: ${this.selectedOption}`;
  }

  saveStatus() {
    const body = {
      checkbox1: this.checkbox1,
      checkbox2: this.checkbox2,
      checkbox3: this.checkbox3,
      inputValue: this.inputValue,
      selectedOption: this.selectedOption,
    };
    console.log(body, 'yeyyy');
    this.navController.navigateForward('/first-page', { queryParams: body });

  }
  goToNextPage() {
    this.navController.navigateForward('/first-page');
  }
}
