 function addCD() {
            const author = document.getElementById("txtname").value;
            const title = document.getElementById("txttitle").value;
            const year = document.getElementById("txtyear").value;

            const tableBody = document.getElementById("cdTable").getElementsByTagName('tbody')[0];
            const newRow = tableBody.insertRow(tableBody.rows.length);

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);

            cell1.innerHTML = author;
            cell2.innerHTML = title;
            cell3.innerHTML = year;
            cell4.innerHTML = '<button type="button" onclick="deleteCD(this)">🗑️</button>';
        }

        function deleteCD(button) {
            const row = button.parentNode.parentNode;
            row.parentNode.removeChild(row); 
        }