function EnviarRespostaQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        alert("Por favor, responda todas as perguntas antes de enviar.");
        return;
    }

    const q1Value = q1.value;
    const q2Value = q2.value;
    const q3Value = q3.value;

    let result = '';

     if (q1Value === 'a' && q2Value === 'a' && q3Value === 'a') {
        result = 'Desenvolvedor de Software';

   } else if (q1Value === 'b' && q2Value === 'a' && q3Value === 'a') {
            result = 'técnico de assistência médica digital';

  } else if (q1Value === 'd' && q2Value === 'd' && q3Value === 'a') {
            result = 'Gerente';

   } else if (q1Value === 'b' && q2Value === 'd' && q3Value === 'b') {
            result = 'Enfermagem ';

   } else if (q1Value === 'b' && q2Value === 'a' && q3Value === 'c') {
            result = 'técnico de assistência médica digital';

 } else if (q1Value === 'b' && q2Value === 'a' && q3Value === 'd') {
            result = 'técnico de assistência médica digital';

            
   } else if (q1Value === 'c' && q2Value === 'a' && q3Value === 'b') {
            result = 'Biologia';

  } else if (q1Value === 'c' && q2Value === 'c' && q3Value === 'b') {
            result = 'Biologia';        
 
 
 } else if (q1Value === 'd' && q2Value === 'c' && q3Value === 'b') {
            result = 'Publicidade e Propaganda'; 

} else if (q1Value === 'c' && q2Value === 'a' && q3Value === 'c') {
      result = 'professor de ciências da computação';          
            
 } else if (q1Value === 'c' && q2Value === 'd' && q3Value === 'b') {
            result = 'Biologia';            
            
 } else if (q1Value === 'd' && q2Value === 'c' && q3Value === 'd') {
            result = 'Publicidade e Propaganda';  
        
    } else if (q1Value === 'd' && q2Value === 'a' && q3Value === 'd') {
                result = 'Engenharia';               

  } else if (q1Value === 'b' && q2Value === 'd' && q3Value === 'a') {
            result = 'Enfermagem';

  } else if (q1Value === 'b' && q2Value === 'c' && q3Value === 'a') {
            result = 'Medicina';          

 } else if (q1Value === 'b' && q2Value === 'b' && q3Value === 'c') {
            result = 'Medicina';     
            
 } else if (q1Value === 'b' && q2Value === 'b' && q3Value === 'a') {
            result = 'Enfermagem';


    } else if (q1Value === 'b' && q2Value === 'b' && q3Value === 'a') {
            result = 'Enfermagem';

   } else if (q1Value === 'd' && q2Value === 'c' && q3Value === 'a') {
            result = 'Artes Cênicas';


   } else if (q1Value === 'd' && q2Value === 'b' && q3Value === 'a') {
            result = 'Relacoes Institucionais e Governamentais';

  } else if (q1Value === 'd' && q2Value === 'a' && q3Value === 'a') {
                result = 'Desenvolvedor de Software';       

 } else if (q1Value === 'd' && q2Value === 'b' && q3Value === 'c') {
        result = 'Administração';

} else if (q1Value === 'd' && q2Value === 'b' && q3Value === 'd') {
            result = 'Jornalismo';      

 } else if (q1Value === 'd' && q2Value === 'a' && q3Value === 'c') {
            result = 'Administração de banco de dados';

 } else if (q1Value === 'd' && q2Value === 'd' && q3Value === 'c') {
            result = 'Policial Militar ou Civil';

 } else if (q1Value === 'd' && q2Value === 'd' && q3Value === 'b') {
            result = 'Medicina Veterinária';
        
        
   } else if (q1Value === 'c' && q2Value === 'd' && q3Value === 'c') {
            result = 'Pedagogia';


    } else if (q1Value === 'c' && q2Value === 'a' && q3Value === 'a') {
            result = 'professor de ciências da computação';    

         
  } else if (q1Value === 'a' && q2Value === 'c' && q3Value === 'c') {
            result = 'professor de ciências da computação'

     
   } else if (q1Value === 'c' && q2Value === 'c' && q3Value === 'a') {
            result = 'professor de ciências da computação';         


  } else if (q1Value === 'c' && q2Value === 'c' && q3Value === 'd') {
            result = 'Pedagogia';

  } else if (q1Value === 'c' && q2Value === 'd' && q3Value === 'd') {
            result = 'Pedagogia';

  } else if (q1Value === 'a' && q2Value === 'd' && q3Value === 'd') {
            result = 'Engenharia de Software';       
       
    } else if (q1Value === 'd' && q2Value === 'c' && q3Value === 'c') {
            result = 'Design Gráfico';
    
   } else if (q1Value === 'd' && q2Value === 'b' && q3Value === 'd') {
            result = 'Design Gráfico';
    
   } else if (q1Value === 'b' && q2Value === 'd' && q3Value === 'd') {
            result = 'Enfermagem';
        
   } else if (q1Value === 'd' && q2Value === 'b' && q3Value === 'd') {
    result = ' Marketing';
  
} else if (q1Value === 'a' && q2Value === 'b' && q3Value === 'b') {
    result = 'Engenharia de Software';


} else if (q1Value === 'a' && q2Value === 'b' && q3Value === 'a') {
    result = ' Engenharia de Software';
 
} else if (q1Value === 'b' && q2Value === 'c' && q3Value === 'c') {
            result = 'Enfermagem';
    
  } else if (q1Value === 'c' && q2Value === 'b' && q3Value === 'd') {
            result = 'Pedagogia';   

  } else if (q1Value === 'b' && q2Value === 'd' && q3Value === 'c') {
            result = 'Medicina';   

   
     } else if (q1Value === 'b' && q2Value === 'b' && q3Value === 'b') {
        result = 'Médico';
    
    } else if (q1Value === 'c' && q2Value === 'c' && q3Value === 'c') {
        result = 'Professor';
    
    } else if (q1Value === 'd' && q2Value === 'd' && q3Value === 'd') {
        result = 'Empreendedor';

    } else if (q1Value === 'a' && q2Value === 'a' && q3Value === 'd') {
        result = 'Desenvolvedor de Software';
        
    } else if (q1Value === 'a' && q2Value === 'a' && q3Value === 'c') {
        result = 'Desenvolvedor de Software';
        
    } else if (q1Value === 'a' && q2Value === 'd' && q3Value === 'c') {
        result = 'Desenvolvedor de Software';
        
    } else if (q1Value === 'd' && q2Value === 'a' && q3Value === 'b') {
        result = 'Psicologia';
        
    



   
    } else {


        if (q1Value === 'a' && q2Value === 'b' && q3Value === 'c') {
            result = 'Consultor de Tecnologia em Saúde';
        } else if (q1Value === 'b' && q2Value === 'a' && q3Value === 'b') {
            result = 'Pesquisador Médico em Tecnologia';
        } else if (q1Value === 'c' && q2Value === 'd' && q3Value === 'a') {
            result = 'Fundador de uma Escola de Negócios';
        } else if (q1Value === 'a' && q2Value === 'c' && q3Value === 'b') {
            result = 'Designer de Interfaces de Usuário na Área da Saúde';
        } else if (q1Value === 'b' && q2Value === 'c' && q3Value === 'd') {
            result = 'Gestor de Equipe em Hospital';
        } else if (q1Value === 'c' && q2Value === 'b' && q3Value === 'a') {
            result = 'Educador em Tecnologia';
        } else {
            result = 'Enólogo';
        }
    }

    document.getElementById('result').innerText = 'A carreira recomendada para você é : ' + result;
}

