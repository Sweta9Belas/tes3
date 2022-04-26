class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th class='table-warning text-center'>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr class='table-dark' >
          <td class='table-warning'>${d[0]}</td>
          <td class='table-info'>${d[1]}</td>  
          <td class='table-danger'>${d[2]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-bordered border-warning table-light table-striped table-hover' style=''>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

export default Table;
