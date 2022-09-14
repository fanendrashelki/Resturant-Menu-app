import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar';


const uniqueList = [
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })),
    "All", "Order",
]

// console.log(uniqueList)

const Resturant = () => {

    const [menuData, setmenuData] = useState(Menu)
    const [menuList, setmenuList] = useState(uniqueList)

    const filterItem = (category) => {
        // console.log(category);
        if (category === 'All') {
            setmenuData(Menu)
            return;
        }
        else if (category === 'Order') {
            let Data = JSON.parse(localStorage.getItem('order') || '[]')
            // console.log(Data);
            setmenuData(Data)
           
            return;
        }
        console.log(menuData);

        const updateList = Menu.filter((curElem) => {

            return curElem.category === category
        })
        setmenuData(updateList)
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;