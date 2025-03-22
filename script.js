document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const startbtn = document.querySelector(".startbtn");
    const backbtn = document.querySelector(".back-btn");
    const clas1Tog = document.querySelector(".class1");
    const clas2Tog = document.querySelector(".class2");
    const clas3Tog = document.querySelector(".class3");
    const clas4Tog = document.querySelector(".class4");
    const classbackBtn = document.querySelector(".classback-btn");
    const classbackBtnTwo = document.querySelector(".classback-btn_two");
    const classbackBtnThree = document.querySelector(".classback-btn_three");
    const classbackBtnFour = document.querySelector(".classback-btn_four");
    const faqs = document.querySelectorAll(".faq");

    /**
     * Toggles the category screen
     */
    const toggleScreen = () => {
        wrapper.classList.toggle("show-category");
    };

    /**
     * Toggles between different screens
     */
    const toggleScreenPage1 = () => {
        wrapper.classList.toggle("show-page1");
    };
    const toggleScreenPage2 = () => {
        wrapper.classList.toggle("show-page2");
    };
    const toggleScreenPage3 = () => {
        wrapper.classList.toggle("show-page3");
    };
    const toggleScreenPage4 = () => {
        wrapper.classList.toggle("show-page4");
    };

    // ✅ Attach event listeners **ONLY IF ELEMENT EXISTS**
    if (startbtn) startbtn.addEventListener("click", toggleScreen);
    if (backbtn) backbtn.addEventListener("click", toggleScreen);
    
    if (clas1Tog) clas1Tog.addEventListener("click", toggleScreenPage1);
    if (classbackBtn) classbackBtn.addEventListener("click", toggleScreenPage1);
    
    if (clas2Tog) clas2Tog.addEventListener("click", toggleScreenPage2);
    if (classbackBtnTwo) classbackBtnTwo.addEventListener("click", toggleScreenPage2);
    
    if (clas3Tog) clas3Tog.addEventListener("click", toggleScreenPage3);
    if (classbackBtnThree) classbackBtnThree.addEventListener("click", toggleScreenPage3);

    // ❌ Uncomment below if Gallery should work
    // if (clas4Tog) clas4Tog.addEventListener("click", toggleScreenPage4);
    // if (classbackBtnFour) classbackBtnFour.addEventListener("click", toggleScreenPage4);

    // ✅ Ensure FAQ toggle works without errors
    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});