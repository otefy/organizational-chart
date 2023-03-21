import { Component, OnInit } from '@angular/core';
import { INode } from 'ngx-org-chart/lib/node';
import { User } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-organization-tree',
  templateUrl: './organization-tree.component.html',
  styleUrls: ['./organization-tree.component.scss']
})
export class OrganizationTreeComponent implements OnInit {
  users!: User[];
  finalTree: INode[] = [];
  constructor(private usersService: UsersService) { 
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res=> {
      this.users = res;
      this.generateTree();
    });
    
  }

  generateTree() {
    let parentLevel: string = '';
    let userMap: any = {};
    let node: any;

    for (let i = 0; i < this.users.length; i += 1) {
      userMap[this.users[i].code] = i;
      this.users[i].childs = [];
    }
    for (let i = 0; i < this.users.length; i += 1) {
      node = this.users[i];
      parentLevel = this.getParentCode(node.code);
      if (parentLevel !== '') {
        this.users[userMap[parentLevel]].childs?.push(node);
      } else {
        this.finalTree.push(node);
      }
    }
  }

  getParentCode(code: string) {
    let parentLevel: any = code.split('.');
    parentLevel.pop();
    parentLevel = parentLevel.join('.');
    return parentLevel;
  }
  test(event: any) {
    console.log(event);
    
  }

}
