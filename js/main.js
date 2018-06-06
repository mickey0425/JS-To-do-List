//input enter even
const input = document.getElementById('enter');
const button = document.getElementById('addbutton');

input.addEventListener('keypress',enterValue);
button.addEventListener('click',additem);

function enterValue(e) {
  
  if (e.keyCode === 13) {
    additem();
  }
}

//add new item function :
function additem() {

  let inputValue = input.value;
  //取得輸入activity值
  // console.log(inputValue);

  if(inputValue !== '') {

    const activityList = document.getElementById('itemList');
    //宣告itemList節點 (activity list)

    const createDiv = document.createElement('div');
    const createP = document.createElement('p');
    const createEditIcon = document.createElement('i');
    const createDeleteIcon = document.createElement('i');
    //var creatElement

    createDiv.className = 'activity'
    createEditIcon.className = 'fas fa-edit';
    createDeleteIcon.className = 'far fa-trash-alt';

    //add Icon click event
    createEditIcon.addEventListener('click', editItem);
    createDeleteIcon.addEventListener('click', deleteItem);


    createP.textContent = inputValue; //<p>傳入輸入值</P>

    createDiv.appendChild(createP);
    createDiv.appendChild(createEditIcon);
    createDiv.appendChild(createDeleteIcon);
    activityList.appendChild(createDiv);

    document.getElementById("enter").value = '';
    //清除已輸入內容,方便繼續輸入new activity
  }

}

//delete activity function
function deleteItem() {
  let item = this.parentNode; //DeleteIcon 的父層
  let itemlist = this.parentNode.parentNode; //DeleteIcon 的父層的父層

  itemList.removeChild(item); //itemlist 刪除 item
  // addCounter--;
}

//deit activity function
function editItem() {

  let createInput = document.createElement('input');
  createInput.placeholder = "Modify content";
  //宣告createInput , input placeholder = "Modify content"

  let item = this.parentNode; //icon的父層
  item.appendChild(createInput);

  createInput.focus();  //focus 在input 可直接打字

   //blur: 消除input
  createInput.addEventListener('blur', (e) => {

    e.currentTarget.remove();  //清除input

  })

  createInput.addEventListener('keypress', (e) => {

    if (e.keyCode === 13) {

      let editValue = e.currentTarget.value;
      //修改內容值＝e.currentTarget.value

      if (editValue !== '') {

        let addNewP = document.createElement('p');
        let originalP = item.firstChild;  //icon的父層 第一個子元素

        addNewP.textContent = editValue;  //新的P標籤內容值＝editValue
        item.replaceChild(addNewP, originalP);

      }e.currentTarget.blur();  //呼叫blur()清除input
    }
  })
}
