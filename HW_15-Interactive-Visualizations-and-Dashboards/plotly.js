@app.route("/names")
def names():

    lyrics = get_lyrics()
    labels, values = zip(*lyrics.items())
    data = [{
        "labels": labels,
        "values": values,
        "type": "pie"}]

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)