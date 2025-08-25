const insert = document.getElementById("insert");

document.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <div class="color">
       <table>
        <tr>
            <th>Event Key</th> 
            <th>Event KeyCode</th>
            <th>Event Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>     
       </table>
    </div>
    `
});