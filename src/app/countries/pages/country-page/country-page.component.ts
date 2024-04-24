import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap, map } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor ( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
  ) {}

  public urlString: string = '/alpha/';

  public country?: Country;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.search( this.urlString, id)),
      map( countries => countries.length > 0 ? countries[0]: null) 
    )
      .subscribe( country => {

        if (!country) {
          return this.router.navigateByUrl('');
        }
        
        return this.country = country;

          });
      }
  }
