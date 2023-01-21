const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const btn = document.querySelector('button');

btn.addEventListener('click', add);
form.addEventListener("change", save)


function add(){
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        alert("Dia já incluso. 🚨")
        return;
    }

    alert("Adicionado com sucesso ✔")
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NlwSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NlwSetup@habits")) || {};
nlwSetup.setData(data);
nlwSetup.load();