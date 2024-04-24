import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  constructor( private countriesService: CountriesService) {}

  public countries: Country[] = [];

  public urlString: string = '/capital/';

  searchByCapital( urlCriterionSearch: string, term:string ):void {
    this.countriesService.search( urlCriterionSearch, term )
    .subscribe( countries => {
      this.countries = countries;
    } );
  }

}
