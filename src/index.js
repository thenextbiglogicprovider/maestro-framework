import './index.css';
import {
  getUsers, deleteUser
} from "./api/userapi";

getUsers().then(result => {
  let responseBody = "";
  let count = 0;
  result.forEach(user => {
    count++;
    responseBody += `<tr>
<td>${count}</td>
<td>${user.id}</td>
<td>${user.email}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td><a href='#' data-id=${user.id} class='deleteuser'>Delete</a></td>
</tr>`;
  });

  global.document.getElementById('users').innerHTML = responseBody;
  const deleteLinks = global.document.getElementsByClassName('deleteuser');

  Array.from(deleteLinks, link => {
    link.onclick = function (event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row)
;    };
  });
});
