$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Adactin_feature_file/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cpassword\u003e\"In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigate To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "nivivenkat07",
        "Nivi12345"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1361500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"nivivenkat07\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Nivi12345\"In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The Login Button And It Navigate To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 7291555900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nivivenkat07",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_In_username_Field(String)"
});
formatter.result({
  "duration": 763347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nivi12345",
      "offset": 16
    }
  ],
  "location": "Step_def.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 207901500,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Login_Button_And_It_Navigate_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1637334800,
  "status": "passed"
});
formatter.after({
  "duration": 412800,
  "status": "passed"
});
formatter.before({
  "duration": 213900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user Click To Choose The \"Paris\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Click To Choose The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Click To Choose The Room Types",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Enter The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Enter The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Click TO ChooseThe Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Click To Select Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Click To Select Childs Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click On The Search Button And It Navigate To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 26
    }
  ],
  "location": "Step_def.user_Click_To_Choose_The(String)"
});
formatter.result({
  "duration": 336449900,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Choose_The_Hotel()"
});
formatter.result({
  "duration": 5949686900,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Choose_The_Room_Types()"
});
formatter.result({
  "duration": 271211800,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 221385900,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Check_In_Date()"
});
formatter.result({
  "duration": 261187400,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_TO_ChooseThe_Check_Out_Date()"
});
formatter.result({
  "duration": 261749700,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Select_Adults_Per_Room()"
});
formatter.result({
  "duration": 208718200,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Select_Childs_Per_Room()"
});
formatter.result({
  "duration": 194993200,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Search_Button_And_It_Navigate_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 3004059700,
  "status": "passed"
});
formatter.after({
  "duration": 472300,
  "status": "passed"
});
formatter.before({
  "duration": 211800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select Hotel Continue Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-continue-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user Click On The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click On The Continue Button And It Navigate To Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Radio_Button()"
});
formatter.result({
  "duration": 468957600,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Continue_Button_And_It_Navigate_To_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 933076900,
  "status": "passed"
});
formatter.after({
  "duration": 167900,
  "status": "passed"
});
formatter.before({
  "duration": 488100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Book Now Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-now-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user Enter The Firstname In Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Lastname In Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The Billing Address In The Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Sixteen Digit Credit Card No In The Card No Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Click To Select The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click To Choose The Expiry Date Of Month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click To Choose  the  Expiry Year Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enter The CCV no In The CCV Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Click On The Book Now Button And It Navigate To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_def.user_Enter_The_Firstname_In_Firstname_Field()"
});
formatter.result({
  "duration": 4417213200,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Lastname_In_Lastname_Field()"
});
formatter.result({
  "duration": 290122600,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Billing_Address_In_The_Address_Field()"
});
formatter.result({
  "duration": 285298000,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_Sixteen_Digit_Credit_Card_No_In_The_Card_No_Field()"
});
formatter.result({
  "duration": 292454500,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Select_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 210766900,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Choose_The_Expiry_Date_Of_Month()"
});
formatter.result({
  "duration": 231431300,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_To_Choose_the_Expiry_Year_Field()"
});
formatter.result({
  "duration": 188579300,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Enter_The_CCV_no_In_The_CCV_Field()"
});
formatter.result({
  "duration": 205293800,
  "status": "passed"
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Book_Now_Button_And_It_Navigate_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 114852600,
  "status": "passed"
});
formatter.after({
  "duration": 105900,
  "status": "passed"
});
formatter.before({
  "duration": 106200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Booking Conformation page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-conformation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Ad5"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user Click On The My Itinenary Button And It Navigate To My Itinenary Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_def.user_Click_On_The_My_Itinenary_Button_And_It_Navigate_To_My_Itinenary_Page()"
});
formatter.result({
  "duration": 7353509900,
  "status": "passed"
});
formatter.after({
  "duration": 123400,
  "status": "passed"
});
formatter.before({
  "duration": 105900,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Logout Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;logout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@Ad6"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user Click On The Log Out Button And It Navigate To Log Out Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_def.user_Click_On_The_Log_Out_Button_And_It_Navigate_To_Log_Out_Page()"
});
formatter.result({
  "duration": 698562300,
  "status": "passed"
});
formatter.after({
  "duration": 142000,
  "status": "passed"
});
});