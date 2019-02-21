import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() otraLogica = false;
  idFromParams: number;
  myForm: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idFromParams = params['id'];
    });

    this.myForm = this.formBuilder.group({
      email: ['', [Validators.maxLength(10), IncluyeVocal]],
      password: [''],
      condicional: ['soy el condicional']
    });

    if (this.otraLogica) {
      this.myForm.get('email').setValidators([Validators.maxLength(10)]);
      this.myForm.get('email').updateValueAndValidity();

      this.myForm.get('condicional').disable();
    }
  }

  submitForm() {
    console.log(this.myForm.value);
  }
}

function IncluyeVocal(control: AbstractControl) {
  if (!tieneVocal(control.value)) {
    return { incluyeVocal: true };
  } else {
    return null;
  }
}

function tieneVocal(ourString: string) {
  if (/[aeiou]/.exec(ourString)) {
    return true;
  }

  return false;
}
