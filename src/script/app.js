const WorkList = [];

const app = () => {
  const ButtonAdd = document.getElementById("ButtonAdd");
  const ButtonTableSettings = document.getElementById("tables-settings");
  ButtonAdd.addEventListener("click", GetNewItem);
  ButtonTableSettings.addEventListener("click", TableSettings);
}

const TableSettings = () => {
  alert("em desenvolvimento");
};

const GetNewItem = () => {
  const NewItemTittle = document.getElementById("NewItemTittle");
  const NewItemDo = document.getElementById("newItem");
  if (NewItemDo.value !== "" && NewItemTittle.value !== "") {
    CreateNewItem(NewItemDo.value, NewItemTittle.value);
    NewItemTittle.value = "";
    NewItemDo.value = "";
  } else if (NewItemDo.value === "" || NewItemTittle.value === "") {
    OpenAlertNoHave();
  }
};

const CreateNewItem = (ItemDo, ItemDoTittle) => {
  const works = document.getElementById("mylist-works");
  const container = document.createElement("div");
  const myworkHeader = document.createElement("div");
  const myworkFooter = document.createElement("div");
  const myWorkButtons = document.createElement("div");
  const myworkFinish = document.createElement("button");
  const myworkEdit = document.createElement("button");
  const myWorkDelete = document.createElement("button");
  const myworkContent = document.createElement("div");
  const tittle = document.createElement("h2");
  const paragraph = document.createElement("input");
  const paragraphFooter = document.createElement("span");
  const time = new Date();
  let tittleField = ItemDoTittle;
  let textField = ItemDo;

  works.append(container);
  container.className = "mywork-container";
  container.id = tittleField;
  container.appendChild(myworkHeader);
  container.appendChild(myworkContent);
  container.appendChild(myworkFooter);

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
    FinishWork(container, tittle, paragraph, myworkFinish);
  });
  myworkEdit.addEventListener("click", () => {
    EditItem(tittle, myworkContent, paragraph);
  });
  myWorkDelete.addEventListener("click", () => {
    CheckdeleteItem(container);
  });

  tittle.textContent = tittleField;

  myworkContent.className = "mywork-content";
  myworkContent.append(paragraph);
  paragraph.type = "text";
  paragraph.className = "mywork-field";
  paragraph.disabled = true;
  paragraph.value = textField;

  myworkFooter.className = "mywork-footer";
  myworkFooter.append(paragraphFooter);
  paragraphFooter.textContent = `Created: ${time.getHours()}:${time.getMinutes()}`;
};

const FinishWork = (container, textTittle, text, myworkFinish) => {
  let tittle = textTittle;
  let paragraph = text;
  if (myworkFinish.textContent === "Finish") {
    myworkFinish.textContent = "Back";
    tittle.className = "mywork-header mywork-finish";
    paragraph.className = "mywork-field mywork-finish";
    container.className = "mywork-container mywork-finish-c";
  } else if (myworkFinish.textContent === "Back") {
    myworkFinish.textContent = "Finish";
    tittle.className = "mywork-header";
    paragraph.className = "mywork-field";
    container.className = "mywork-container";
  }
};

const CheckdeleteItem = (props) => {
  const button = document.getElementById("deleteItem");
  let item = document.getElementById(props.id);
  OpenDeleteItem();

  button.addEventListener("click", () => {
    deleteItem();
  });

  const deleteItem = () => {
    item.remove();
    CloseDeleteItem();
  }
};

const EditItem = (tittle, containerParagraph, paragraph) => {
  const ButtonSave = document.getElementById("saveEdit");
  const EditItemTittle = document.getElementById("EditItemTittle");
  const EditItemText = document.getElementById("EditItemText");
  EditItemTittle.value = tittle.textContent;
  EditItemText.value = paragraph.value;

  ButtonSave.addEventListener("click", () => {
    FinishEdit();
  });

  OpenEdit();

  const FinishEdit = () => {
    if (EditItemTittle.value !== "" && EditItemText.value !== "") {
      tittle.textContent = EditItemTittle.value;
      paragraph.value = EditItemText.value;
      CloseEdit();
    } else if (EditItemTittle.value === "" || EditItemText.value === "") {
      OpenAlertNoHave();
    }
  };
};

const OpenAlertNoHave = () => {
  const noHave = document.getElementById("noHaveContent");
  noHave.style.display = "flex";
  noHave.style.zIndex = "2";
};
const CloseAlertNoHave = () => {
  const noHave = document.getElementById("noHaveContent");
  noHave.style.display = "none";
};
const OpenDeleteItem = () => {
  const DeleteItem = document.getElementById("DeleteItem");
  DeleteItem.style.display = "flex";
};
const CloseDeleteItem = () => {
  const DeleteItem = document.getElementById("DeleteItem");
  DeleteItem.style.display = "none";
};
const OpenEdit = () => {
  const editItem = document.getElementById("editItem");
  editItem.style.display = "flex";
};
const CloseEdit = () => {
  const editItem = document.getElementById("editItem");
  editItem.style.display = "none";
};

const OpenTableSettings = () => {
  const TableSettings = document.getElementById("settingsTable-Modal");
  TableSettings.style.display = "flex";
};

const CloseSettingsTableModal = () => {
  const TableSettings = document.getElementById("settingsTable-Modal");
  TableSettings.style.display = "none";
};

app();
