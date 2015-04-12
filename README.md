# JQuery-PLUGIN-for-CSV
JQuery plugin to export json data into csv file

How to use this plug in.
1.Add reference to this plugin.
2 Initialise parameters
First argument: file format, csv in our case.
Second argument: json data, this should be array of json data
                eg:[{ "FirstName": "Rahul", "LastName": "Kumar", "Salary": 45000 }, { "FirstName": "Jose", "LastName": "Mathews", "Salary": 25000 }, { "FirstName": "Ajith", "LastName": "Kumar", "Salary": 25000 }, { "FirstName": "Scott", "LastName": "Allen", "Salary": 35000 }, { "FirstName": "Abhishek", "LastName": "Nair", "Salary": 125000 }] ;   
Third argument: file name of the csv file.
3.Call this method inside your export file event.
 $.jsCSVExport("csv",data,"myfile.csv");
 
 
 
