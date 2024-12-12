/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


// import { Link } from 'react-router-dom';

// const Categories = ({categories}) => {
//     return (
//         <div className=' role="tablist" className="tabs tabs-boxed"'>
//             {
//                 categories.map (category => (
//                     <Link key={category.category} to="/card">
//                         {category.category}
//                     </Link>
//                 ))
//             }
//         </div>
//     );
// };

// export default Categories;