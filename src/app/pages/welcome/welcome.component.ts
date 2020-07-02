import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFComponent } from '@delon/form';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('sf') sf: SFComponent;
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
        maxLength: 20,
        ui: {
          errors: {
            required: 'aaaa',
          },
        },
      },
      name: {
        type: 'string',
        title: 'Name',
        minLength: 3,
      },
    },
    require: ['email'],
  };

  constructor() {}

  ngOnInit() {}

  submit(value: any) {}
}
