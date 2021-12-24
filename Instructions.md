ENG
------
=====================================================================================================

                "instruction how to make your own Dockerized server on nodejs with js express" 

=====================================================================================================

23/12/2021
----------

First you have to have Docker, Git and Node JS, having these Three Programs installed on your machine! if you don't, click on this link: https://docs.docker.com/get-started/ you will be redirected to the get-start page. There you will have all the information on how the Docker works and how to install it on your machine.
After having installed these three tools, people keep in mind that these programs are tools for developers and devops. you will create a repository with the name of your project in git, gitlab among others of your choice, after creating you will clone your repository to your computer with git clone and the address of the repository or see my code and coding and run on your machine, the Dockerfile folder, server.js, Give docker build . Note: the "." is telling the docker to build the container with the files that are in that folder, after you have built the container it's time to see if the container will come up with your application. Giving a docker run -p xx -deo id of your image, I'll explain the "-p" and "-d" flags, the "-p" flag is example docker port -p 80:80, I'm telling the docker reference the computer's port to the container port and the "-d" is detached ie it won't lock the terminal. went up? excellent! Now it's time to deploy on git gitlab and others of your choice. First of a git status to see git will get all the files created in the folder, if the filenames appeared in red color then git is ok, now a git add . note: The "." you're telling git to add all the files in the folder, then give git status to see if git has added the files to the stage area, is it green? Perfect! Now you will do a git commit or are preparing the files. attention! Not possible through git status but you can see the logs giving git log, then commit logs will appear. Did you check? Excellent! Now it's time to push to the repository with git push.
With that you have your Project in Docker. 

Pt-BR
------

=====================================================================================================

                    ''instrução de como fazer o seu proprio servidor NodeJs Dockerizado''

=====================================================================================================

23/12/2021
----------
Primeiro você tem que ter Docker, Git e Node JS, ter esses três programas instalados em sua máquina! caso contrário, clique neste link: https://docs.docker.com/get-started/ você será redirecionado para a página de início. Lá você terá todas as informações sobre como funciona o Docker e como instalá-lo em sua máquina.
Depois de instalar essas três ferramentas, as pessoas devem ter em mente que esses programas são ferramentas para desenvolvedores e devops. você criará um repositório com o nome do seu projeto em git, gitlab entre outros de sua escolha, após a criação você clonará seu repositório com seu computador com git clone e o endereço do repositório ou verá meu código e codificação e executará em seu machine, a pasta Dockerfile, server.js, Give docker build. Note o "." está dizendo à janela de encaixe para construir o contêiner com os arquivos que estão nessa pasta; depois de criar o contêiner, é hora de ver se o contêiner virá com seu aplicativo. Fornecendo um docker run -p xx -deo id de sua imagem, explicarei os sinalizadores "-p" e "-d", o sinalizador "-p" é um exemplo de porta docker -p 80:80, estou dizendo o docker faz referência à porta do computador para a porta do contêiner e o "-d" é desconectado, ou seja, não bloqueará o terminal. subiu? excelente! Agora é hora de implantar no gitlab e outros de sua escolha. Primeiro, para ver o status do git, o git obterá todos os arquivos criados na pasta, se os nomes dos arquivos aparecerem em vermelho, então o git está ok, agora um git add. Note o "." você está dizendo ao git para adicionar todos os arquivos na pasta e, em seguida, fornecer o status do git para ver se o git adicionou os arquivos à área do palco, é verde? Perfeito! Agora você fará um git commit ou está preparando os arquivos. atenção! Não é possível por meio do git status, mas você pode ver os logs que fornecem o git log e, em seguida, os logs de commit aparecerão. Você checou? Excelente! Agora é hora de enviar para o repositório com git push.
Com isso você tem seu projeto no Docker.
