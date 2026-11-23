const startBtn = document.getElementById("startBtn");
const giftForm = document.getElementById("giftForm");
const findBtn = document.getElementById("findBtn");
const result = document.getElementById("result");
const giftList = document.getElementById("giftList");

startBtn.addEventListener("click", function() {
    giftForm.classList.remove("hidden");
});

findBtn.addEventListener("click", function() {

    const person = document.getElementById("person").value;
    const occasion = document.getElementById("occasion").value;
    const budget = Number(document.getElementById("budget").value);

    let gifts = [];

    if (budget === 300) {
        gifts = ["Cute Keychain", "Greeting Card", "Chocolate Box"];
    }
    else if (budget === 500) {
        gifts = ["Photo Frame", "Personalised Mug", "Mini Gift Hamper"];
    }
    else {
        gifts = ["Watch", "Gift Hamper", "Personalised Album"];
    }

    giftList.innerHTML = `
        <p><b>For:</b> ${person}</p>
        <p><b>Occasion:</b> ${occasion}</p>
        <h3>Recommended Gifts:</h3>
        <ul>
            ${gifts.map(gift => `<li>${gift}</li>`).join("")}
        </ul>
    `;

    result.classList.remove("hidden");

});