let question = 0

let score = {
E:0,
I:0,
N:0,
S:0,
T:0,
F:0,
J:0,
P:0
}

const scene = document.getElementById("scene")

const A = document.getElementById("choiceA")
const B = document.getElementById("choiceB")
const C = document.getElementById("choiceC")
const D = document.getElementById("choiceD")

const questions = [

{
img:"q1.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q2.jpeg",
A:()=>{score.E++},
B:()=>{score.S++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q3.jpeg",
A:()=>{score.E++},
B:()=>{score.S++},
C:()=>{score.J++},
D:()=>{score.N++}
},

{
img:"q4.jpeg",
A:()=>{score.J++},
B:()=>{score.P++},
C:()=>{score.T++},
D:()=>{score.F++}
},

{
img:"q5.jpeg",
A:()=>{score.N++},
B:()=>{score.S++},
C:()=>{score.T++},
D:()=>{score.F++}
},

{
img:"q6.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.F++}
},

{
img:"q7.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q8.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q9.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q10.jpeg",
A:()=>{score.P++},
B:()=>{score.S++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q11.jpeg",
A:()=>{score.P++},
B:()=>{score.S++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q12.jpeg",
A:()=>{score.P++},
B:()=>{score.J++},
C:()=>{score.T++},
D:()=>{score.N++}
},

{
img:"q13.jpeg",
A:()=>{score.N++},
B:()=>{score.S++},
C:()=>{score.T++},
D:()=>{score.F++}
},

{
img:"q14.jpeg",
A:()=>{score.E++},
B:()=>{score.I++},
C:()=>{score.T++},
D:()=>{score.F++}
},

{
img:"q15.jpeg",
A:()=>{score.P++},
B:()=>{score.S++},
C:()=>{score.J++},
D:()=>{score.F++}
}

]

function next(){

question++

if(question<questions.length){

scene.src="image/"+questions[question].img

}

else{

result()

}

}

A.onclick=()=>{
questions[question].A()
next()
}

B.onclick=()=>{
questions[question].B()
next()
}

C.onclick=()=>{
questions[question].C()
next()
}

D.onclick=()=>{
questions[question].D()
next()
}

function result(){

let type=""

type+=(score.E>=score.I)?"E":"I"
type+=(score.N>=score.S)?"N":"S"
type+=(score.T>=score.F)?"T":"F"
type+=(score.J>=score.P)?"J":"P"

const insects={
ENFP:"butterfly.png",
INTJ:"spider.png",
ISFP:"firefly.png",
ENTJ:"dragonfly.png",
ISFJ:"bee.png",
INFJ:"mantis.png",
ESTP:"wasp.png",
ISTP:"beetle.png",
ESFP:"ladybug.png",
INFP:"moth.png",
ESTJ:"termite.png",
ISTJ:"ant.png",
ENFJ:"cicada.png",
INTP:"weevil.png",
ESFJ:"cricket.png",
ISFP:"firefly.png"
}

scene.src="image/"+insects[type]

}
scene.onclick=()=>{
if(question>=questions.length){
location.reload()
}
}