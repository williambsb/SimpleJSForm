SimpleJSForm
============

forked from tmock12/ageChecker

Simple Form to Capture Data triggering a POP UP 


## Data Structure Usage 

This Code will help to demonstrate the usage of JavaScript Data Structure 
  * Array 
  * Simple Variable 
  
## To set the form  on a page
include ageChecker.js to your html head section -

    <script type="text/javascript" src="ageChecker.js"></script>

as of now you must have these fields included in your html file-

   
## To have the POP UP before  allowing access to a page
include the following in the html head section of any page you want to deny access to younger users-
 
    <script type="text/javascript" src="ageChecker.js"></script>
    <script type="text/javascript">
    ageCheck.checkCookie();
    </script>

this checks if the user has an appropriate cookie set, and if not, redirects
to the specified page in your ageChecker.js file.

## Handling users with javascript disabled
if you want to keep users with javascript disabled out, add the following to the html head section of any page you want to keep users out of-

    <noscript>
    <meta HTTP-EQUIV="REFRESH" content="2; url=YourWebsiteWithAgecheck.html"> 
    </noscript>

Fill in the url="YourWebsiteWithAgecheck" with the appropriate page you want to redirect to. 

You may also want to add this to the page where users set their birthday -

    <noscript>
    You must have javascript enabled to view this page.
    </noscript>

It lets users who have javascript disabled that they will not be able to use your site.
