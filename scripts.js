
function PhepToan(){
    let numberX=document.getElementById("soX").value;
    let numberY=document.getElementById("soY").value;
    document.getElementById("kq").innerHTML=numberX+" + "+ numberY+ " = "+ (numberX+numberY) +"<br>" +
    numberX+" - "+ numberY+ " = "+ (numberX-numberY) +"<br>" +
    numberX+" * "+ numberY+ " = "+ (numberX*numberY) +"<br>" +
    numberX+" / "+ numberY+ " = "+ (numberX/numberY) +"<br>" +
    numberX+" % "+ numberY+ " = "+ (numberX%numberY) +"<br>" 
}


let buttonArray=document.getElementById("buttonArray");
buttonArray.addEventListener('click',function(){
    let numberN=document.getElementById("soN").value;
    let array=new Array();
     for (let i=0;i<numberN;i++)
        array.push(Math.round((Math.random()*10)));


//Sum mảng
    let z=array.reduce((a,b)=>a+b,0);
//sort mảng
array.sort((a,b)=>a-b);
//search mảng
    let target=0;
    let n=parseInt(prompt("Nhập vào đây số cần tìm trong mảng"))
    for (let i=0;i<array.length;i++){
        if(array[i]==n){
            target=i+1;
            break;
        }
        else{
            target="Không có phần tử trong mảng";
        }
    }
//xuất ra nội dung của thẻ p
    document.getElementById("kq2").innerHTML=
        "Mảng được tạo ngẫu nhiên: "+array+"<br>" +
        "Đảo ngược mảng: "+array.reverse()+"<br>" +
        "Sắp xếp mảng: "+array.sort((a,b)=>a-b)+"<br>" +
        "Tổng các phần tử trong mảng:"+z+"<br>" +
        "Position in array: "+target+"<br>" 
});


//Lập trình hướng đối tượng
//có thể tại 1 đối tượng bằng cách này
var student1={
    name:"Tô Quý Phước",
    age:24,
    gender:"male",
    dateOfBirth:"16-11-2001",
    showinfo:function(){
        return this.name + this.age + this.gender +this.dateOfBirth;
    }
};

console.log(student1.showinfo());
//constuctor
function Student(name,age,gender,DOB){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.dateOfBirth=DOB;
    this.showinfo=function(){
        return `${this.name} ${this.age} ${this.gender} ${this.dateOfBirth}`;
    };
};
const s1= new Student("Phước",25,"male","16-11-2000");
console.log(s1.showinfo());
console.log(s1);
var s2={
    score:[9,7,5,7,8]
};
s2.dtb=5.8;
console.log(s1.name+s1.gender);
console.log(typeof s1);

let keys=Object.keys(s1);
console.log(keys);// xuất ra các thuộc tính 

let values=Object.values(s1);
console.log(values);// xuất ra giá trị

let entries=Object.entries(s1);
console.log(entries);// xuất ra thuộc tính lẫn giá trị

let doiTuongGop={};
Object.assign(doiTuongGop,s1,s2);//gộp 2 đối tượng lại để sao chép qua cho doiTuongGop
console.log(doiTuongGop);

console.log(student1.hasOwnProperty("name")); //Kiểm tra xem có thuộc tính name trong class ko

Object.freeze(s2); // đống băng đối tượng, ko thể thêm, sửa, xóa các thuộc tính
s2.name="anh Tuấn";

let s3={
    dtb:8.3,
    diem:2.0
};
Object.seal(s3);//seal làm cho đối tượng ko thể thêm và xóa, nhưng có thể sửa
s3.dtb=6.7; 
console.log(s3);
//---------------------------------------------------------------------------------------------------------------------------------------

//Mảng
let a=new Array("Phước","Hoàng Anh","Gia đình nhỏ 2 ta");
a.pop(); // bo phan tu cuoi mang
a.push("hehe"); // them phan tu cuoi mang
a.shift(); //bo phan tu dau mang
a.unshift("Tô Quý Phước"); // them phan tu dau mang (co the them nhieu)
console.log(a);
console.log(a.reverse());
console.log(a.sort());

let b= new Array(1,4,2,77,33,12);
console.log(b.sort((a,b)=>a-b));

//Nối các phần tử mảng thành chuỗi
let c= new Array("Haha","Hihi","Hoho");
let d=c.join(",");
console.log(d);

let m=b.slice(1,6); // giong substring cua String //ko làm thay đổi mảng //đc nhập vào số âm (đi từ cuối lên đầu)
console.log(m);

let index=1; //chỉ định vị trí bắt đầu thay đổi mảng
let number=2;// số phần từ muốn xóa từ vi trí index
let replace=9;// giá trị tham số có thể có hoặc không, để thay thế vào vị trí index sau khi xóa số lượng num phần tử (thêm số 4 vào mảng)
let n=b.splice(index,number,replace);
console.log(n);//phần tử bị thay đổi trong mảng b
console.log(b);//thay đổi luôn mảng b

