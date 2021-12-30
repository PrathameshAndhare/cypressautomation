#include <iostream>
using namespace std;
// class Rectangle{
//     private:
//     int length;
//     int breadth;
//     public:
//     Rectangle(int l, int b){
//         length=l;
//         breadth=b;
//     }
//     Rectangle(Rectangle &r1){
//         length=r1.length;
//         breadth=r1.breadth;
//     }
//     int area(){
//         return length*breadth;
//     }
//     int perimeter(){
//         return 2*(length+breadth);
//     }
// };
int main(){

    // int n,r,rev=0,m;
    // cout<<"Enter n"<<endl;
    // cin>>n;
    // m=n;
    // while (n>0){
    //     r=n%10;
    //     n=n/10;
    //     rev=rev*10+r;
    // }
    // cout<<rev<<endl;
    // if(m==rev){
    //     cout<<"Palindrome";
    // }
    // else{
    //     cout<<"Not a palindrome";
    // }
    // cout<<"Hello";
    // Rectangle r1(2,6);
    // cout<<r1.area()<<" "<<r1.perimeter()<<endl;
    // Rectangle r2(r1);
    // cout<<r2.area()<<" "<<r2.perimeter()<<endl;
    int t;
	cin>>t;
	int A[t];
	for(int i=0;i<t;i++){
	    
	    cin>>A[i];
	}
	int count;
	int temp;
	count=A[0];
	for(int i=0;i<t;i++){
	    for(int j=i+1;j<t;j++){
	        if(A[i]>A[j]){
	            temp = A[i];    
                A[i] = A[j];    
                A[j] = temp;  
	        }
	    }
	}
	for(int k=0;k<t;k++){
	    cout<<A[k]<<endl;
	}
	return 0;



}