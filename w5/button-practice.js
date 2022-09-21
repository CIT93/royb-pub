<button type="button" onClick="refreshPage()" style='padding: 150px;' ><h1> CHECK YOUR HOMEWORK<br><br> NOW <br><br>OR ELSE!</button></h1>
<script>
function refreshPage(){
window. location. reload();
}

<input type="button" value="Reload Page" onClick="history.go(0)">




<button id="Button" onclick="calculate_age()">Try it</button>


function calculate_age(){
	 
     var ourYear = document.querySelector("#year").value;
     var birth_month = document.querySelector("#month").value;
  
     today_date = new Date();
 
     today_year = today_date.getFullYear();
 
     today_month = today_date.getMonth();
 
     today_day = today_date.getDate();
 
     age = today_year - ourYear;
 
      
     if ( today_month < (birth_month - 1))
     {
         age--;
     }
     if (((birth_month - 1) == today_month) && (today_day < birth_day))
     {
         age--;
     }
     alert(age);
     return age;
 
 } 



<p> Current Date is: <span class="output"></span></p>
      <button onclick="getCurrentDate()">Todays Date</button>

      // create a function that gets current date
     function getCurrentDate() {
        let date = new Date().toDateString();
        document.querySelector('.output').textContent = date;
    }
