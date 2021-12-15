// Factorial
// Factors
// Prime number
// Armstrong number
// Reverse a number
// Digits of number
// Palindrome
// GCD of numbers


#include <iostream>
using namespace std;

int main(){

    //FACTORIAL OF A NUMBER-->
    // int n,fact=1;
    // cout<<"Enter a number"<<endl;
    // cin>>n;
    // for (int i=1;i<=n;i++){

    //     fact=fact*i;
    // }
    // cout<<"The factorial of "<<n<<" is "<<fact<<endl;

    // // // ---------------------------------
    // // IF SUM OF FACTORS OF THE NUMBER IS DOUBLE THE NUMBER, THEN IT IS PERFECT NUMBER
    // // PERFECT NUMBER-->
    // int m,sum=0;
    // cout<<"Enter m"<<endl;
    // cin>>m;
    // for (int j=1;j<=m;j++){
    //     if (m%j==0){
    //         sum=sum+j;
    //         cout<<j<<endl;
    //     }
    // }
    // if(2*m==sum){
    //     cout<<"It is a perfect number";
    // }
    // cout<<"The sum of factors is "<<sum<<endl;


    // // //-------------------------------------------
    // // PRIME NUMBER-->
    // int x;
    // cout<<"Enter a number";
    // cin>>x;
    // for (int z=2;z<x;z++){
    //     if(x%z==0){
    //         cout<<"Not prime";
    //         break;
    //     }
    //     else {
    //         cout<<"Prime";
    //         break;
    //     }
    // }
    // // -----------------------------
    // // ARMSTRONG NUMBER-->
    // int n,r,Sum=0,m;
    // cout<<"Enter n"<<endl;
    // cin>>n;
    // m=n;
    // while(n>0){
    //     r=n%10;
    //     n=n/10;
    //     Sum=Sum+r*r*r;
    //     }
    //     cout<<Sum<<endl;
    //     if (m==Sum){
    //         cout<<"It is armstrong number";
    //     }
    //     else{
    //         cout<<"Not an armstrong number";
    //     }



    // // --------------------------------------
    // // REVERSE A NUMBER-->
    // int num,rem,rev=0;
    // cout<<"Enter num"<<endl;
    // cin>>num;
    // while(num>0){
    //     rem=num%10;
    //     num=num/10;
        
    //     rev=rev*10+rem;
    // }
    // cout<<rev;

    // // --------------------------------------------
    // // DIGITS OF A NUMBER-->
    // int num,rem,rev=0;
    // cout<<"Enter num"<<endl;
    // cin>>num;
    // while(num>0){
    //     rem=num%10;
    //     num=num/10;
    //     cout<<rem<<endl;
        
    // }
    // ---------------------------------
    // PALINDROME-->
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

    // ---------------------------------------

    // GCD of numbers-->
    int a,b;
    cout<<"Enter two nymbers"<<endl;
    cin>>a>>b;
    while(a!=b){
        if(a>b){
            a=a-b;
        }
        else if (b>a){
            b=b-a;
        }

    }
    cout<<a;



    return 0;

}








