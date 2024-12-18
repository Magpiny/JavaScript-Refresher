//createTable(row,cols)

function createTable(row, cols, cell_content) {
  let table = document.querySelector("table");

  for (let i = 0; i < row; i++) {
    let trow = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let data = document.createElement("td");
      data.setAttribute("class", "data");
      data.setAttribute("id", `${i}`);
      if (data.getAttribute("id") == "2") {
        data.textContent = "Sam";
      } else {
        data.textContent = cell_content;
      }

      trow.appendChild(data);
    }
    table.appendChild(trow);
  }

  return table;
}

createTable(12, 9, "KE");

//module.exports = [createTable];
