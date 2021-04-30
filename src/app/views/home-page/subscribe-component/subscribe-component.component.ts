import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscribe-component',
  templateUrl: './subscribe-component.component.html',
  styleUrls: ['./subscribe-component.component.scss']
})
export class SubscribeComponentComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success('DailyBlinkz', 'Welcome to DailyBlinkz', {timeOut: 3000});
  }

}
