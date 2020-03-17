

var ageCheck = {
  
  //Leave this stuff alone please :)

  start: function() {
    this.setUsersBirthday();
    if (this.userIsOverMinimumAge()) {
      this.setCookie("usersBirthday",this.usersBirthday,30);
      window.location = this.userIsOldEnoughPage;
    } else{
      this.notMinimumAge();
    };
  },

  usersBirthday : new Date(),

  // Use the following values to DRIVE THE CODE 
  // Region 1 (Brasilia) --> Min Order R$ 129
  // Region 2 (Sudeste) --> Min Order R$ 229
  // Region 3 (Sul) --> Min Order R$ 249
  // Region 4 (Nordeste ) --> Min Order R$ 299
  
  setTheRegion : function() {
    var selectedRegion = document.getElementById("region").value;
    if (selectedRegion === "1") {
      this.setMinOrder(129);
    } 
    else if (selectedRegion === "2" {
             this setMinOrder(229);
         }
         else if (selectedRegion === "3" {
                   this setMinOrder(249);
              }
              else {
                this setMinOrder(299);
              };
  
    }
    else {
      this.setDaysForMonth(31);
    };
  },

  setDaysForMonth : function(x) {
    var daySelectTag = document.getElementsByName('day')[0];
    daySelectTag.options.length = 0;
      for(var i=1; i <= x; i++) {
      daySelectTag.options.add(new Option(i, i));
    }
  },

  setUsersBirthday: function() {
    var usersMonth = document.getElementById("month").value;
    var usersDay = document.getElementById("day").value;
    var usersYear = document.getElementById("year").value;
    this.usersBirthday.setMonth(usersMonth);
    this.usersBirthday.setDate(usersDay);
    this.usersBirthday.setFullYear(usersYear);
  },

  setMinimumAge: function() {
    var today = new Date();
    today.setFullYear(today.getFullYear() - this.minimumAge);
    return today;
  },

  notMinimumAge : function() {
    window.location = this.userNotOldEnoughPage
  },

  userIsOverMinimumAge: function () {
    if (this.usersBirthday < this.setMinimumAge()) {
      return true;
    }
  },

  setCookie: function (c_name,value,exMinutes) {
    var exdate=new Date();
    exdate.setMinutes(exdate.getMinutes() + exMinutes);
    var c_value=escape(value) + ((exMinutes==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  },

  getCookie: function (c_name) {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
      {
        return unescape(x);
      }
    }
  },

  checkCookie:   function () {
    var usersBirthday=this.getCookie("usersBirthday");
    if (usersBirthday==null || usersBirthday=="") {
      window.location = "ageCheckTester.html";
    }
  }
}


