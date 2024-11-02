## 🌿 Campaign Poster Generator

This notebook is a submission for the **GHCI 2024 hackathon** organized by AnitaB.org India, which aims to create a solution that can be integrated with generative AI for environmental sustainability and creative AI innovations. It showcases an AI-powered tool for generating environmental campaign posters using Gradio. The tool leverages the Stable Diffusion model to create images based on user-defined parameters, such as region, language, and specific environmental issues. Users can add custom slogans with color-coded text based on keywords. The interface simplifies the process of creating visually impactful posters, promoting awareness for sustainability initiatives.

## Features

- **Generative AI:** Uses the Stable Diffusion model enhanced with Dreambooth to generate high-quality, customized images based on user-defined parameters.
- **Customizable Inputs:** Allows users to specify region, language, environmental issue, additional details, and slogans to personalize poster designs.
- **Dynamic Text Overlay:** Adds impactful, color-coded slogans based on relevant keywords, enhancing the visual message.
- **User-Friendly Interface:** Built with Gradio to offer an intuitive and accessible experience for all users.

## Running the Notebook

**Note:** This project requires a GPU to run efficiently, especially for generating images using the Stable Diffusion model.

### Steps to Run in Google Colab

1. **Open Google Colab:**
   Go to [Google Colab](https://colab.research.google.com/).

2. **Make a Copy:**
   Click on `File` > `Save a copy in Drive` to create a personal copy of the notebook.

3. **Enable GPU:**
   - Click on `Runtime` > `Change runtime type`.
   - Set "Hardware accelerator" to `GPU`, then click `Save`.

4. **Run Each Block:**
   Execute each code block sequentially by clicking the play button (▶️) next to each cell. Make sure to run the cells in the correct order to ensure all dependencies are loaded properly.

5. **Use the App:**
   After executing all necessary blocks, the Gradio interface will launch. Enter the required parameters to generate your campaign poster.


### Requirements

To ensure the proper functioning of the Campaign Poster Generator, make sure to install the following packages:

- `torch` - For handling deep learning tasks.
- `transformers` - For using pretrained models and processing inputs.
- `diffusers` - For generating images using diffusion models.
- `gradio` - For creating the web interface.
- `Pillow` - For image processing.
- `opencv-python` - For adding text to images and other image manipulations.
- `numpy` - For numerical operations.
  
### Working
## 1
![image](https://github.com/user-attachments/assets/32a68259-0e90-414d-8907-3b5ea898842a)

## 2
![image](https://github.com/user-attachments/assets/48fcad2c-8483-44c6-bdef-3b04fcd11bca)



## Author

**Lata**  
**Date:** November 2, 2024


