import { Component, OnInit } from '@angular/core';
import { InternsService } from '../interns.service';
import { Interns } from '../interns';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  constructor(private internService:InternsService) { }
  InternsTable: Interns[] | undefined;
  bool = false;

  

  ngOnInit()
  {
    this.internService.getInterns().
      subscribe((data:Interns[])=>{
      this.InternsTable = data;
      
      console.log(this.InternsTable);
      
    });
  }
  }


