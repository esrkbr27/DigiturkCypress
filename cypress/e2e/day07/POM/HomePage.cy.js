 class HomePage {

    getSigninButton(){
        return cy.contains('Giriş Yap').click()
    }

}
export default HomePage

/*
POM Dosyasındaki mantık Selenyumdaki ile benzerdir. Oluşturduğumuz classların içerisine
o sayfada yer alan locateleri return eden metotlar oluşturduk.En alta da "export default HomePage"
kod satırını yazdık.
Testlerimizi yazdığımız classta ise bu metotları kullanmak için önce bu class import edilir:En başa şu
(import LoginPage from "./POM/LoginPage.cy") kod satırı yazılır.
Sonra it() içerisinde obje oluşturulup metot çağırılır.



*/