from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import sys
import os

app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
CORS(app, origins=["https://hogwartsgame.netlify.app"])

@app.route('/execute', methods=['POST'])
def execute_code():
    try:
        # Log the incoming request data
        print("Request data:", request.get_json())

        # Get the Python code from the request
        data = request.get_json()
        code = data.get('code', '')

        # Capture print output
        stdout = io.StringIO()
        sys.stdout = stdout

        # Safe globals for execution
        exec_globals = {
            "__builtins__": {"print": print},  # Restrict built-ins for security
        }

        # Execute the code
        exec(code, exec_globals)

        # Return output as a response
        sys.stdout = sys.__stdout__
        output = stdout.getvalue()
        # After executing the code
        return jsonify({"output": output})
     
    except Exception as e:
        # Capture Python exceptions and return them as error messages
        sys.stdout = sys.__stdout__
        error_message = f"Error: {str(e)}"
        print("Execution error:", error_message)
        return jsonify({"error": error_message}), 400

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Default to 5000 if PORT is not set
    app.run(host="0.0.0.0", port=port)