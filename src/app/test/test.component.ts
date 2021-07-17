import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  test(name: string, pw: string) {
    console.log(name, pw)
    this.http.post("http://localhost:4999/v1/test", {name: name, pwhash: pw, email: "email"})
        .subscribe(x => console.log(x))
  }
 


  ngOnInit(): void {
  }

}
