#include<iostream>
using namespace std;
// class A{
//     public:
//     int x;
//     void show(){
//         cout<<x<<endl;
//     }
// };
// class derive:public A{
//     public:
//     int y;
//     void display(){
//         cout<<x<<" "<<y<<endl;
//     }
// };
// int main(){
//     derive dd;
//     dd.x=10;
//     dd.y=20;
//     dd.show();
//     dd.display();
// }
// -------------------------------------------
// class Rectangle{
//     private:
//     int length;
//     int breadth;
//     public:
//     Rectangle();
//     Rectangle(int l,int b);
//     Rectangle(Rectangle &r);
//     int getLen(){return length;}
//     int getBre(){return breadth;}
//     void setLen(int l);
//     void setBre(int b);
//     int area();
// };
// class Cuboid:public Rectangle{
//     private:
//     int height;
//     public:
//     Cuboid(int h,int l,int b){
//         this->height = h;
//         setLen(l);
//         setBre(b);
//     }
//     int getHgt(){return height;}
//     void SetHgt(int h){height =h;}
//     int volume(){return getLen()*getBre()*height; }
// };
// int main(){
//     Cuboid cc(7,2,4);
//     // cc.setLen(2);
//     // cc.setBre(3);
//     cout<<"Volume is "<<cc.volume()<<endl;
// }



// Rectangle::Rectangle(){
//     length=1;
//     breadth=1;
// }
// Rectangle::Rectangle(int l,int b){
//     length=l;
//     breadth=b;
// }
// Rectangle::Rectangle(Rectangle &r){
//     length=r.length;
//     breadth=r.breadth;
// }
// void Rectangle::setLen(int l){
//     this->length=l;
// }
// void Rectangle::setBre(int b){
//     this->breadth=b;
// }
// int Rectangle::area(){
//     return length*breadth;
// }
// --------------------------------------------



// constructor in inheritance-->

class Base{
    public:
    Base(){cout<<"Non-param of base"<<endl;}
    Base(int x){cout<<"Param of base "<<x<<endl;}
};
class Derive:public Base{
    public:
    Derive(){cout<<"Non-param of derive"<<endl;}
    Derive(int y){cout<<"Param of derived "<<y<<endl;}
    Derive(int x,int y):Base(x){cout<<"Param of derived "<<y<<endl;}
};
int main(){
    Derive d(10,5);
}
// when constructor of child class is called(default or other), first it will call DEFAULT contructor of parent class
// to access other constructor of parent class , use Derive(int x,int y):Base(x) like this.
