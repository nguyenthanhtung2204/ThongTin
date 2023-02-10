import { AfterViewInit, Component } from '@angular/core';
import { Inventor } from '../common/inventor';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  invetors: Inventor[]=[
    {id:1, first:'Nguyễn', last:'Thanh Tùng', year:2001, passed:2300},
    {id:2, first:'Phạm', last:'Ngọc Nam', year:2001, passed:2300},
    {id:3, first:'Lê', last:'Ba', year:2001, passed:2300},
    //Khai báo cái inventor
  ]
  ngAfterViewInit(): void {
    this.render(this.show);
  }
  show(innerHTML:string){ //==> Cho phép hiển thị thông tin được truyền vào
    let item = document.querySelector('#list'); //=> Tìm kiếm id với thành phần là #list ở trên template

    if(item){
      item.innerHTML = innerHTML; // => thay đổi nội dung của innerHTML
    }
  }
  render(callback:(date:string)=>any){
    let innerHTML = this.invetors.map(item=>{
      return `
        <tr>
          <td>${item.id}</td>
          <td>${item.first}</td>
          <td>${item.last}</td>
          <td>${item.year}</td>
          <td>${item.passed}</td>
        </tr>
      `;
    }).join('');
    callback(innerHTML);
  }
}


//=> Locallhost => HeaderComponent = > AfterViewinit => ngAfterViewinit gọi render = > gọi thực hiện phương thức map => map sẽ chuyển đổi mỗi phần tử thành 1 chuỗi html = > john để nối các phần tử vào mới nhau để tạo ra danh sách các hàng trên bảng => gọi callback => gọi phương thức show để hiện thị 
