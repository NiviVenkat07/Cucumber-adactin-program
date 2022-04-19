package Adactin_runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import Base_class_for_all.Base_class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)

@CucumberOptions(
    features = "src\\test\\java\\Adactin_feature_file\\Adactin.feature",
    
     glue = "Adactin_Step_Definition",
                 
      monochrome =  true ,
      
      dryRun = false,
      
      strict = true,
                 
      plugin = {"html:Cucumber_reports/Rep",
     		 
     		 "json:json_Report/jsonreport.json",
     		 
     		// "pretty",
     		 
     		 "com.cucumber.listener.ExtentCucumberFormatter:extend_report/report.html"   		 
     		 
      }              
)


public class Test_runner  {

	public static WebDriver driver;
	
    @BeforeClass 
      public static void set_Up()  {
		 
         driver=Base_class.browser_Launch("chrome");
    } 
    
    @AfterClass 
     public static void tear_Down() {
	
     	driver.close();

}

}
