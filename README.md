
Built by https://www.blackbox.ai

---

```markdown
# FreeLogoGen

## Project Overview
FreeLogoGen is a web application that allows users to create customized logos in a matter of minutes. Users can input their logo text, select different fonts, customize colors, and preview their logo instantly. The application is designed to be user-friendly, enabling anyone to generate logos without any prior design experience.

## Installation
To run FreeLogoGen locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd FreeLogoGen
   ```

2. **Open the project in your browser:**
   Open `index.html` in your web browser of choice.

## Usage
1. Navigate to the app's main page (index.html).
2. Enter your desired logo text into the input field.
3. Choose a font from the dropdown menu.
4. Select primary and secondary colors by using the color pickers.
5. Click the "Generate Logo" button to create your logo.
6. Once satisfied with the logo, click the "Download PNG" button to save it to your device.

## Features
- **Custom Logo Generation:** Input your text and customize fonts and colors.
- **Canvas Preview:** Instantly see how your logo looks on a canvas.
- **Download Option:** Easily download your logo as a PNG file.
- **Gallery Inspiration:** View example logos for inspiration.

## Dependencies
The project utilizes the following dependencies:
- **Tailwind CSS**: A utility-first CSS framework to style the application.
- **Google Fonts**: Various font families for styling the logo text.

To include Tailwind CSS in your project, make sure to have the following link in your `index.html`:
```html
<link rel="stylesheet" href="https://cdn.tailwindcss.com">
```

## Project Structure
The project is organized as follows:

```
/FreeLogoGen
│
├── index.html         # Main application page for logo generation
├── gallery.html       # Page displaying logo inspiration gallery
├── style.css          # Custom CSS styles for the application
└── script.js          # JavaScript handling the logo generation logic
```

### Additional Notes
- The custom stylesheets apply basic styling to ensure the application has an appealing layout.
- The JavaScript file includes functionalities for generating the logo and downloading it as an image.

Feel free to explore the code and customize it further as per your needs!
```