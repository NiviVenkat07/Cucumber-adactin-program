 Feature: Hotel Booking In Adactin Application
 
 @Ad1
 Scenario Outline: Login Page
           Given user Launch The Application 
           When user Enter The "<username>" In Username Field
           And user Enter The "<password>"In Password Field 
           Then user Click On The Login Button And It Navigate To Search Hotel Page
Examples:
|username|password|
|nivivenkat07|Nivi12345|

 @Ad2
 Scenario: Search Hotel Page
            When user Click To Choose The "Paris"
            And user Click To Choose The Hotel
            And user Click To Choose The Room Types 
            And user Enter The Number Of Rooms 
            And user Enter The Check In Date
            And user Click TO ChooseThe Check Out Date 
            And user Click To Select Adults Per Room
            And user Click To Select Childs Per Room
            Then user Click On The Search Button And It Navigate To Select Hotel Page
 @Ad3
 Scenario: Select Hotel Continue Page 
           When user Click On The Radio Button 
           Then user Click On The Continue Button And It Navigate To Book A Hotel Page

 @Ad4
 Scenario: Book Now Page
           When user Enter The Firstname In Firstname Field
           And user Enter The Lastname In Lastname Field
           And user Enter The Billing Address In The Address Field
           And user Enter The Sixteen Digit Credit Card No In The Card No Field
           And user Click To Select The Credit Card Type
           And user Click To Choose The Expiry Date Of Month 
           And user Click To Choose  the  Expiry Year Field
           And user Enter The CCV no In The CCV Field
           Then user Click On The Book Now Button And It Navigate To Booking Confirmation Page
 
 @Ad5
 Scenario: Booking Conformation page
          When user Click On The My Itinenary Button And It Navigate To My Itinenary Page
 
 @Ad6
 Scenario: Logout Page  
          When user Click On The Log Out Button And It Navigate To Log Out Page
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 