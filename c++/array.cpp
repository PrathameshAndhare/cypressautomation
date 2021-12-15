// maximum,minimum of array
// linear search
// binary search(consist of sorted elements)
// Drawing pattern 1,2


#include <iostream>
using namespace std; 
int main()
{
    // int A[]={22,77,44,19};
    // // this is foreach loop-->
    // for (auto x:A){
    //     cout<<x<<endl;
    // }

    // -------------------------------------
    // min/max-->
    // int c[]={5,14,68,12,-42,0,26};
    // int max,min;
    // max=c[0];
    // min=c[0];
    // for(int i=0;i<7;i++){
    //     if (c[i]>max){
    //         max=c[i];
    //     }
    //     else if( c[i]<min){
    //         min=c[i];
    //     }
    // }
    // cout<<max<<endl;
    // cout<<min<<endl;
    // cout<<"Hello";

    // ------------------------------------

    // linear search-->

    // int B[10],n=10,key;
    // cout<<"Enter elements in array"<<endl;
    // for (int i=0;i<n;i++){
    //     cin>>B[i];
    // }
    // cout<<"Enter key"<<endl;
    // cin>>key;
    // for(int i=0;i<n;i++){
    //     if(key==B[i]){
    //         cout<<"Found at "<<i<<endl;
    //         return 0;
    //     }
    // }
    // cout<<"Not found";

    // ------------------------------
    // binary search-->

    // int D[10]={1,3,41,42,47,56,77,85,90,100};
    // int l=0,h=9,key,mid;
    // cout<<"Entet key"<<endl;
    // cin>>key;
    // while(l<=h){
    //     mid=(l+h)/2;
    //     if(key==D[mid]){
    //         cout<<"Found at "<<mid<<endl;
    //         return 0;
    //     }
    //     else if(key<D[mid]){
    //         h=mid-1;
    //     }
    //     else{
    //         l=mid+1;
    //     }
    // }
    // ------------------------------------------------
    // Pattern 1

    // int count = 1 ;
    // for(int i=0;i<3;i++){
    //     for (int j=0;j<3;j++){
    //         cout<<count<<" ";
    //         count =count +1;
    //     }
    //     cout<<endl;
    // }
    // -------------------------------------------------------
    // Pattern 2
    // for(int i=0;i<4;i++){
    //     for (int j=0;j<=i;j++){
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }

    // for (int i=0;i<4;i++){
    //     for (int j=0;j<4;j++){
    //         if(i>j){
    //             cout<<" ";
    //         }
    //         else{
    //             cout<<"*";
    //         }
            
    //     }
    //     cout<<endl;
    // }
    // --------------------------------------
    // for (int i=0;i<4;i++){
    //     for (int j=0;j<4;j++){
    //         if(i+j>=4-1){
    //             cout<<"*";
    //         }
    //         else{
    //             cout<<" ";
    //         }
            
    //     }
    //     cout<<endl;
    // }


    return 0;
}

// if you don't know the type of x , then you can write auto instead of int .
// if you want to change/update original values of array , use "&" symbol before x .