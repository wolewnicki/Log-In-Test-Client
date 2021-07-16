import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Url } from "url";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private http: HttpClient) {}

    post<T>(url: string, body: T) {
        return this.http.post(url, body)
    }
}