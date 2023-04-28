référentiel git (doc ,  exemples  ) pour la formation
"m2i_full_stack_js"
============
URL actuelle: https://github.com/didier-tp/m2i_full_stack_js
===========
mode opératoire conseillé:
--------
cd c:\references
git clone https://github.com/didier-tp/m2i_full_stack_js
--> nouveau répertoire cd c:\references\m2i_full_stack_js
à considérer comme une référence en lecture seulement
--------
futures actualisations:
cd c:\references\m2i_full_stack_js
git pull
---------
--------
npm install -g http-server

Lancement du mini serveur http avec la prise en charge de l'application angular :
http-server -c-1 dist\my-app\

NB : l'option -c-1 signifie "désactiver les caches coté serveur http"
l'url par défaut est http://localhost:8080

l'option --proxy http://localhost:8282 permet (si besoin) de configurer une
redirection vers une api rest (ex: ./api-rest-xy )
