
#!/usr/bin/env bash

docker run -p 88:3000 -d serve-js-page-using-node $*

docker container run -p 88:3000 +d serve-js-page-using-node "$*"


>>>>>>> 2d44219edfbfa319a888b847e7ab4fe39f2d8fa9
