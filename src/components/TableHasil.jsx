import React from 'react';
import NavBar from './NavBar';

function TableHasil() {
    return ( 
        <div>
            <NavBar class="mb-5"/>
            <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div className='mt-12'>
                <h2 class="mt-12 text-2xl font-semibold leading-tight">Result</h2>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Ruangan
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Waktu
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Input Suhu
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                        ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img
                                class="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                Rohayati
                                </p>
                                <p class="text-gray-600 whitespace-no-wrap">000004</p>
                            </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Dispensing</p>
                            <p class="text-gray-600 whitespace-no-wrap">ROOM</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Oct 28, 2022</p>
                            <p class="text-gray-600 whitespace-no-wrap">Pagi</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">27 Drajat Celcius</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">Masuk Syarat</span>
                            </span>
                        </td>
                        <td
                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <button
                            type="button"
                            class="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img
                                class="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                Dwiyono
                                </p>
                                <p class="text-gray-600 whitespace-no-wrap">000003</p>
                            </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Redress</p>
                            <p class="text-gray-600 whitespace-no-wrap">ROOM</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Oct 25, 2022</p>
                            <p class="text-gray-600 whitespace-no-wrap">Siang</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">25 Drajat Celcius</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">Masuk Syarat</span>
                            </span>
                        </td>
                        <td
                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <button
                            type="button"
                            class="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img
                                class="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                Indri Utami
                                </p>
                                <p class="text-gray-600 whitespace-no-wrap">000002</p>
                            </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Filling Liquid</p>
                            <p class="text-gray-600 whitespace-no-wrap">ROOM</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Oct 14, 2022</p>
                            <p class="text-gray-600 whitespace-no-wrap">Sore</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">29 Drajat Celcius</p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <span
                            class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">Tidak Masuk Syarat</span>
                            </span>
                        </td>
                        <td
                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                        >
                            <button
                            type="button"
                            class="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                        <tr>
                        <td class="px-5 py-5 bg-white text-sm">
                            <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img
                                class="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                alt=""
                                />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-900 whitespace-no-wrap">
                                Vicky Fadilla
                                </p>
                                <p class="text-gray-600 whitespace-no-wrap">000001</p>
                            </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Filling Semi Solid</p>
                            <p class="text-gray-600 whitespace-no-wrap">ROOM</p>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Oct 6, 2022</p>
                            <p class="text-gray-600 whitespace-no-wrap">
                            Pagi
                            </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">27 Drajat Celcius</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                            >
                            <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span class="relative">Masuk Syarat</span>
                            </span>
                        </td>
                        <td class="px-5 py-5 bg-white text-sm text-right">
                            <button
                            type="button"
                            class="inline-block text-gray-500 hover:text-gray-700"
                            >
                            <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                            >
                                <path
                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div></div>
     );
}

export default TableHasil;