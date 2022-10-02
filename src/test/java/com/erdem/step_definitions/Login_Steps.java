package com.erdem.step_definitions;

import com.erdem.pages.LoginPage;
import com.erdem.utilities.BrowserUtils;
import com.erdem.utilities.ConfigurationReader;
import com.erdem.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

public class Login_Steps {
    LoginPage loginPage = new LoginPage();
    WebDriver driver = Driver.get();

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() throws InterruptedException {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        BrowserUtils.waitFor(300);
    }

    @When("the user filtering")
    public void the_user_filtering() throws InterruptedException {
        BrowserUtils.waitFor(40);
        loginPage.ucuzdan_pahaliya_sirala();
        BrowserUtils.waitFor(10);

    }

    @Then("the user clicking if results are matches")
    public void the_user_clicking_if_results_are_matches() {
        double aradigimitem = Double.parseDouble(loginPage.birincielement.getText());

        long refreshCount = 90000000000000l;

        for (long i = 0; i < refreshCount; i++) {
            if (aradigimitem<0.31) {

                BrowserUtils.clickWithJS(loginPage.quickbuy);
            } else {
                loginPage.refresh.click();
                BrowserUtils.waitFor(3);
            }
        }
    }
}
