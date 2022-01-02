// writing in file
// Read data from file
// serialization
#include<iostream>
#include<fstream>
using namespace std;
// int main(){
//     ofstream ofs("My.txt",ios::trunc);
//     ofs<<"Prathamesh"<<endl;
//     ofs<<47<<endl;
//     ofs<<"ETC"<<endl;
//     ofs.close();
// }
// ---------------------
// Read data from file-->
// int main(){
//     ifstream infile;
//     infile.open("My.txt");
//     string str;
//     int x;
//     infile>>str;
//     infile>>x;
//     cout<<str<<" "<<x;

//     if(infile.eof()){cout<<"End of file reached"<<endl;}
//     infile.close();
// }
// ------------------------------

// int main(){

//     ifstream ifs("My.txt");
//     // ifstream ifs;
//     // ifs.open("My.txt");
//     if(ifs){cout<<"File is opened"<<endl;}
//     string name;
//     int roll;
//     string branch;
//     ifs>>name>>roll>>branch;
//     ifs.close();
//     cout<<"Name : "<<name<<endl;
//     cout<<"Roll No : "<<roll<<endl;
//     cout<<"Branch : "<<branch<<endl;

// }
// --------------------------------------
// serialization-->

class Student {
    public:
    string name;
    int roll;
    string branch;
    friend ofstream & operator <<(ofstream &ofs,Student &s);
};
ofstream & operator<<(ofstream &ofs,Student &s)

{
    ofs<<s.name<<endl;
    ofs<<s.roll<<endl;
    ofs<<s.branch<<endl;
    return ofs;
}

int main(){
    Student s1;
    s1.name="Prathamesh";
    s1.roll=47;
    s1.branch="ETC";

    ofstream ofs("Student.txt",ios::trunc);
    // ofs<<s1.name<<endl;
    // ofs<<s1.roll<<endl;
    // ofs<<s1.branch<<endl;

    ofs<<s1;
    ofs.close();
}