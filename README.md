## Steps to Temporarily Export the API Key

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
  - Before running the Flask application, the user needs to export the API key in the terminal:
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
  - Now, users can run the Flask app:
    ```bash
    python3 app.py
    ```

