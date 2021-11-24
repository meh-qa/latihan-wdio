import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import LoginPageDhealth from '../pageobjects/login/logindhealth.page';
import HomePageDhealth from '../pageobjects/home/homedhealth.page';
import PendaftaranPage from '../pageobjects/pendaftaran/pendaftarandhealth.page';

const pages = {
    login: LoginPage
}

const dhealthPages = {
    login: LoginPageDhealth
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

Given(/^I am on the (\w+) page$/, async (page) => {
    await dhealthPages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPageDhealth.login(username, password)
});

Then(/^I should see a page title is (.+)$/, async (title) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
    await browser.pause(5000);
    await expect(browser).toHaveTitle(title);
});

When(/^I can see SOAP modal$/, async () => {
    await browser.pause(10000);
    await HomePageDhealth.verifySOAPModal();
});

When(/^I close SOAP modal$/, async () => {
    await HomePageDhealth.closeSOAPModal();
});

When(/^I can see all menu on homepage$/, async () => {
    await HomePageDhealth.verifyAllMenuHomepage();
});

When(/^I click button Tampilkan Lebih Banyak$/, async () => {
    await HomePageDhealth.clickTampilkanLebihBanyak();
});

When(/^I click menu Pendaftaran$/, async () => {
    await HomePageDhealth.clickMenuPendaftaran();
});

When(/^I click Pendaftaran Rawat Jalan$/, async () => {
    await HomePageDhealth.clickButtonPendaftaranRJ();
});

When(/^I can see Pendaftaran page with burger menu on Pendaftaran Rawat Jalan$/, async () => {
    await PendaftaranPage.verifyPagePendaftaranRJ();
})
//////////////////////////////////
When(/^I click dropdown menu Transaksi$/, async () => {
    await PendaftaranPage.clickDropdownTransaksi();
})

When(/^I click Transaksi child menu Pendaftaran Pasien$/, async () => {
    await PendaftaranPage.clickChildMenuPendaftaranPasien();
})

When(/^I click Loket Asuransi$/, async () => {
    await PendaftaranPage.clickLoketAsuransi();
})

When(/^I click Yes$/, async () => {
    await PendaftaranPage.clickYes();
})

When(/^I can see form Pendaftaran Pasien$/, async () => {
    await PendaftaranPage.verifyFormPendaftaranPasien();
})
//////////////////////////////////////
When(/^I click Cara Bayar dropdown$/, async () => {
    await PendaftaranPage.clickCaraBayarDropdown();
})

When(/^I choose cara bayar Private$/, async () => {
    await PendaftaranPage.chooseCaraBayarPrivate();
})

When(/^I uncheck pasien lama checkbox$/, async () => {
    await PendaftaranPage.clickCheckboxPasienLama();
})

When(/^I click submit$/, async () => {
    await PendaftaranPage.clickSubmit();
})
////////////////////////////////////////////////////
When(/^I input nama pasien field$/, async () => {
    await PendaftaranPage.inputNamaPasien();
})

When(/^I input tanggal lahir$/, async () => {
    await PendaftaranPage.inputTanggalLahirPasien();
})

When(/^I choose male on jenis kelamin radio button$/, async () => {
    await PendaftaranPage.clickMaleJenisKelamin();
})

When(/^I click Selanjutnya button$/, async () => {
    await PendaftaranPage.clickSelajutnyaButton();
})