let f=b.concat([1,2],[6],8,9) // nối mảng,(ko thay đổi mảng cũ) có thể nối mảng b với 1 mảng hoặc 1 thành phần trong mảng bất kì
console.log(f);
//vòng lặp forEach
b.forEach(function(value,index){
    console.log("phần tử thứ "+(index+1)+"trong mảng là:"+value);}
);
//map trả về mảng mới (ko thay đổi mảng cũ) sau khi xử lý phần tử trong mảng
let uppercaseA=a.map(function(arr){
    return arr.toUpperCase();
});
console.log(uppercaseA);
//filter trả về mảng mới (ko thay đổi mảng cũ) sau khi lọc các phần tử trong mảng theo điều kiện
let evenNumber=f.filter(function(even){
    return even%2==0;
});
console.log(evenNumber);
console.log(b);
//Chuỗi (String)--------------------------------------------------------
let chuoi="Anh Tô Quý Phước Đẹp Trai Nhất Thế Gian";
console.log(chuoi);
//substring(start,end)
console.log(chuoi.substring(4,5));
//slice(start,end)
console.log(chuoi.slice(0,4));
console.log(chuoi.slice(-5,-2));
//split
let chuoiSplit= chuoi.split(" ");
console.log(chuoiSplit);
//replace
let chuoiReplace=chuoi.replace("Đẹp Trai","Lãng Tử");
console.log(chuoiReplace);
//Bài tập chuỗi: Tách chuỗi thành 2 chuỗi , 1 chuỗi chữ ra chữ, 1 chuỗi số ra số 
//VD: anhphuoc12345 -> str1: anhphuoc, str2: 12345
// let inputString=prompt("Nhập vào 1 chuỗi gồm chữ và số");
function tachChuoi(chuoi){
    let charString="";
    let digiString="";
    for(let i=0;i<chuoi.length;i++){
        if(isNaN(chuoi[i]))
            charString+=chuoi[i];
        else
            digiString+=chuoi[i];
    }
    return {charString,digiString};
}
let outputString=tachChuoi("Phuoc123456");
console.log(outputString.charString);
console.log(outputString.digiString);

//tính sum trong mảng xài reduce
let sumArray=new Array(1,5,2,9,3,8);
//sum là giá trị cộng dồn, i là giá trị đang chạy đến trong mảng
let sum6=sumArray.reduce((sum,i)=>{return sum+i},0);

console.log(sum6);
console.log("-------------------------------------------Class----------------------------------------------------");
class NhanVien{
    constructor(fullName,dob,salary) {
        this.fullName=fullName;
        this.dob=dob;
        this.salary=salary;
    }

    showinfo(){
        return `${this.fullName} ${this.dob} ${this.salary}`;
    }
}

class NhanVienVeSinh extends NhanVien{
    constructor (fullName,dob,salary,caLam){
        super(fullName,dob,salary);
        this.caLam=caLam;
    }

    tinhLuong(){
        return this.salary*this.caLam;
    }
}
const nv1=new NhanVien("Tô Quý Phước","16-11-2001","1000$");
console.log(nv1);
console.log(nv1.showinfo());
console.log(Object.getPrototypeOf(nv1));

const nvVS2=new NhanVienVeSinh("Tô Kim Đào","18-07-2004",500,180);
console.log(nvVS2);
console.log(nvVS2.showinfo());
console.log(nvVS2.tinhLuong());
//thêm phương thức cho class bằng prototype
NhanVien.prototype.calcYear=function(currentYear){
    return currentYear-Number(this.dob.substring(6,this.dob.length));
};
console.log(nv1.calcYear(2025));
//----------------Static---------------
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    static tinhDienTich(bankinh){
        return Math.PI*Math.pow(bankinh,2);
    }
}
console.log(Circle.tinhDienTich(2));
//-------------tính đóng gói----------------
class Wallet{
    #maPin;
    #soDu;
    #moKhoaMaPin=false;
    constructor(bankName,pin){
        this.#maPin=pin;
        this.bankName=bankName;
        this.#soDu=0;//số dư bằng 0 lúc tạo tài khoản
    }

    #validatePin(pin){
        return this.#maPin===pin;
    }

    enterPin(pin){
        if(this.#validatePin(pin)){
            this.#moKhoaMaPin=true;
            return ("Mở khóa mã pin thành công");
        }
        else
            return ("Sai mã pin");
    }

    deposit(value){
        if(this.#moKhoaMaPin){
            this.#soDu+=value;
            return ("Gửi tiền thành công");
        }
        else
            return("Kiểm tra lại mã pin");
    }

    withdraw(value){
        if(this.#moKhoaMaPin===true){
            if (value>this.#soDu)
                return ("Không đủ tiền");
            else{
                this.#soDu-=value;
                return ("Rút tiền thành công, số dư của bạn hiện tại là: "+this.#soDu);
            }
        }
        else
            return ("Kiểm tra lại mã pin");
    }
    get soDU(){
         if(this.#moKhoaMaPin===true){
            return this.#soDu;
         }
         else{
            return ("Kiểm tra lại mã pin");
         }
    }
    get maPin(){
        if(this.#moKhoaMaPin===true){
            return this.#maPin;
         }
         else{
            return ("Kiểm tra lại mã pin");
         }
    }
    set maPin(value){
        if(this.#moKhoaMaPin===true){
            this.#maPin=value;
            return ("thay đổi mã pin thành công, mã pin hiện tại của bạn là: "+this.#maPin);
         }
         else{
            return ("Kiểm tra lại mã pin");
         }
        
    }
}


const tk1=new Wallet("VietinBank","0701");

let inputPin=prompt("Mời nhập vào mã pin");
tk1.enterPin(inputPin);

console.log(tk1.deposit(100000));
console.log(tk1.withdraw(500));
console.log("Số dự hiện tại sau khi rút là "+ tk1.soDU);

tk1.maPin="1611";
console.log(tk1.soDU);

console.log("Mã pin hiện tại là "+tk1.maPin);