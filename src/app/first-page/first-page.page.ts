import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})
export class FirstPagePage implements OnInit {
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  inputValue: string | undefined;
  status: string = '';
  selectedOption: string | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {}

  goToSecondPage() {
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.checkbox1 = params['checkbox1'];
      this.checkbox2 = params['checkbox2'];
      this.checkbox3 = params['checkbox3'];
      this.inputValue = params['inputValue'];
      this.selectedOption = params['selectedOption'];
    });
    console.log(this.inputValue);
  }
}
