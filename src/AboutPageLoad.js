export default function AboutPageLoad(contentContainer) {
    function createQuestion(question, answer) {
        let temp1 = document.createElement("h3");
        temp1.textContent = question;
        contentContainer.appendChild(temp1);

        let temp2 = document.createElement("li");
        temp2.textContent = answer;
        contentContainer.appendChild(temp2);
    }

    const faqTitle = document.createElement("h1");
    faqTitle.textContent = "Questions";
    contentContainer.appendChild(faqTitle);
    
    createQuestion("What you got?", "Chicken");
    createQuestion("How is it?", "It's good");
    createQuestion("Are you open?", "Yes");
    createQuestion("What's your number?", "Call the tire shop ask for Mo");
    createQuestion("Is Jimmy there?", "Yeah, I'm here");
}