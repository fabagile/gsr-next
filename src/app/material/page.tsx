import React from 'react'
import Title from '../components/typo/Title'
// import { DiVim } from 'react-icons/di'

const Material = () => {
  const sample = [
    { code: "", serial: "BBGF00843", model: "Canon imagePROGRAF TX-3200", room: "FB020" },
    { code: "00000109", serial: "E000111208005", model: "Horoquartz LB5 RESEAU", room: "FB010" },
    { code: "00001294", serial: "3CQ049BL9R", model: "ECRAN LCD 19''", room: "FB024" },

    //          BBGF00843	Canon imagePROGRAF TX-3200	FB020
    // 00000109	E000111208005	Horoquartz LB5 RESEAU	FB010
    // 00001294	3CQ049BL9R	ECRAN LCD 19''	FB024
  ]
  return (<>
    <section className='text-center'>
      <Title  >Matériel</Title>
      {sample.map((item, i) => <div className='grid grid-cols-4' key={i}>{Object.values(item).map((val, v) => <div key={v}>{val}</div>)}</div>)}
      {/* <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-3 md:p-4 xl:p-5 dark:bg-gray-900">
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/simple-search-bar">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/simple-search-bar/thumb_u.min.webp"
                    alt="Simple Search Bar" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/simple-search-bar">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Simple Search Bar
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Minimalist design</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/responsive-navbar-with-dark-mode-support">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/responsive-navbar-with-dark-mode-support/canvas.min.webp"
                    alt="Responsive navbar with dark mode support" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/responsive-navbar-with-dark-mode-support">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Responsive navbar with dark mode support
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Sidebar on small screen devices</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/profile-form">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/profile-form/thumb_u.min.webp"
                    alt="Profile Form" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/profile-form">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Profile Form
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Profile form for taking user inputs
                </p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/heading-with-left-border">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/heading-with-left-border/thumb_u.min.webp"
                    alt="Heading with left border" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/heading-with-left-border">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Heading with left border
                    </h5>
                </a>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/full-width-header-with-gradient">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/full-width-header-with-gradient/thumb_u.min.webp"
                    alt="Full width header with gradient." loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/full-width-header-with-gradient">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Full width header with gradient.
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Header component for showing Info.</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/tagbutton-cloud">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/tagbutton-cloud/thumb_u.min.webp"
                    alt="Tag/Button Cloud" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/tagbutton-cloud">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Tag/Button Cloud
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Responsive tag cloud. Created with
                    FlexBox</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/button-group">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/button-group/thumb_u.min.webp"
                    alt="Button Group" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/button-group">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Button Group
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Add class to clicked Element using
                    JavaScript</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/404-error-page">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/404-error-page/thumb_u.min.webp"
                    alt="404 Error Page" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/404-error-page">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        404 Error Page
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Minimal 404 for your project</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/hero-header-with-search-button">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/hero-header-with-search-button/thumb_u.min.webp"
                    alt="Hero Header with search button" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/hero-header-with-search-button">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Hero Header with search button
                    </h5>
                </a>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <div class="p-2 flex justify-center">
            <a href="https://tailwindflex.com/team-tailwindflex/alert-mono-color">
                <img class="rounded-lg"
                    src="https://tailwindflex.com/public/images/thumbnails/alert-mono-color/thumb_u.min.webp"
                    alt="Alert mono color" loading="lazy">
            </a>
        </div>
        <div class="px-4 pb-3">
            <div>
                <a href="https://tailwindflex.com/team-tailwindflex/alert-mono-color">
                    <h5
                        class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                        Alert mono color
                    </h5>
                </a>
                <p class="text-gray-600 dark:text-gray-400 text-sm break-all">Dismissible alert card.</p>
            </div>
            <div class="mt-2 flex justify-between">
                <div class="flex gap-3 py-2">
                    <a href="/u/team-tailwindflex">
                        <img src="https://tailwindflex.com/public/images/profile/1.png"
                            class="object-cover w-12 h-12 rounded-full" alt="team-tailwindflex" loading="lazy">
                    </a>
                    <p class="text-gray-600 dark:text-gray-300 hover:text-violet-800 ">
                        <a href="/u/team-tailwindflex" class="text-sm">
                            <small>Author:</small> <br>
                            TailwindFlex
                        </a>
                    </p>
                </div>
                <div class="flex items-center mt-2.5">
                    <span class="text-sm dark:text-gray-400">Ratings</span>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        5.0
                    </span>
                </div>
            </div>
        </div>
    </div>
</div> */}

    </section>
  </>
  )
}

export default Material
