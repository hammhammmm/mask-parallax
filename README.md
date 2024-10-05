
# **Sticky Mask Zoom Effect Project**

A smooth zoom animation effect using sticky positioning, CSS masks, and a video background. This project demonstrates how to create an interactive scrolling animation, where a mask zooms in on a video background as the user scrolls down the page.

## **Table of Contents**
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## **Demo**
Check out the live demo of the project:
[Live Demo](https://mask-parallax.vercel.app/)

## **Features**
- **Sticky Mask Animation:** The video element smoothly zooms in and out based on the user's scroll position.
- **CSS Masking:** Uses a custom SVG mask to create a unique zoom effect on the video.
- **Easing Animations:** Smooth transitions through easing for a fluid user experience.
- **Responsive Design:** Adjusts to different screen sizes and resolutions.

## **Technologies Used**
- **React** – For the UI and rendering logic.
- **Next.js** – To structure the React project and handle routing.
- **CSS Modules** – For styling the components with scoped styles.
- **JavaScript (ES6+)** – For handling scroll-based animations and DOM manipulation.

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/misterhamu/mask-parallax
   ```

2. Navigate to the project directory:
   ```bash
   cd mask-parallax
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at [http://localhost:3000](http://localhost:3000) to see the project in action.

## **Usage**

### Sticky Mask Zoom Effect
1. The animation is triggered when the user scrolls down the page. The mask gradually zooms in, creating a dynamic visual effect over the video.
2. The zoom level is controlled by adjusting the mask size, which is based on the scroll progress.

You can customize the effect by modifying the values in the `useEffect` hook inside the `Home` component.

### Example:
```js
const initialMaskSize = 20; // Starting zoom level
const targetMaskSize = 0.3; // Final zoom level
const easing = 0.15;        // Smooth transition factor
```

To customize the scrollable area, adjust the height of `.container` in the `page.module.css` file.

## **Project Structure**

```
├── public/
│   └── images/
│       └── AdobeStock_342759371.mp4  // Video for the background
│       └── mask.svg                  // SVG mask used for zoom effect
├── styles/
│   └── page.module.css               // CSS modules for styling
├── pages/
│   └── index.js                      // Main component with animation logic
└── README.md                         // Project documentation
```

## **Contributing**

Contributions are welcome! If you'd like to improve this project, feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## **License**

This project is free to use for any purpose without restrictions.
