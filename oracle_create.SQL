create temporary tablespace tahoe_temp  
tempfile 'D:\oracle\oradata\tahoe_temp.dbf' 
size 50m  
autoextend on  
next 50m maxsize 20480m  
extent management local;  

create tablespace tahoe_data  
logging  
datafile 'D:\oracle\oradata\tahoe_data.dbf' 
size 50m  
autoextend on  
next 50m maxsize 20480m  
extent management local;

create user tahoe identified by "aaabbb"  
default tablespace tahoe_data  
temporary tablespace tahoe_temp; 

grant connect,resource,dba to tahoe;