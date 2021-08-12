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