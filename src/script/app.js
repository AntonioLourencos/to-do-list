const ButtonAdd = document.getElementById("ButtonAdd");
ButtonAdd.addEventListener("click", GetNewItem);

function GetNewItem() {
    const NewItemTittle = document.getElementById("NewItemTittle")
    const NewItemDo = document.getElementById("newItem");
    if (NewItemDo.value !== '' && NewItemTittle.value !== '') {
        CreateNewItem(NewItemDo.value, NewItemTittle.value);
        NewItemTittle.value = '';
        NewItemDo.value = '';
    } else if (NewItemDo.value === '' || NewItemTittle.value === '') {
        OpenAlertNoHave();
    }
}

function CreateNewItem(ItemDo, ItemDoTittle) {
    const works = document.getElementById("works");
    const container = document.createElement("div");
    const myworkHeader = document.createElement("div");
    const myWorkButtons = document.createElement("div");
    const myworkFinish = document.createElement("button")
    const myworkEdit = document.createElement("button")
    const myWorkDelete = document.createElement("button");
    const myworkContent = document.createElement("div");
    const tittle = document.createElement("h2");
    const paragraph = document.createElement("input");
    let tittleField = ItemDoTittle;
    let textField = ItemDo;

    works.append(container);
    container.className = "mywork-container";
    container.id = tittleField;
    container.appendChild(myworkHeader);
    container.appendChild(myworkContent);

    myworkHeader.className = "mywork-header";
    myworkHeader.append(tittle);
    myworkHeader.append(myWorkButtons);
    myWorkButtons.append(myworkFinish);
    myWorkButtons.append(myworkEdit);
    myWorkButtons.append(myWorkDelete);
    myworkFinish.textContent = "Finish";
    myworkEdit.textContent = "Edit";
    myWorkDelete.textContent = "Remove";

    myworkFinish.addEventListener("click", () => {
        FinishWork(paragraph, myworkFinish)
    })
    myworkEdit.addEventListener("click", () => {
        EditItem(tittle, paragraph);
    })
    myWorkDelete.addEventListener("click", () => {
        CheckdeleteItem(container.id);
    })

    tittle.textContent = tittleField;

    myworkContent.className = "mywork-content";
    myworkContent.append(paragraph);
    paragraph.type = "text";
    paragraph.className = "mywork-field";
    paragraph.disabled = true;
    paragraph.value = textField;
}

function FinishWork(props, myworkFinish) {
    let paragraph = props;
    if (myworkFinish.textContent === "Finish") {
        myworkFinish.textContent = "Back";
        paragraph.className = "mywork-field mywork-finish";
    } else if (myworkFinish.textContent === "Back") {
        myworkFinish.textContent = "Finish";
        paragraph.className = "mywork-field";
    }
}

function CheckdeleteItem(props) {
    const buttonCheckDelete = document.getElementById("delete");
    let item = document.getElementById(props);
    buttonCheckDelete.addEventListener("click", DeleteItem)
    OpenDeleteItem();

    function DeleteItem() {
        item.remove();
        CloseDeleteItem();
    }
}

function EditItem(tittle, paragraph) {
    const ButtonSave = document.getElementById("saveEdit");
    const EditItemTittle = document.getElementById("EditItemTittle");
    const EditItemText = document.getElementById("EditItemText");
    EditItemTittle.value = tittle.textContent;
    EditItemText.value = paragraph.value;
    ButtonSave.addEventListener("click", () => {
        FinishEdit()
    })
    OpenEdit();
    function FinishEdit() {
        if (EditItemTittle.value !== '' && EditItemText.value !== '') {
            tittle.textContent = EditItemTittle.value;
            paragraph.value = EditItemText.value;
            CloseEdit();
        } else if (EditItemTittle.value === '' || EditItemText.value === '') {
            OpenAlertNoHave();
        }

    }
}

function OpenAlertNoHave() {
    const noHave = document.getElementById("noHaveContent");
    noHave.style.display = "flex";
    noHave.style.zIndex = '2';
}

function CloseAlertNoHave() {
    const noHave = document.getElementById("noHaveContent");
    noHave.style.display = "none";
}

function OpenDeleteItem() {
    const DeleteItem = document.getElementById("DeleteItem");
    DeleteItem.style.display = "flex";
}
function CloseDeleteItem() {
    const DeleteItem = document.getElementById("DeleteItem");
    DeleteItem.style.display = "none";
}
function OpenEdit() {
    const editItem = document.getElementById("editItem");
    editItem.style.display = "flex";
}
function CloseEdit() {
    const editItem = document.getElementById("editItem");
    editItem.style.display = "none";
}