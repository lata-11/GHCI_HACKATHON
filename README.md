## 🌿 Campaign Poster Generator

This notebook is a submission for the **GHCI 2024 hackathon** organized by AnitaB.org India, which aims to create a solution that can be integrated with generative AI for environmental sustainability and creative AI innovations.

## About 

This project, GreenVision is an AI-powered tool that enables individuals and organizations to create visually impactful posters for environmental awareness. Leveraging the Stable Diffusion model, GreenVision allows users to generate unique images tailored to specific themes, locations, languages, and slogans, making it easy for anyone to create compelling visuals without the need for complex prompt engineering. Designed with accessibility in mind, this solution addresses the needs of diverse users across different regions and literacy levels—from government bodies and NGOs to community organizations and individuals—facilitating the fast and cost-effective creation of highly targeted posters.

The interface, built with Gradio, is intuitive and user-friendly, allowing users to input details and instantly view generated visuals. Although the process is prompt-free, it provides users with extensive options to customize their posters. Beyond the AI-generated slogans accompanying the visuals, users can add their own custom slogans to the poster. After a poster is generated, the user-provided slogan is color-coded based on keywords related to environmental themes (e.g., green for nature, blue for water, brown for soil) and placed over a highlighted band on the poster. This approach not only enhances visual impact but also reinforces the message’s meaning by aligning colors with thematic elements. The final result is a polished, powerful poster ready for public sharing to inspire environmental action.

## Features

- **Generative AI:** Uses the Stable Diffusion model enhanced with Dreambooth to generate high-quality, customized posters based on user-defined parameters.
- **Customizable Inputs:** Allows users to specify region, language, environmental issue, additional details, and slogans to localize poster designs without the need for complex prompt engineering.
- **Dynamic Text Overlay:** Adds impactful user-provided slogan, color-coded based on relevant keywords, enhancing the visual message.
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
![image](https://github.com/user-attachments/assets/857fc416-b754-43b7-8a37-749e21791434)




## Author

**Lata**  
**Date:** November 2, 2024


