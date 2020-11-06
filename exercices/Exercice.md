# Bowling scoring

![Bowling](images/pin-bowling.png)


## Subject

Calculate the score for a game of bowling.

There is of course only one method of calculating points in bowling.

**Number of fallen pins**

At the first throw of each frame, you get a number of points according to the number of pins you have dropped. If you knock down all the pins on the first throw, you will have 10 points and this will be called a **strike**.

If there are any remaining pins standing after the first throw, you will be entitled to a second throw and the total pins that fall will be added to your first throw. If you drop the rest of the pins on this second throw, you will have 10 points and this will be called a **spare**.

After 10 frames, if you succeed in making a strike or a spare, you will have the right to 1 or 2 additional throws.

**Additional points**

In addition to the number of pins you have dropped, you will be entitled to bonus points in the event of a strike or spare:

If you strike, your next two throws will be added to the 10 pins already fallen.
If you make a spare, your next throw will be added to the 10 pins already fallen

## Steps

``input : number of pins dropped on each throw (List <Integer>)``

``output : the score (Integer)``

#### How to start project

**Node.JS**

``npm install``

Node.JS server :
``npm run nodemon``

Start Cypress :
``npm run tests``



#### Step 1 - Display the score for game without spare or strike

Datasets :
* input : 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 1

* input : 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 2

* input : 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 5

* input : 1, 6, 3, 5, 1, 2, 9, 0, 3, 2, 7, 2, 5, 4, 4, 3, 6, 2, 7, 2
* output : 74

* input : empty
* output : 0

#### Step 2 - Display the score for game with spare
Datasets :
* input : 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 10

* input : 1, 9, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 18

* input : 1, 9, 7, 3, 7, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 43

#### Step 3 - Display the score for game with strike
Datasets :
* input : 10, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 11

* input : 10, 2, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 19

* input : 10, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 20

* input : 10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 42

* input : 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
* output : 60

#### Step 4 - Display the score for game with bonus on the last frame
Datasets :
* input : 10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0
* output : 52

* input : 10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5
* output : 57

* input : 10, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 2
* output : 61

* input : 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
* output : 300
