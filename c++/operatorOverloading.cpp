// operator overloading
// friend function
// Insertion operator overloading
// rational number
// constructor name should be same as class name 
#include <iostream>
using namespace std;
// class complex {
// public:
// int real;
// int img;
// complex add(complex c){
//     complex temp;
//     temp.real=real+c.real;
//     temp.img=img+c.img;
//     return temp;
// }

// };

// int main(){
//     complex c1,c2,c3;
//     c1.real=5;c1.img=3;
//     c2.real=10;c2.img=5;
//     c3=c1.add(c2);cout<<c3.real<<"+"<<c3.img<<"i"<<endl;
// }
// ----------------------------------------------------
// Friend function-->
// class complex{
//     private:
//     int real;
//     int img;
//     public:
//     complex(int r=0,int i=0){
//         real =r;
//         img=i;
//     }
//     void display(){
//         cout<<real<<"+i"<<img;
//     }
//     friend complex operator +(complex c1,complex c2);
// };
// complex operator + (complex c1 , complex c2){
//     complex temp;
//     temp.real=c1.real +c2.real;
//     temp.img = c1.img +c2.img;
//     return temp;
// }
// int main(){
//     complex c1(5,3),c2(6,5),c3;
//     c3=c1+c2;
//     c3.display();
// }
// ---------------------------------
// Insertion operator overloading-->
// class complex{
//     private:
//     int real;
//     int img;
//     public:
//     complex(int r=0,int i=0){
//         real=r;
//         img =i;
//     }
//     friend void ostream & operator<<(ostream &out,complex &c);
//     // void display(){
//     //     cout<<real<<"+i"<<img<<endl;
//     // }
// };
// void operator <<(ostream &out,complex &c){
//     out<<c.real<<"+i"<<c.img;<<endl;
// }
// int main(){
//     complex c(10,6);
//     // c.display();
//     cout<<c;
//     operator<<(cout,c);
    
// }
// -------------------------------------------------
// rational number-->
class rational{
    private:
    int p;
    int q;
    public:
    rational(){
        p=1;
        q=1;
    }
    rational(int p, int q){
        this->p=p;
        this->q=q;
    }
    rational(rational &r){
        this->p=r.p;
        this->q=r.q;
    }
    int getP(){return p;}
    int getQ(){return q;}
    void setP(int p){
        this->p=p;
    }
    void setQ(int q){
        this->q=q;
    }
    rational operator+(rational r){
        rational t;
        t.p=this->p*r.q+this->q*r.p;
        t.q=this->q*r.q;
        return t;
    }
    friend ostream & operator<<(ostream &os,rational &r);
};
ostream & operator<<(ostream &os,rational &r){
    os<<r.p<<"/"<<r.q;
    return os;
}
int main(){
    rational r1(3,2),r2(2,8),r3;
    r3=r1+r2;
    cout<<r1<<" "<<r2<<" -->"<<r3<<endl;
}