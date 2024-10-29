from flask import Flask, request, jsonify
import torch
import torch.nn as nn

# Define your model class (must match the one used for saving)
class SimpleModel(nn.Module):
    def __init__(self):
        super(SimpleModel, self).__init__()
        self.fc = nn.Linear(10, 2)

    def forward(self, x):
        return self.fc(x)

# Initialize Flask app
app = Flask(__name__)

# Load the saved model
model = SimpleModel()
model.load_state_dict(torch.load('model.pth'))  # Load the saved model
model.eval()  # Set the model to evaluation mode

@app.route('/generate-image', methods=['POST'])
def generate_image():
    data = request.json
    region = data['region']
    language = data['language']
    issue = data['issue']
    additional_details = data['additionalDetails']

    # Preprocess input data (this is just an example, adjust as needed)
    input_data = torch.randn(1, 10)  # Replace with actual preprocessing logic

    # Generate output using the model
    with torch.no_grad():
        output = model(input_data)

    # Here you would generate an image based on the model output
    # For example purposes, we'll just return a dummy image path
    image_path = "path/to/generated/image.png"  # Replace with actual image generation logic

    return jsonify({'image_path': image_path})

if __name__ == '__main__':
    app.run(debug=True)
