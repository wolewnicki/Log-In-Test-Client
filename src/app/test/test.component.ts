import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient) { }

  test() {
    console.log("ran test")
    return this.http.get("http://localhost:4999/v1/test")
        .subscribe( x => console.log(x))
  }
 


  ngOnInit(): void {
  }

}
