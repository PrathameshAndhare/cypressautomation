// Pointer to object
// constructor
// scope resolution operator


#include<iostream>
using namespace std;

// class Rectangle
// {
//     public:
//     int length;
//     int breadth;
//     int area(){
//         return length*breadth;
//     }
//     int perimeter(){
//         return 2*(length + breadth);
//     }
// };
// int main(){
//     // Rectangle r1;
//     // r1.length=10;
//     // r1.breadth=20;
//     // cout<<r1.area()<<" "<<r1.perimeter()<<endl;
//     // ---------------------------
//     // Pointer to rectangle-->
//     Rectangle *p;
//     Rectangle r;
//     p=&r;
//     r.length=14;
//     r.breadth=30;
//     cout<<r.area()<<endl;
//     p->length=10;
//     p->breadth=51;
//     cout<<p->area()<<endl;
// }
// -------------------------------------
// class rectangle {
//     private:
//     int length;
//     int breadth;
//     public:
//     int setLen(int l){
//         if (l>0){
//             length=l;
//         }
//         else{
//             length=0;
//         }
//     }
//     int setBre(int b){
//         if (b>0){
//             breadth=b;
//         }
//         else{
//             breadth=0;
//         }
//     }

//     int getLen(){
//         return length;
//     }
//     int getBre(){
//         return breadth;
//     }
// };
// int main(){
//     rectangle r;
//     r.setLen(10);
//     r.setBre(20);
//     cout<<r.getLen();
// }
// ---------------------------------------------------
// constructor-->(default , parameter , noon-parameter, copy)
// class Rectangle {
//     private:
//     int length;
//     int breadth;
//     public:
//     Rectangle(int l=1,int b=1)
//     {
//         setLen(l);
//         setBre(b);
//     }

//     void setLen(int l)
//     {
//         if(l>0)
//         {
//             length=l;
//         }
//         else{
//             length=1;
//         }
//     }
//     void setBre(int b)
//     {
//         if(b>0)
//         {
//             breadth=b;
//         }
//         else{
//             breadth=1;
//         }
//     }
//     int getLen(){
//         return length;
//     }
//     int getBre(){
//         return breadth;
//     }

//     int area(){
//         return length*breadth;
//     }
// };
// int main(){
//     Rectangle r1(10,5);
//     Rectangle r2(r1);
//     cout<<r2.area()<<endl;
// }
// --------------------------------------------
// scope rresolution operator-->
// class Rectangle {
//     private:
//     int length;
//     int breadth;
//     public:
//     Rectangle();
//     Rectangle(int l=0,int b=0);
//     Rectangle(Rectangle &r);
//     int getLen(){
//         return length;
//     }
//     int getBre(){
//         return breadth;
//     }
//     void setLen(l){
//         length=l;
//     }
//     void setBre(b){
//         breadth=b;
//     }

//     int area(){
//         return length*breadth;
//     }
//     int perimeter();
// };
// int Rectangle :: perimeter(){// This is scope resolution 
//     return 2*(length+breadth);
// }
// int main(){
//     Rectangle r1(10,3);
//     cout<<r1.area()<<endl;

// }
// ------------------------------------
// 


// Rectangle r; -----> to create in stack
//  Rectangle *p=new Rectangle(); ---> to create in heap
// difference between struct and class is that in class it takes private as default and in struct it takes as public as default
