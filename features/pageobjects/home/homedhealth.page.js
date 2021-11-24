import Page from '../base.page';

class HomePage extends Page {

    //Elements
    get SOAPModal() {
        return $('.modal-content');
    }

    get SOAPTitle() {
        return $('.modal-title')
    }

    get SOAPRDBtn() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(1)')
    }
    
    get SOAPRDTitle() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(1) > div.col-md-8 > p.draft-soap--header')
    }

    get SOAPRDCount() {
        return $('#rd-soap')
    }

    get SOAPRJBtn() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(2)')
    }

    get SOAPRJTitle() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(2) > div.col-md-8 > p.draft-soap--header')
    }

    get SOAPRJCount() {
        return $('#rj-soap')
    }

    get SOAPRIBtn() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(3)')
    }

    get SOAPRITitle() {
        return $('#modal-draft-soap > div > div > div.modal-body > div.draft-soap--wrapper > div:nth-child(3) > div.col-md-8 > p.draft-soap--header')
    }

    get SOAPRICount() {
        return $('#ri-soap')
    }

    get SOAPRIRMCount() {
        return $('#ri-rm')
    }

    get closeSOAPBtn() {
        return $('.close')
    }

    get btnAmbulan(){
        return $('div.col-md-1:nth-child(1) > div')
    }

    get tampilkanLebihBanyak(){
        return $('button.btn:nth-child(1)')
    }

    get menuPendaftaran(){
        // return $('div.col-md-1:nth-child(15) > div:nth-child(1)')
        // return $('.panel')
        return $('.col-md-1')
        // return $('//*[text()="Pendaftaran"]')
    }

    get btnPendaftaranRJ(){
        return $('div.col-md-4:nth-child(5)')
    }

    // get (){
    //     return $('')
    // }

    get titlePage() {
        browser.getTitle();
        // await browser.getTitle();
    }

    async verifySOAPModal() {
        await expect(this.SOAPModal).toBeDisplayed();
        await expect(this.SOAPRDBtn).toBeDisplayed();
        await expect(this.SOAPRDTitle).toHaveTextContaining('Darurat');
        await expect(this.SOAPRDCount).toHaveTextContaining('SOAP');
        await expect(this.SOAPRJBtn).toBeDisplayed();
        await expect(this.SOAPRJTitle).toHaveTextContaining('Jalan');
        await expect(this.SOAPRJCount).toHaveTextContaining('SOAP');
        await expect(this.SOAPRIBtn).toBeDisplayed();
        await expect(this.SOAPRITitle).toHaveTextContaining('Inap');
        await expect(this.SOAPRICount).toHaveTextContaining('SOAP');
        await expect(this.SOAPRIRMCount).toHaveTextContaining('Resume');
        await expect(this.closeSOAPBtn).toBeDisplayed();
    }

    async closeSOAPModal () {
        await this.closeSOAPBtn.click();
    }

    async verifyAllMenuHomepage () {
        await expect(this.btnAmbulan).toBeDisplayed();
    }

    async clickTampilkanLebihBanyak () {
        await this.tampilkanLebihBanyak.click();
    }

    async clickMenuPendaftaran () {
        // await expect(this.menuPendaftaran).toBeDisplayed();
        // await this.menuPendaftaran.toBeDisplayed();
        await browser.pause(5000);
        await this.menuPendaftaran.click();
    }

    async clickButtonPendaftaranRJ () {
        await this.btnPendaftaranRJ.click();
    }
}

export default new HomePage();
