    document.getElementById('height').addEventListener('input', bmiCal);

    function bmiCal() {
        var w = parseInt(document.getElementById('weight').value);
        var hg = parseFloat(document.getElementById('height').value);
        var score;
        var bmi;
        var h = parseFloat(hg / 100);

        bmi = w / (h * h);
        bmi = bmi.toFixed(1);
        document.getElementById('output').innerHTML = bmi;

        if (bmi < 18.6) {

            score = 0;

        }
        if (bmi >= 18.6 && bmi < 24.9) {

            score = 1;

        }
        if (bmi > 24.9) {

            score = 2;

        }
        var message = ["Underweight BMI", "Normal BMI", "Obese BMI"];

        document.getElementById('message').innerHTML = message[score];
    }