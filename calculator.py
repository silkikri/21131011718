from flask import Flask, jsonify
import requests
from collections import deque
import time

app = Flask(__name__)
window_size = 10
numbers_window = deque(maxlen=window_size)

# Mock third-party server API
def fetch_numbers_from_server(number_id):
    # In actual implementation, replace with the actual server URL
    url = f"http://third-party-server.com/{number_id}"
    try:
        response = requests.get(url, timeout=0.5)  # 500 ms timeout
        if response.status_code == 200:
            return response.json()  # Assuming the server returns a JSON response
    except (requests.RequestException, ValueError):
        pass
    return []

@app.route('/numbers/<number_id>', methods=['GET'])
def get_numbers(number_id):
    if number_id not in ['p', 'f', 'e', 'r']:
        return jsonify({"error": "Invalid number ID"}), 400

    window_prev_state = list(numbers_window)
    fetched_numbers = fetch_numbers_from_server(number_id)

    for num in fetched_numbers:
        if num not in numbers_window:
            numbers_window.append(num)
    
    window_curr_state = list(numbers_window)
    if len(numbers_window) > 0:
        avg = sum(numbers_window) / len(numbers_window)
    else:
        avg = 0.0

    response = {
        "windowPrevState": window_prev_state,
        "windowCurrState": window_curr_state,
        "numbers": fetched_numbers,
        "avg": round(avg, 2)
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=9876)
