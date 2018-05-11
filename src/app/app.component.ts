import { CreditCard } from './creditCard';
import { CustomValidationService } from './custom-validation.service';
import { Component, OnInit, Renderer2, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  creditCard = new CreditCard('', '', '', '', '');
  @ViewChild('card') card: ElementRef;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(private renderer: Renderer2) {
  }

  f_ccvFocus(event) {
    this.renderer.addClass(this.card.nativeElement, 'show-back');
  }

  f_ccvBlur(event) {
    this.renderer.removeClass(this.card.nativeElement, 'show-back');
  }

}

