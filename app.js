<script>
  var user = prompt('What is your name?');
  alert('Hello, ' + user + ' ,I am going to ask you a few questions.');
  console.log('The user\'s name is ' + user);

  var answer1 = prompt(user + ', these are yes/no questions, so please answer with Y or N. Is Margaux from Seattle?');
  console.log('The user answered Question 1: ' + answer1);

  if(answer1 === 'N') {
    alert('That is correct!');
  }   else {
    alert('Wrong!');
  }

  var answer2 = prompt(user + 'Did Margaux play softball in college?');
  console.log('The user answered Question 2: ' + answer2);

  if(answer2 === 'N') {
    alert('That is correct!');
  }   else {
    alert('Wrong!');
  }

  var answer3 = prompt(user + 'Does Margaux have cats?');
  console.log('The user answered Question 3: ' + answer3);

  if(answer3 === 'N') {
    alert('That is correct!');
  }   else {
    alert('Wrong!');
  }
</script>
