let studentRecords = 
   [  
         {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 }
   ]
for(i=0;i<studentRecords.length;i++)
{
    let stuname=studentRecords[i].name
    console.log(stuname.toUpperCase());  
}

let ans=[]
for(i=0;i<studentRecords.length;i++)
{ 
    let markof=studentRecords[i].marks
       if(markof>50)
    {
     ans.push(studentRecords[i]);
    }     
}
console.log(ans);


for(i=0;i<studentRecords.length;i++)
{
    let markof=studentRecords[i].marks;
    let stuId=studentRecords[i].id;
    if(markof>50 && stuId>120)
    {
        console.log(studentRecords[i])
    }
}
let total=0;
for(i=0;i<studentRecords.length;i++)
{

   total=total+studentRecords[i].marks;  
}
console.log(total);

for(i=0;i<studentRecords.length;i++)
{
    number=studentRecords[i].marks;
   if(number>50)
   console.log(studentRecords[i].name)  
}

let total_id=0;
for(i=0;i<studentRecords.length;i++)
{
    number_id=studentRecords[i].id;

   if(number_id>120)
   {
    total_id=total_id+studentRecords[i].marks; 
   }
}
console.log(total_id)

arryOfobject=[

    {name: 'John', class: 'BCA', Roll_no : 98 },
    {name: 'Baba', class: 'Bsc', Roll_no : 23 },
    {name: 'yaga', class: 'B Tech', Roll_no : 45 },
    {name: 'Wick', class: 'Msc', Roll_no : 75 },
    {name: 'Mohd arif', class: 'M A', Roll_no : 45 },
    {name: 'laboni', class: 'M Tech', Roll_no : 75 }

]
console.log(arryOfobject);
greaterthan=0;
lessthan=0;
for(i=0;i<studentRecords.length;i++)
{
  if(studentRecords[i].marks>50)
  {
    greaterthan=greaterthan+studentRecords[i].marks; 
  } 
  else if(studentRecords[i].marks<50) 
  {
    lessthan=(lessthan+studentRecords[i].marks)+15;
  }  
}
console.log(greaterthan+lessthan);


