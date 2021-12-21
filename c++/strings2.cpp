#include<iostream>
#include<cstring>
#include<string>
using namespace std;
int main(){

    // string str ;
    // cout<<"Enter a string"<<endl;
    // // cin>>str;
    // getline(cin,str);
    // cout<<"Welcome "<<str;
    // ---------------------------
    // string str="WELCOME";
    // for (int i=0;str[i]!='\0';i++){
    //     str[i]=str[i] + 32;
    // } 
    // cout<<str<<endl;
    // // ---------------------------
    // char s[50]="Hello world";
    // cout<<strlen(s)<<endl;
    // // ---------------------------
    // char *a;
    // cout<<"Enter the string"<<endl;
    // cin.getline(a,100);
    // cout<<"Length is "<<strlen(a)<<endl;
    // // -----------------------------
    // // strcat(destination,source)
    // // strncat(destination,source,length)
    // char s1[20]="Good";
    // char s2[10]="Morning";
    // strcat(s1,s2);
    // cout<<s1<<endl;
    // strncat(s1,s2,4)
    // ----------------------------------
    // strcpy(destination,source)
    // strncpy(destination,source,length) source is copied in destination
    // char a1[20]="Good";
    // char a2[10]=" ";
    // strcpy(a2,a1);
    // strncpy(a2,a1,2);
    // cout<<a2;
    // ---------------------------------
    // strstr(main,sub);
    // char b1[20]="Happy";
    // char b2[20]="ap";
    // cout<<strstr(b1,b2)<<endl;
    // --------------------------------
    // strchr(main,char)
    // char c1[20]="Beautiful";
    // cout<<strchr(c1,'u')<<endl;
    // --------------------------------
    //strcmp(str1,str2) [-ve -->'<',0-->'=',+ve-->'>'] will compare with w.r.t ASCII code
    // char d1[20]="Hello";
    // char d2[20]="hello";
    // cout<<strcmp(d1,d2)<<endl;
    // --------------------------------
    // strtol(str1,NULL) strtof(str1,NULL) string to long int string to float
    // char e1[10]="235";
    // char e2[10]="54.7";
    // long int x=strtol(e1,NULL,10);// here 10 is base of int
    // float y=strtof(e2,NULL);
    // cout<<x<<endl<<y<<endl;
    // --------------------------------
    // strtok(s1,"=;")
    // long char f1[10]="x=10;y=20;z=30";
    // char *token=strtok(f1,"=;");
    // while(token!=NULL){
    //     cout<<token<<endl;
    // }
    // --------------------------------




    string s="Focus things";
    // cout<<s.length()<<endl;
    // cout<<s.size()<<endl;
    // cout<<s.capacity()<<endl;
    // // cout<<s.resize(30)<<endl;
    // cout<<s.max_size()<<endl;
    // // cout<<s.clear()<<endl;
    // // s.empty()
    // s.append(" Hi");
    // cout<<s<<endl;
    // s.insert(6," on ");
    // cout<<s<<endl;
    // s.replace(10,5,"one");
    // cout<<s<<endl;
    // s.erase
    // s.push_back('s') insert s at end of string
    // s.pop_back() removes last element from string
    // s1.swap(s2)

    // cout<<s.find("thing"); //will give index 
    // cout<<s.rfind("ing"); will give index from reverse
    // cout<<s.find_first_of('s'); will find occurence of only first element
    // cout<<s.find_last_of('s');
    // cout<<s.substr(3,6); (start pos,length)
    // cout<<s.compare("Focus things");
    // cout<<s.at(4); letter at index
    // cout<<s.front(); first letter of string
    // cout<<s.back();


    // -------------------------------------------------------------------

    // checking palindrome of string-->
    // string str="madam";
    // string rev=" ";
    // int len=str.length();
    // rev.resize(len);
    // for(int i=0 , j=len-1;i<len;i++,j--){
    //     rev[i]=str[j];
    // }
    // rev[len]='\0';
    // cout<<rev<<endl;
    // if(str.compare(rev)==0){
    //     cout<<"Palindrome";
    // }
    // else{
    //     cout<<"Not a palindrome";
    // }
    // ------------------------------------------------------------------------

    // finding username from email-->
    // string email="prathameshandhare04@gmail.com";
    // int i=email.find('@');
    // string uname=email.substr(0,i);
    // cout<<"Username is "<<uname<<endl;




    return 0;
}