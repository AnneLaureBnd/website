const loc = window.location.pathname;
console.log(loc);
switch(loc) {
    case ("/Applications/MAMP/al-bonnefond%20copie/index.html") :
        let index = document.querySelector('.index');
        index.classList.add('active');
        break;

    case ("/Applications/MAMP/al-bonnefond%20copie/views/career.html") :
        let career = document.querySelector('.career');
        career.classList.add('active');
        break;

    case ("/Applications/MAMP/al-bonnefond%20copie/views/projects.html") :
        let projects = document.querySelector('.projects');
        projects.classList.add('active');
        break;

    case ("/Applications/MAMP/al-bonnefond%20copie/views/cv.html") :
        let cv = document.querySelector('.cv');
        cv.classList.add('active');
        break;

    default :
        console.log("ERREUR");
}