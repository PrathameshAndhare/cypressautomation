/* ways to declare strings-->
 char x='A';
 char s[10]="Hello";
 char s[]="Hello";
 char s[]=['H','e','l','l','o'];
 char *s="Hello";
*/
#include<iostream>
#include<cstring>
using namespace std;
int main(){
    // char s[10]="Hello";
    // int p[3]={2,4,5};
    // cout<<s<<endl;
    // cout<<p[2]<<endl;
    // -------------------------
    // char s[15];
    // cout<<"Enter you name";
    // cin.getline(s,15);
    // cout<<"Welcome "<<s<<endl;
    // ------------------------
    // string x;
    // cin>>x;
    // cout<<"Welcome"<<" "<<x;
    // ------------------------
    char x[50]="Hello World";
    cout<<strlen(x)<<endl;

    return 0;
}
// after 0 in char array, it will not print after that.
// last byte of data is stored as null character
// better go for getline(it can be used again) than get.
// to use get() more than one time then write cin.ignore() between two cin.get()
