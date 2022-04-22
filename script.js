const questions = document.querySelectorAll(".question-heading");
const contents = document.querySelectorAll(".content");

questions.forEach(function(question){
    question.addEventListener("click", function (e){
        let id = e.currentTarget.id;

        contents.forEach(function(content){
            
            content.classList.remove("active");

            if (content.id === question.id) {
                content.classList.toggle("active");
            }
  
        });
        
    });
});
