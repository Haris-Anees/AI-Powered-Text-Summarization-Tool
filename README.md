## Steps to run the extension

Before you get started on using this chrome extension. You will first need an OPENAI-API-KEY. 
To get one visit https://platform.openai.com/docs/quickstart

Then,
Type in "chrome://extensions/" in your browser and enable developer mode, located in the top right corner:

![dev mode switch](https://github.com/Haris-Anees/AI-Powered-Text-Summarization-Tool/blob/8c4822eb85fc69b195181004bc6d900e5fb42aea/images/dev-mode-img.png)

Afterwards, click "Load unpacked" in the top left corner and find the downloaded repository:

![load unpacked button](https://github.com/Haris-Anees/AI-Powered-Text-Summarization-Tool/blob/f3c09a51e42fdd20b0b3087bfe52197fff007912/images/unpack-img.png)

You should then see the extension "Summarization Tool" in your extentions:

![extention visible](https://github.com/Haris-Anees/AI-Powered-Text-Summarization-Tool/blob/f3c09a51e42fdd20b0b3087bfe52197fff007912/images/exten-visible-img.png)

You can then click on the extension to see it:

![extention opened](https://github.com/Haris-Anees/AI-Powered-Text-Summarization-Tool/blob/f3c09a51e42fdd20b0b3087bfe52197fff007912/images/exten-open-img.png)

Within this extension, the first text area is where you will put the url of the webpage you want to summarize, and at the bottom is where the summary will be placed. (Note that it takes some time to summarize). However, before we can run it, go through the following steps:


**Download or Clone the Project**
  - If the project is stored in a Git repository, you can clone it by running:
    ```bash
    git clone <repository-url>
    ```

- **Set Up a Virtual Environment**
  - Navigate to the project folder:
    ```bash
    cd <project-folder>
    ```
  - Create and activate the virtual environment:
    - **On Windows**:
      ```bash
      python -m venv venv
      venv\Scripts\activate
      ```
    - **On Mac/Linux**:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```

- **Install the Requirements**
  - After activating the virtual environment, install the required dependencies by running:
    ```bash
    pip install -r requirements.txt
    ```

- **Export the OpenAI API Key Temporarily**
  - Before running the Flask application, you need to export the API key in the terminal:
    - **On Mac/Linux**:
      ```bash
      export OPENAI_API_KEY="your-openai-api-key-here"
      ```
    - **On Windows (Command Prompt)**:
      ```bash
      set OPENAI_API_KEY="your-openai-api-key-here"
      ```
    - **On Windows (PowerShell)**:
      ```bash
      $env:OPENAI_API_KEY="your-openai-api-key-here"
      ```

- **Run the Flask Application**
  - Now, run the Flask app:
    ```bash
    python3 app.py
    ```

