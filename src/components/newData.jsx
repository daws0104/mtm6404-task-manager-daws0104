import React from "react"
import Form from "Form"

function newData() {
    let newtitle = document.getElementById('title').value
    let newpri = document.getElementById('pri').value
    let newstatus = document.getElementById('status').value
  
    if (newtitle != '') {
  
  
      // create a new object
      let object = {
        title: newtitle,
        pri: newpri,
        status: newstatus,
      }
      exsample.push(object)
  
    }
      // display the new object on the table
      return (
          <li className="fantasy-items" key={listitem.id}>{listitem.pri} {listitem.title} {listitem.status} <br></br>X</li>
  );
    //   addtask.push(`
    //     <div class="contanier">
    //         <p class="style-firstname">${object.firstname} ${object.lastname}</p>
    //     </div>
    // `)
  
    //   $addtask.innerHTML = contact.join('')
    // }
  }

export default newData;