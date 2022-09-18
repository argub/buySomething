Feature('enter');

Scenario('buy something', ( {I} ) => {
    I.amOnPage('https://www.a101.com.tr/');
    I.click('//div[@class ="col-sm-10 submenu-items"]');
    I.click('//input[@id = "attributes_integration_colourSİYAH"]');
    I.click('//div[@class = "count"]');
    I.click('//button[@class="add-to-basket button green block with-icon js-add-basket"]');
    I.click('//div[@class="button white cblack block"]');

    I.click('//div[@class="class="button green checkout-button block js-checkout-button"]');
    I.click('//div[@class="class="auth__form__proceed js-proceed-to-checkout-btn"]');

    I.fillField('//input[@name="user_email"]','ahmet123@gmail.com');
    I.click('//button[@class="button block green"]');

    I.click('//div[@class="new-address js-new-address""]');


    I.fillField('//input[@name="title"]','ev');
    I.fillField('//input[@name="first_name"]','ahmet');
    I.fillField('//input[@name="last_name"]','korkmaz');
    I.fillField('//input[@name="phone_number"]','5555556565');
    I.fillField('//select[@name="city"]','8');
    I.fillField('//select[@name="township"]','108');
    I.fillField('//select[@name="district"]','7390');
    I.fillField('//textarea[@class="js-address-textarea"]','fener mahallesi');
    I.fillField('//input[@name="postcode"]','07450');

    I.click('//input[@name="shipping"]');

    I.click('//button[@class="button block green js-proceed-button"]');


});
