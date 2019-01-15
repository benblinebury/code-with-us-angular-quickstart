import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  customers: Customer[] = [
    {
      id: 1,
      name: 'Ben',
      address: {
        street: '10 Maple Road',
        city: 'Centerton',
        state: 'NJ',
        region: 'Northeast'
      }
    },
    {
      id: 2,
      name: 'Pierre Pasmal',
      address: {
        street: '456 Rue de Main',
        city: 'Toronto',
        state: 'ON',
        region: 'North'
      }
    },
    {
      id: 3,
      name: 'Margarita Nadie',
      address: {
        street: '789 Calle Principal',
        city: 'San Antonio',
        state: 'TX',
        region: 'South'
      }
    },
    {
      id: 4,
      name: 'Katie O\'Leary',
      address: {
        street: '137 DeKoven Street',
        city: 'Chicago',
        state: 'IL',
        region: 'Midwest'
      }
    },
    {
      id: 5,
      name: 'Paul Bearry',
      address: {
        street: '28 Elm Street',
        city: 'Los Angeles',
        state: 'CA',
        region: 'Southwest'
      }
    },
    {
      id: 6,
      name: 'Donald Glover',
      address: {
        street: '36 Chambers Ave',
        city: 'Atlanta',
        state: 'GA',
        region: 'Dirty South'
      }
    },
  ];

  customer: Customer;

  hideAddress = false;

  regions = ['North', 'South', 'East', 'West', 'Northeast', 'Midwest', 'Southwest', 'Dirty South'];
}
