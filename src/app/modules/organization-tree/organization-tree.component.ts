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
  directionView: any = 'vertical';
  constructor(private usersService: UsersService) { 
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res=> {
      this.users = res.map(value=>({
        name: value.name,
        code: value.code,
        image: value.imagePath,
        title: value.code,
        childs: []
      }));
      this.generateTree();
    });
    
  }

  generateTree() {
    let parentCode: string = '';
    let userMap: any = {};
    let node: any;

    for (let i = 0; i < this.users.length; i += 1) {
      userMap[this.users[i].code] = i;
    }
    console.log(userMap);
    
    for (let i = 0; i < this.users.length; i += 1) {
      node = this.users[i];
      parentCode = this.getParentCode(node.code);
      if (parentCode !== '') {
        this.users[userMap[parentCode]].childs?.push(node);
      } else {
        this.finalTree.push(node);
        
      }
    }
  }

  getParentCode(code: string) {
    let parentCode: any = code.split('.');
    parentCode.pop();
    parentCode = parentCode.join('.');
    return parentCode;
  }
  switchDirection(viewType: string) {
    this.directionView = viewType;
  }

}
