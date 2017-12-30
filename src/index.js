import './index.css';
import {
  getUsers
} from "./api/userapi";

getUsers().then(result => {
  let responseBody = "";

  result.forEach(user => {
    responseBody += `<tr>
<td>${user.id}</td>
<td>${user.email}</td>
<td>${user.name}</td>
<td>${user.age}</td>
</tr>`;
  });

  global.document.getElementById('users').innerHTML = responseBody;
});
