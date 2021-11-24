Feature: Dhealth Daftar RJ - Positive Case

    Background: Open Dhealth Login Page
    Given I am on the login page

    Scenario Outline: As a doctor, I can open Pendaftaran Rawat Jalan menu
    When I login with <username> and <password>
    And I click menu Pendaftaran
    And I click Pendaftaran Rawat Jalan
    And I can see Pendaftaran page with burger menu on Pendaftaran Rawat Jalan
    And I click dropdown menu Transaksi
    And I click Transaksi child menu Pendaftaran Pasien
    # And I click Loket Asuransi
    # And I click Yes
    And I can see form Pendaftaran Pasien
    And I click Cara Bayar dropdown
    And I choose cara bayar Private
    And I uncheck pasien lama checkbox
    And I click submit
    And I input nama pasien field
    And I input tanggal lahir
    And I choose male on jenis kelamin radio button
    Then I click Selanjutnya button

    Examples:
      | username     | password             |
      | dev-daftar2  | 123                  |
      