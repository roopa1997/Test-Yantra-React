const arr = [{ name: 'roopa', phone: 22334455 }, { name: 'sunitha', phone: 22334455 }]
const table = React.createElement('table', { id: 'table1',className: 'table' },
    React.createElement('thead', {className:'thead'},
        React.createElement('th', null, 'Name'), React.createElement('th', null, 'Phone')),

        arr.map((a, index) => {
            return React.createElement('tr', null,
                React.createElement('td', null, arr[index].name),
                React.createElement('td', null, arr[index].phone))

        
    })

    )

   /*  const mobiles = ['Honor', 'Oppo', 'Samsung', 'Nokia', 'Redmi', 'Lenovo', 'Oppo']
    const mobileList = React.createElement('ul',null,
        mobiles.map((mobile, index) => {
            return React.createElement('li', {
                key: `${mobile} ${index}`
            }, mobile)
        }))
 */

const hotDrinks = ['coffee', 'tea']
const ulElement = React.createElement('ul',null,
hotDrinks.map((h,index)=>{
    return React.createElement('li',{
        key : `${h} ${index}`
    },h)
})
)

        const allItems =  React.createElement('div',null,table,ulElement)
    ReactDOM.render(allItems,
          document.getElementById('react-container'))   

//ReactDOM.render(table, document.getElementById('react-container'))

// const items = React.createElement('ul', { id: "hot drinks" },
//         React.createElement('li', { id: 'coffee' }, 'coffee'),
//         React.createElement('li', { id: 'tea' }, 'tea'))

// ReactDOM.render(items, document.getElementById('react-table'))
