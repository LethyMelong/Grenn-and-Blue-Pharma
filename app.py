from flask import Flask, request, render_template, redirect, url_for
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('p.html')  # Assurez-vous que votre fichier HTML est nommé p.html

@app.route('/send', methods=['POST'])
def send_message():
    name = request.form['name']
    email = request.form['email']
    subject = request.form['objet']
    message = request.form['message']

    # Configuration de l'email
    msg = MIMEText(f"Nom: {name}\nEmail: {email}\nObjet: {subject}\nMessage: {message}")
    msg['Subject'] = f"Nouveau message de {name} - {subject}"
    msg['From'] = email
    msg['To'] = 'lethy780@gmail.com'  # Remplacez par l'adresse email de votre entreprise

    # Envoi de l'email
    with smtplib.SMTP('smtp.gmail.com', 587) as server:  # Remplacez par votre serveur SMTP
        server.starttls()
        server.login('lethy780@gmail.com', 'vskb qmev pmmf kfnw')  # Remplacez par vos identifiants
        server.send_message(msg)

    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)