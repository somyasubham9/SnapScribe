import pickle
from flask import Flask, request, jsonify
import numpy as np
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.applications.inception_v3 import InceptionV3, preprocess_input
from tensorflow.keras.preprocessing.sequence import pad_sequences
from keras.models import load_model
from PIL import Image

app = Flask(__name__)
CORS(app)

model = load_model('model.h5')
featuremodel = load_model('featuremodel.h5')
with open('tokenizer.pkl', 'rb') as f:
    tokenizer = pickle.load(f)

def idx_to_word(integer, tokenizer):
        for word, index in tokenizer.word_index.items():
            if index == integer:
                return word
        return None

def predict_caption(model, features, tokenizer, max_length):
    # add start tag for generation process
        in_text = 'SOS'
    # iterate over the max length of sequence
        for i in range(max_length):
        # encode input sequence
            sequence = tokenizer.texts_to_sequences([in_text])[0]
        # pad the sequence
            sequence = pad_sequences([sequence], max_length)
        # predict next word
            yhat = model.predict([features, sequence], verbose=0)
        # get index with high probability
            yhat = np.argmax(yhat)
        # convert index to word
            word = idx_to_word(yhat, tokenizer)
        # stop if word not found
            if word is None:
                break
        # append word as input for generating next word
            in_text += " " + word
        # stop if we reach end tag
            if word == 'eos':
                break
        response_json=jsonify(message=in_text)    
        return response_json


@app.route("/", methods=['POST'])
def predict():
    file = request.files['photo']
    image = Image.open(file)
    image = image.resize((299, 299))
    image = image.convert('RGB')
    image = np.array(image)
    image = preprocess_input(image)
    features = featuremodel.predict(np.expand_dims(image, axis=0), verbose=0)

    # tokenize the text
    max_length = 35
    result = predict_caption(model, features, tokenizer, max_length)
    return result

    
   
    


if __name__ == '__main__':
    app.run(debug=True)