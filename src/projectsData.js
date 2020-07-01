export const projects = [
  {
    id: "1",
    name: "Musical Instrument E-Commerce Store (REACT)",
    description:
      "A mock-up for an e-commerce site, with shopping cart functionality, built with React. The app contains a main shop page, a dynamic product-details page, each with add-to-cart functionality. The cart contains functionality to add and remove number of items. The web-site is responsive for desktop, tablet and mobile devices.",
    techStack:
      "HTML, CSS, Javascript, React: Context API, Hooks - useState useEffect useContext, React Router, Styled-Components",
    challenges:
      "Complex state management without using Redux. Making global state and setState functions available without prop-drilling. Styling small re-usable components sticking to DRY principles.",
    solutions:
      "Context API for providing global state, using Styled-Components instead of regular CSS",
    code: "https://github.com/ishaan-ner/music-ecommerce",
    website: "https://react-music-ecommerce.netlify.app/",
    image: "/music.png",
  },
  {
    id: "2",
    name: "Resume Builder (REACT)",
    description:
      "A React SPA that enables the user to build and customize a professional Resume, select templates and color-schemes.",
    techStack: "HTML, CSS, Javascript, React, Material UI",
    challenges:
      "Creating and managing state for a complex, nested form without external libraries/dependencies. Providing form input data to other components for rendering a preview.",
    solutions:
      "Using curried functions as onChange event handlers for form input management. Also considered using the usReducer hook, but the form was not complex enough",
    code: "https://github.com/ishaan-ner/resume-builder",
    website: "https://ishaan-ner.github.io/resume-builder/",
    image: "/resume.png",
  },
  {
    id: "3",
    name: "Spotify Home-page Clone (REACT)",
    description:
      "A clone of the landing page for the music streaming app Spotify. Contains dynamically rendered playlist and song views, and a pixel perfect mockup with HTML and SCSS",
    techStack: "HTML, CSS, Javscript, React, SASS",
    challenges:
      "Using pure CSS and HTML to code a pixel-perfect mockup of the original using best practices. Using React to dynamically render views for playlists. Creating a sign-up modal with React.",
    solutions:
      "Used CSS Grid for rendering playlist views, SVGs for accurately scaled icons, designed a modal controlled by React global state.",
    code: "https://github.com/ishaan-ner/spotify-clone",
    website: "https://ishaan-ner.github.io/spotify-clone/",
    image: "/spotify.png",
  },
];
