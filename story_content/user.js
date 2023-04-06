function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gWK5Ok0Svq":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxQH6feBJhu6OpW0nNlcJRWtE3FuOupyT_OWeLAAubgOsuoxEMKECzBi5C1M6PnPYGPTg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

