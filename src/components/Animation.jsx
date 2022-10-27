import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function AnimationSucces() {
  return (
    <div>
    <NavBar/>
    <div class="min-h-screen flex flex-col items-center justify-center bg-blue-600 pb-48">
      <h2 class="text-4xl text-purple-100 mb-8">
        Suhu Siang Ruangan Dispensing 27 Drajat Celcius
      </h2>

      <div class="flex space-x-8 text-3xl">
        <NavLink to={"/tabelhasil"}>
        <button class="animate-bounce inline-block py-4 px-8 bg-teal-500 text-teal-100 rounded-lg">
          Masuk Syarat
        </button>

        </NavLink>
      </div>
    </div>

    </div>
  );
}

export default AnimationSucces;
