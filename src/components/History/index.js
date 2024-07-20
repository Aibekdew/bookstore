import React, { useContext } from 'react'
import { BookShopContext } from '../../context';

function History() {
    const {history} = useContext(BookShopContext)
    return (
        <div>
       <div className="container">

       <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
       {
        history.map((el) => (
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {el.name}
                </th>
                <td class="px-6 py-4">
                   {el.address}
                </td>
                <td class="px-6 py-4">
                   {el.day}.{el.mounth}.{el.year}
                </td>
                <td class="px-6 py-4">
                   {el.hours}:{el.time}:{el.seconds}
                </td>
            </tr>
            
        </tbody>
        ))
       }
    </table>
</div>

       </div>
        </div>
    )
}

export default History;
