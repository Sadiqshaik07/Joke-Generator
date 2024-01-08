const btn1 = document.getElementById("btn");

const jokeElement = document.getElementById("joke");

const apiKey = "F5LKoapjGng0e3C9WEwU0g==rskUwA55t4MtE38n";

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method : "GET",
  headers : 
  {
    "X-Api-Key" : apiKey,
  }
}

async function getJoke()
{
  try 
  {
    jokeElement.innerHTML = "Updating...";
    btn1.disabled = true;
    btn1.innerHTML = "Loading..."
    const response = await fetch(apiUrl,options);
    const data = await response.json();
    // btn1.disabled = false;
    // btn1.innerHTML = "Tell me a Joke";
    jokeElement.innerHTML = data[0].joke;
    btn1.disabled = false;
    btn1.innerHTML = "Tell me a Joke";
  } 
  catch (error) 
  {
    jokeElement.innerHTML = "An error happened, try again later (or) Check your internet connection";
    btn1.innerHTML = "Tell me a joke"
  }
}
btn1.addEventListener("click",getJoke)