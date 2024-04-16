function submitQuiz() {
            const q1 = document.querySelector('input[name="q1"]:checked').value;
            const q2 = document.querySelector('input[name="q2"]:checked').value;
            const q3 = document.querySelector('input[name="q3"]:checked').value;

            let result = '';

            if (q1 === 'a' && q2 === 'a' && q3 === 'a') {
                result = 'Desenvolvedor de Software';
            } else if (q1 === 'b' && q2 === 'b' && q3 === 'b') {
                result = 'Médico';
            } else if (q1 === 'c' && q2 === 'c' && q3 === 'c') {
                result = 'Professor';
            } else if (q1 === 'd' && q2 === 'd' && q3 === 'd') {
                result = 'Empreendedor';
            } else {
                result = 'Engenharia ';
            }

            document.getElementById('result').innerText = 'A carreira recomendada para você é:  ' + result;
        }