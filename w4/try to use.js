/* / cant figure out why it only displays one: not the rest... ive changed everything I can think of...
// need to figure out how to use this instead of days so i can actually use todays date
/* var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); 
today=new Date();
let due = new Date(today.getFullYear(), 3, 4);
if (today.getMonth()==3 && today.getDate()>4) 
{
due.setFullYear(due.getFullYear()+1); 
}  
let one_day=1000*60*60*24;
console.log(Math.ceil((due.getTime()-today.getTime())/(one_day))+
" days left until Hhomework is due!!");