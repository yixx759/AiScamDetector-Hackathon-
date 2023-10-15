from flask import Flask, render_template, request
import openai

openai.api_key = "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"


# with open("Audio/Test.m4a", "rb") as audio_file:
#     transcript = openai.Audio.transcribe(
#         file = audio_file,
#         model = "whisper-1",
#         response_format="text",
#         language="en"
#     )
# print(transcript)

app = Flask(__name__)

prompt1 = "if it is multiple people split it into 2 speakers and correct , but if its just one correct the grammar."
tmp = '''You are listening to a call in between two person. Identify the likelihood of the call being a scam. You should only give the percentage of how likely the call is to be a scam call. If it has a high percentage of being a scam, you should let me know what scam tactic that the scammer tried using on me.

This is the format that your answer should be: 
Percentage of call being a scam: [percentage]
What scam tactic the scammer used: [tactic]'''
#tmp = "looking at the values in speech marks, tell me on a scale of 1 to 10 is this scam then if it involves more than one person what could the victim do better in under 30 words? if one person only tell me the percentage: in this format Percent chance [chance of scam] What victim can do: "

prompt2 = "can you give me the precentage in this paragraph as a 0 to 1 decimal"
@app.route("/", methods =[ 'GET', 'POST'])
def helloe_world(name = "" , num =0):
    text = ""


    if request.method == "POST":
        name = ""


        text = request.form["nm"]
        if(text != ""):
            print (text)
            print("hello")
            completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt1 + text}]
            )
            completion1 = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": tmp + completion['choices'][0]['message']['content']}]
            )

            name += completion1['choices'][0]['message']['content']
            return render_template('index.html', name=name)





    return render_template('index.html', name="hello")


if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True, threaded=False)