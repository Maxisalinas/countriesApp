import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1';
    

    constructor(private http: HttpClient) { }
    
    search( criterionSearch:string, term: string ): Observable<Country[]> {

        return this.http.get<Country[]>(`${ this.apiUrl }${ criterionSearch }${ term }`).pipe(
            catchError( () => of([]) )
        );
     
    }
    
}