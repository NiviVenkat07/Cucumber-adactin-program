package Adactin_Step_Definition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import Adactin_runner.Test_runner;
import Base_class_for_all.Base_class;
import Page_object_manager_Adactin.Page_Object_Manager;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_def extends Base_class{
	
	public static WebDriver driver = Test_runner.driver ;  // runner class driver
	
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	public static String path ="C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin_project\\TestCase Adactin.xlsx";
		
  @Before
  public static  void Before_Hooks(Scenario s) { // interface scenario
	
         String name = s.getName();
         System.out.println("Scenario  Name : "+name);	 	  	  
}
  
  @After
	public static void After_Hooks(Scenario s) throws IOException {
		
	 if (s.isFailed()) {
		
		 ScreenShot("C:\\Users\\Admin\\eclipse-workspace\\Cucumber_Adactin_project\\Screenshot/Adactin.png");
		 
	}
	    String status = s.getStatus();
	  
	    System.out.println("Scenario Status  :"+ status);
	  
	}
  
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {	
			  
		implicitWait(20,TimeUnit.SECONDS);
		
		getUrl("https://adactinhotelapp.com/");
		
	
	}

	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_username_Field(String username) throws Throwable {
	  
		SendKeys(pom.getLp().getUser_name(), username);	  
	}

	@When("^user Enter The \"([^\"]*)\"In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	    
		SendKeys(pom.getLp().getPass_word(), password);		
	}


	@Then("^user Click On The Login Button And It Navigate To Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigate_To_Search_Hotel_Page() throws Throwable {
	
		 Click(pom.getLp().getLog_in());
		 	
	}
 
	@When("^user Click To Choose The \"([^\"]*)\"$")
	public void user_Click_To_Choose_The(String Location) throws Throwable {
	    
		SendKeys(pom.getHd().getLocation(), Location );		
	}

	@When("^user Click To Choose The Hotel$")
	public void user_Click_To_Choose_The_Hotel() throws Throwable {
	 		
		SendKeys(pom.getHd().getHotel(), Particular_cell_data(path, 17, 5));
	}

	@When("^user Click To Choose The Room Types$")
	public void user_Click_To_Choose_The_Room_Types() throws Throwable {
	    		
		SendKeys(pom.getHd().getRoom_type(), Particular_cell_data(path, 18, 5));
	}

	@When("^user Enter The Number Of Rooms$")
	public void user_Enter_The_Number_Of_Rooms() throws Throwable {
	    		
		SendKeys(pom.getHd().getRoom_nos(), Particular_cell_data(path, 19, 5));		
	}

	@When("^user Enter The Check In Date$")
	public void user_Enter_The_Check_In_Date() throws Throwable {	   
		
		SendKeys(pom.getHd().getPick_in(), Particular_cell_data(path, 20, 5));
	}

	@When("^user Click TO ChooseThe Check Out Date$")
	public void user_Click_TO_ChooseThe_Check_Out_Date() throws Throwable {
	  	
		SendKeys(pom.getHd().getPick_out(), Particular_cell_data(path, 21, 5));		
	}

	@When("^user Click To Select Adults Per Room$")
	public void user_Click_To_Select_Adults_Per_Room() throws Throwable {
			
		SendKeys(pom.getHd().getAdult(), Particular_cell_data(path, 22, 5));		
	}

	@When("^user Click To Select Childs Per Room$")
	public void user_Click_To_Select_Childs_Per_Room() throws Throwable {
	   		
      SendKeys(pom.getHd().getChild(), Particular_cell_data(path, 23, 5));
	}

	@Then("^user Click On The Search Button And It Navigate To Select Hotel Page$")
	public void user_Click_On_The_Search_Button_And_It_Navigate_To_Select_Hotel_Page() throws Throwable {
	   
		Click(pom.getHd().getSubmit());
				
	}

	@When("^user Click On The Radio Button$")
	public void user_Click_On_The_Radio_Button() throws Throwable {
	   Click(pom.getSh().getRadio_btn());		
	}

	@Then("^user Click On The Continue Button And It Navigate To Book A Hotel Page$")
	public void user_Click_On_The_Continue_Button_And_It_Navigate_To_Book_A_Hotel_Page() throws Throwable {
	
		Click(pom.getSh().getCont());
		
		
	}

	@When("^user Enter The Firstname In Firstname Field$")
	public void user_Enter_The_Firstname_In_Firstname_Field() throws Throwable {
	 
         SendKeys(pom.getPd().getFist_name(), Particular_cell_data(path, 27, 5));		
	}

	@When("^user Enter The Lastname In Lastname Field$")
	public void user_Enter_The_Lastname_In_Lastname_Field() throws Throwable {
	  	
         SendKeys(pom.getPd().getLast_name(), Particular_cell_data(path, 28, 5));		
	}

	@When("^user Enter The Billing Address In The Address Field$")
	public void user_Enter_The_Billing_Address_In_The_Address_Field() throws Throwable {
	  
		SendKeys(pom.getPd().getAddress(), Particular_cell_data(path, 29, 5));
	}

	@When("^user Enter The Sixteen Digit Credit Card No In The Card No Field$")
	public void user_Enter_The_Sixteen_Digit_Credit_Card_No_In_The_Card_No_Field() throws Throwable {
	   	
        SendKeys(pom.getPd().getCredit_no()," 2103 4567 8901 2345  ");
	}

	@When("^user Click To Select The Credit Card Type$")
	public void user_Click_To_Select_The_Credit_Card_Type() throws Throwable {
	   	
        SendKeys(pom.getPd().getCredit_type(), "Master Card");
	}
	
	@When("^user Click To Choose The Expiry Date Of Month$")
	public void user_Click_To_Choose_The_Expiry_Date_Of_Month() throws Throwable {
		SendKeys(pom.getPd().getExp_month(),Particular_cell_data(path, 32, 5));
		
}
	@When("^user Click To Choose  the  Expiry Year Field$")
	public void user_Click_To_Choose_the_Expiry_Year_Field() throws Throwable {
	    SendKeys(pom.getPd().getExp_year(), Particular_cell_data(path,33, 5));
	
	}
	
	@When("^user Enter The CCV no In The CCV Field$")
	public void user_Enter_The_CCV_no_In_The_CCV_Field() throws Throwable {
	    		
        SendKeys(pom.getPd().getCcv_n(), Particular_cell_data(path, 34, 5));
	}

	@Then("^user Click On The Book Now Button And It Navigate To Booking Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigate_To_Booking_Confirmation_Page() throws Throwable {
	    
		Click(pom.getPd().getBk_now());		
		

	}
	
	@When("^user Click On The My Itinenary Button And It Navigate To My Itinenary Page$")
	public void user_Click_On_The_My_Itinenary_Button_And_It_Navigate_To_My_Itinenary_Page() throws Throwable {
   
		Click(pom.getMi().getCk_btn());
	}

	@When("^user Click On The Log Out Button And It Navigate To Log Out Page$")
	public void user_Click_On_The_Log_Out_Button_And_It_Navigate_To_Log_Out_Page() throws Throwable {
	   
		Click(pom.getLg().getLog_out());
		

	}


}
