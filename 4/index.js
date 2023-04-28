let table = [
  {id: 1, title: 'таблица', table: 20 },
]

const toHTML = t1 => `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${t1.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="table" data-id="${t1.id}">Посмотреть таблицу</a>
      </div>
    </div>
  </div>
`

function render() {
  const html = table.map(toHTML).join('')
  document.querySelector('#table').innerHTML = html
}

render()

const tableModal = $.modal({
  title: 'таблица',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Закрыть', type: 'primary', handler() {
      tableModal.close()}
    }
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const t = table.find(f => f.id === id)

  if (btnType === 'table') {
    tableModal.setContent(`
      <p><table>
                <thead>
                    <tr>
                        <td>№ пп</td>
                        <td>Название</td>
                        <td>Адрес</td>
                        <td>Район</td>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>1</td>
                        <td>Название 1</td>
                        <td>Адрес 1</td>
                        <td>Район 1</td>
                    </td>
                     <tr>
                        <td>2</td>
                        <td>Название 2</td>
                        <td>Адрес 2</td>
                        <td>Район 2</td>
                    </td>
                     <tr>
                        <td>3</td>
                        <td>Название 3</td>
                        <td>Адрес 3</td>
                        <td>Район 3</td>
                    </td>
                     <tr>
                        <td>4</td>
                        <td>Название 4</td>
                        <td>Адрес 4</td>
                        <td>Район 4</td>
                    </td>
                     <tr>
                        <td>5</td>
                        <td>Название 5</td>
                        <td>Адрес 5</td>
                        <td>Район 5</td>
                    </td>
                     <tr>
                        <td>6</td>
                        <td>Название 6</td>
                        <td>Адрес 6</td>
                        <td>Район 6</td>
                    </td>
                     <tr>
                        <td>7</td>
                        <td>Название 7</td>
                        <td>Адрес 7</td>
                        <td>Район 7</td>
                    </td>
                     <tr>
                        <td>8</td>
                        <td>Название 8</td>
                        <td>Адрес 8</td>
                        <td>Район 8</td>
                    </td>
                     <tr>
                        <td>9</td>
                        <td>Название 9</td>
                        <td>Адрес 9</td>
                        <td>Район 9</td>
                    </td>
                     <tr>
                        <td>10</td>
                        <td>Название 10</td>
                        <td>Адрес 10</td>
                        <td>Район 10</td>
                    </td>
                </tbody>
            </table></p>
    `)
    tableModal.open()
  }
})
