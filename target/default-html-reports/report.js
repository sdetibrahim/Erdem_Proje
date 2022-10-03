$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Users should be able to login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login as a user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.erdem.step_definitions.Login_Steps.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user filtering",
  "keyword": "When "
});
formatter.match({
  "location": "com.erdem.step_definitions.Login_Steps.the_user_filtering()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicking if results are matches",
  "keyword": "Then "
});
formatter.match({
  "location": "com.erdem.step_definitions.Login_Steps.the_user_clicking_if_results_are_matches()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"tw-inline-flex tw-justify-center tw-items-center tw-rounded-md tw-text-white-1 PlainButton_btn__CRXH4 !tw-rounded-full tw-text-sm tw-drop-shadow tw-text-white-2 tw-w-[112px]           tw-opacity-0 hover:!tw-bg-pink-dark hover:tw-drop-shadow-md tw-transition-[background-color] tw-ease-in-out tw-duration-100 group-hover:tw-opacity-100 enforcement-trigger\"\u003e...\u003c/button\u003e is not clickable at point (538, 764). Other element would receive the click: \u003crect role\u003d\"presentation\" x\u003d\"0\" y\u003d\"0\" width\u003d\"100%\" height\u003d\"100%\" clip-path\u003d\"url(#0yhzi0i-diff)\" style\u003d\"fill: url(\u0026quot;#0yhzi0i-animated-diff\u0026quot;);\"\u003e\u003c/rect\u003e\n  (Session info: chrome\u003d106.0.5249.91)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CELIK\u0027, ip: \u0027192.168.106.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.91, chrome: {chromedriverVersion: 106.0.5249.61 (511755355844..., userDataDir: C:\\Users\\IBRAHIM\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:51401}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5b8dabc15dabba38241723ac7b39181a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.click(Unknown Source)\r\n\tat com.erdem.step_definitions.Login_Steps.the_user_clicking_if_results_are_matches(Login_Steps.java:52)\r\n\tat ✽.the user clicking if results are matches(file:///C:/Users/IBRAHIM/IdeaProjects/erdemproje/src/test/resources/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});