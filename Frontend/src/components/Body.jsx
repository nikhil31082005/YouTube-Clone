import React from 'react'

function Body() {
    return (
        <>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/* <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    </thead> */}
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Card />
                            </th>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Card />
                            </th>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Card />
                            </th>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                            <td class="px-6 py-4">
                                <Card />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Body