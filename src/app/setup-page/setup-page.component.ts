import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

  size;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.size = this.userService.size;
  }

  onChange() {
    this.userService.setSize(+this.size)
  }

}
