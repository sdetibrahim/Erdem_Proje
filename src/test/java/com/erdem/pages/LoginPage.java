package com.erdem.pages;

import com.erdem.utilities.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class LoginPage extends BasePage {

    WebDriver driver = Driver.get();

    @FindBy(xpath = "//*[@class='tw-truncate tw-select-none no-border me-naked-dropdown']")
    public WebElement dropdownElement;

    @FindBy(xpath = "//*[contains(text(),'Fiyat: Ucuzdan Pahalıya')]")
    public WebElement ucuzdanpahaliya;

    @FindBy(xpath = "(//*[@class='tw-truncate'])[2]")
    public WebElement birincielement;

    @FindBy(xpath = "(//*[@class='tw-inline-flex tw-justify-center tw-items-center tw-rounded-md tw-text-white-1 PlainButton_btn__CRXH4 !tw-rounded-full tw-text-sm tw-drop-shadow tw-text-white-2 tw-w-[112px]           tw-opacity-0 hover:!tw-bg-pink-dark hover:tw-drop-shadow-md tw-transition-[background-color] tw-ease-in-out tw-duration-100 group-hover:tw-opacity-100 enforcement-trigger'])[1]")
    public WebElement quickbuy;

    @FindBy(xpath = "//*[@class='tw-h-9 tw-w-9 tw-box-border tw-border tw-border-solid tw-border-gray-300         tw-flex tw-items-center tw-justify-center tw-rounded tw-cursor-pointer']")
    public WebElement refresh;

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this); }

    public List<WebElement> elementsList() {
      return  driver.findElements(By.xpath("//div[@class='tw-flex tw-items-center tw-gap-1']/span[1]"));
    }

public void ucuzdan_pahaliya_sirala(){

        dropdownElement.click();
        ucuzdanpahaliya.click();
  }
}
