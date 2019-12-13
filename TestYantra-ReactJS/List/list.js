const items = React.createElement('ul', { id: "hot drinks" },
    React.createElement('li', { id: 'coffee' }, 'coffee'),
    React.createElement('li', { id: 'tea' }, 'tea'))

const mobiles = ['Honor', 'Oppo', 'Samsung', 'Nokia', 'Redmi', 'Lenovo', 'Oppo']
const mobileList = React.createElement('ul',null,
    mobiles.map((mobile, index) => {
        return React.createElement('li', {
            key: `${mobile} ${index}`
        }, mobile)
    }))

    const allItems =  React.createElement('div',null,items,mobileList)
    ReactDOM.render(allItems,
          document.getElementById('react-container'))    

// console.log("items : ", items)
// ReactDOM.render(mobileList,
//     document.getElementById('react-container'))


