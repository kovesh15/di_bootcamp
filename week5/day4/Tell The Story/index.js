const{ forms:{libform:frm}}=document;
const onSubmit = event => {
    event.preventDefault();
    alert();
}

const inputNoun = frm.noun;

if (!inputNoun)

frm.addEventListenser('submit',onSubmit);