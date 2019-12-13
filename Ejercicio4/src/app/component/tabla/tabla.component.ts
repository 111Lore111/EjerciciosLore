import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: String[] = ['id','name','lastname','username','pws'];
  dataSource;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data =>{
        this.dataSource = data;
      }
    )
  }
}
