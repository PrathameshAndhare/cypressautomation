// enums are user-defined data types
// #include <iostream>
// using namespace std;

// enum dept {cse,it,ece};
// int main(){
//     dept d;
//     d=cse;
//     cout<<d;

//     return 0;
// }
// here it automatically takes starting value - cse as 0 and go on as 1,2,3, ...
// we can in midway also assign values like it=5, then it will take ece as 6 .


// TYPEDEF ----> they are used to make data more readable 

//  instead of writing ---> int m1,m2,r1,r2,.... we use typedef as below:

#include <iostream>
using namespace std;

typedef int marks;
typedef int rollNo;


int main(){
    marks m1,m2,m3,m4;
    rolllNo r1,r2,r3;

    m1=60;
    r2=12;

    cout<<m1<<endl<<r2<<endl;

    return 0;
}