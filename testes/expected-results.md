## BST

-   Subnum:

Indicates a participant code entered by the experimenter.
ID do participante.

-   Type

Indicates the block type (practice, neutral, congruent, incongruent or mixed).
Basicamente o "nível".

-   Block

Indicates the serial order of the block with:

> 0 indicating the practice block

> 1 the pure neutral block

> 2 the pure congruent block

> 3 the pure incongruent block

> 4 the mixed block

Basicamente o "nível" novamente.

-   Congruency

Indicates whether for each particular trial the irrelevant information (i.e. color) was congruent or incongruent with the correct response target.

> Neutral (black and white) stimuli are recorded as 0

> Stimuli that match shape and color (congruent) are recorded as 1

> And stimuli that match shape but mismatch color (incongruent) are recorded as -1

-   Trial

Records a trial number (restarting from 1 on each block).

-   Stim

Indicates the stimulus type with:

> 1 = red circle

> 2 = red square

> 3 = blue square

> 4 = blue circle

> 5 = unfilled circle

> 6 = unfilled square.

-   Resp

Indicates whether the response was made to the left or right target using the indicators `lshift` and `rshift` regardless of the response modality.

-   Corr

Indicates whether the response was correct (1 or 0).

-   rt

Indicates the response time in ms.

-   TooSlow

Sujeitos que demoraram demais (>3000ms).


## Stroop

---

## Torre de Londres

- Sub

Indicates the subject code

- Trial

Indicates which trial in the test

- Size

Is the number of disks in the problem

- Current

Is the current configuration (a configuração de pilhas original). 

- End

Is the goal configuration (a configuração de pilhas alvo, ou seja, o que o sujeito deve atingir com os movimentos)

- Step
Is the move within a trial

- Reset

Is whether resetting was used in the trial

- Tries

Indicates which reset round (if multiple tries is allowed)

- Score

Is a running total score which is just one point per number of disks in correctly solved problems

- AbsTime

Is the absolute timer recording when the move was recorded

- TrialTime

Indicates the time from the start of the trial

- ClickTime

Indicates the time since the previous move

- Done

Is 1/0 indicating that the problem was completed
Columns indicate the location of disks. Each pile is separated by a | character.;

sub;trial;size;current;end;step;reset;tries;score;abstime;trialtime;clicktime;done
94; 1; 3; |21|3||;||32|1|; 0; 0; 1; 0; 63354; 0; 0; 0
94; 1; 3; |213|||;||32|1|; 1; 0; 1; 0; 86139; 22785; 22785; 0
94; 1; 3; |21|3||;||32|1|; 2; 0; 1; 0; 97329; 33975; 11190; 0
94; 2; 3; |21|3||;|2|1|3|; 0; 0; 1; 0; 108513; 0; 0; 0
94; 2; 3; |21||3|;|2|1|3|; 1; 0; 1; 0; 115393; 6880; 6880; 0
94; 2; 3; |2|1|3|;|2|1|3|; 2; 0; 1; 3; 118544; 10031; 3151; 1
94; 3; 3; |21|3||;|23|1||; 0; 0; 1; 3; 122287; 0; 0; 0
94; 3; 3; |21||3|;|23|1||; 1; 0; 1; 3; 139291; 17004; 17004; 0