function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
/*var defaultText = "Search..."; var searchBox = document.getElementById("search"); 
//default text after load 
searchBox.value = defaultText; 
//on focus behaviour 
searchBox.onfocus = function() 
{ if (this.value == defaultText) {
  //clear text field
   this.value = ''; } } 
  //on blur behaviour 
  searchBox.onblur = function() { if (this.value == "") {
    //restore default text 
    this.value = defaultText; } }

    //When the user clicks on the button, toggle between hiding and showing the dropdown content
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    */
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }}