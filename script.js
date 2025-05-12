// Declare toggle functions BEFORE DOMContentLoaded
const toggleScreen = () => {
    document.querySelector(".wrapper").classList.toggle("show-category");
};
const toggleScreenPage1 = () => {
    document.querySelector(".wrapper").classList.toggle("show-page1");
};
const toggleScreenPage2 = () => {
    document.querySelector(".wrapper").classList.toggle("show-page2");
};
const toggleScreenPage3 = () => {
    document.querySelector(".wrapper").classList.toggle("show-page3");
};
const toggleScreenPage4 = () => {
    document.querySelector(".wrapper").classList.toggle("show-page4");
};

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
	
	const searchBar = document.getElementById("search-bar");
	if (searchBar) {
		searchBar.addEventListener("input", () => {
			const query = searchBar.value.toLowerCase();
			document.querySelectorAll(".event-row").forEach(row => {
				const text = row.textContent.toLowerCase();
				row.style.display = text.includes(query) ? "flex" : "none";
			});
		});
	}

    const courseLinks = {
        "Computer Science": "https://www.wlv.ac.uk/courses/bsc-hons-computer-science/",
        "Engineering": "https://www.wlv.ac.uk/courses/beng-hons-mechanical-engineering/",
        "Medicine": "https://www.wlv.ac.uk/courses/bsc-hons-public-health/",
        "Law": "https://www.wlv.ac.uk/courses/llb-hons-law/",
        "Creative Arts": "https://www.wlv.ac.uk/courses/ba-hons-creative-and-professional-writing-and-media/",
        "Banking and Finance": "https://www.wlv.ac.uk/courses/ba-hons-banking-and-finance/",
        "Business Administration": "https://www.wlv.ac.uk/courses/ba-hons-business-administration/",
        "Journalism": "https://www.wlv.ac.uk/courses/ba-hons-multimedia-journalism/"
    };

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    const toastYes = document.getElementById("toast-yes");
    const toastNo = document.getElementById("toast-no");

    let selectedCourse = "";

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            selectedCourse = card.querySelector("h4").innerText.trim();
            toastMessage.innerText = `Would you like more information about "${selectedCourse}"?`;
            toast.classList.remove("hidden");
        });
    });

    toastYes.addEventListener("click", () => {
        toast.classList.add("hidden");
        const url = courseLinks[selectedCourse];
        if (url) {
            window.open(url, "_blank");
        } else {
            alert("Sorry, the course link isn't available.");
        }
    });

    toastNo.addEventListener("click", () => {
        toast.classList.add("hidden");
    });

    // ✅ Attach screen event listeners AFTER functions are defined
    if (startbtn) startbtn.addEventListener("click", toggleScreen);
    if (backbtn) backbtn.addEventListener("click", toggleScreen);
    
    if (clas1Tog) clas1Tog.addEventListener("click", toggleScreenPage1);
    if (classbackBtn) classbackBtn.addEventListener("click", toggleScreenPage1);
    
    if (clas2Tog) clas2Tog.addEventListener("click", toggleScreenPage2);
    if (classbackBtnTwo) classbackBtnTwo.addEventListener("click", toggleScreenPage2);
    
    if (clas3Tog) clas3Tog.addEventListener("click", toggleScreenPage3);
    if (classbackBtnThree) classbackBtnThree.addEventListener("click", toggleScreenPage3);

    if (clas4Tog) clas4Tog.addEventListener("click", toggleScreenPage4);
    if (classbackBtnFour) classbackBtnFour.addEventListener("click", toggleScreenPage4);

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});
