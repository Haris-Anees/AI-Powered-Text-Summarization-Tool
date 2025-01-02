from flask import Flask, jsonify, request
from flask_cors import CORS

from openai import OpenAI
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)
CORS(app)

@app.route('/getInfo', methods=['POST'])
def get_info():
    data = request.json
    url = data.get('url')

    print("Received URL:", url)

    page = requests.get(url)
    msg = BeautifulSoup(page.text, 'lxml')
    paragraphs = msg.find_all('p')
    all_text = "\n".join([para.text for para in paragraphs])
    
    summary = summarize(all_text)
    print("Summary:", summary)

    return jsonify({'summary': summary})

def summarize(msg):
    client = OpenAI()

    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that is responsible for recieving text, examining only the content, and concisely summarize."},
            {
                "role": "user",
                "content": msg
            }
        ]
    )

    response = completion.choices[0].message

    return response.content

if __name__ == '__main__':
    app.run(debug=True)
