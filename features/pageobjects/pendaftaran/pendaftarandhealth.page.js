import Page from '../base.page';

class PendaftaranPage extends Page {

    //Elements
    get dropdown() {
        return $('.right-navbar > ul:nth-child(1) > li:nth-child(2) > a')
    }

    get transaksi() {
        return $('#mainmenu > li:nth-child(3)')
    }

    get childMenuPendaftaranPasien() {
        return $('.open > ul:nth-child(2) > li:nth-child(8)')
    }

    get yesBtn() {
        return $('.button-yes')
    }

    get loketAsuransi() {
        return $('div.col-sm-4:nth-child(1)')
    }

    get titleForm() {
        return $('h6.panel-title')
    }
    
    get caraBayarDropdown() {
        return $('.select2-container--focus > span:nth-child(1) > span')
    }

    get searchField(){
        return $('.select2-search__field')
    }

    get caraBayarPrivate() {
        return $('.select2-results__option--highlighted')
    }

    get checkboxPasienLama() {
        return $('.notUniform')
    }

    get btnSubmit() {
        return $('.actions > ul:nth-child(1) > li:nth-child(3) > a')
    }

    get namaPasien() {
        return $('#frm-pasien-nama_pasien')
    }

    get tanggalLahirPasien() {
        // return $('.picker__input')
        return $('//input[@id="frm-pasien-tanggal_lahir"]')
        // return $('#frm-pasien-tanggal_lahir')
    }

    get maleJenisKelamin() {
        return $('label.radio-inline:nth-child(1) > div:nth-child(1) > span:nth-child(1) > input:nth-child(1)')
    }

    get selanjutnyaBtn() {
        return $('.actions > ul:nth-child(1) > li:nth-child(2) > a')
    }

    get tanggalLahirPicker() {
        return $('span.input-group-addon:nth-child(6)')
    }

    get tahunLahir(){
        return $('.picker__select--year')
    }

    get hariLahir1(){
        return $('.picker--opened > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div')
    }

    get tahunLahir2015(){
        return $('/html/body/div[4]/div/div/div[1]/div/div/div[2]/form/div/div/div[2]/div/div[2]/div[2]/fieldset[2]/div[1]/div/div/div[1]/div[3]/div[2]/div/div/div[1]/div/div/div/div/div[1]/select[1]/option[5]')
    }

    // get btnPendaftaranRJ(){
    //     return $('div.col-md-4:nth-child(5)')
    // }

    // get (){
    //     return $('')
    // }

    get titlePage() {
        browser.getTitle();
        // await browser.getTitle();
    }

    async verifyPagePendaftaranRJ() {
        await expect(this.dropdown).toHaveText('Pendaftaran Rawat Jalan')
    }

    async clickDropdownTransaksi () {
        await this.transaksi.click();
    }

    async clickChildMenuPendaftaranPasien () {
        browser.pause(2000);
        await this.childMenuPendaftaranPasien.click();
    }

    async clickYes () {
        await this.yesBtn.click();
    }

    async clickLoketAsuransi () {
        await this.loketAsuransi.click();
    }

    async verifyFormPendaftaranPasien () {
        await expect(this.titleForm).toHaveText('Form Pendaftaran')
    }
////////////////////////////
    async clickCaraBayarDropdown () {
        await this.caraBayarDropdown.click();
    }

    async chooseCaraBayarPrivate () {
        await this.searchField.setValue('private');
        await this.caraBayarPrivate.click();
    }

    async clickCheckboxPasienLama () {
        await this.checkboxPasienLama.click()
    }

    async clickSubmit () {
        await this.btnSubmit.click()
        // await browser.pause(3000);
    }
//////////////////////////////////////
    async inputNamaPasien () {
        await browser.pause(1000)
        await this.namaPasien.setValue('soleh')
    }

    async inputTanggalLahirPasien () {
        await this.tanggalLahirPicker.click()
        await this.tahunLahir.click()
        await this.tahunLahir2015.click()
        await this.hariLahir1.click()
        // await this.tanggalLahirPasien.setValue('11-11-1991')
        // await this.tanggalLahirPasien.setValue('11-11-1991')
        await browser.pause(5000)
    }

    async clickMaleJenisKelamin () {
        await this.maleJenisKelamin.click();
    }

    async clickSelajutnyaButton () {
        await this.selanjutnyaBtn.click();
        await browser.pause(3000)
    }
        
}

export default new PendaftaranPage();
