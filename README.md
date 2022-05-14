# Calculator

The UI is used to enter an operation to evaluate. The operation entered can contain multiple operators before pressing "=".

Upon pressing "=", the string is analysed and broken down into two arrays (numbers and operators). The operator array is then checked through for "*" or "/" to determine priorities for processing of the evaluation.

After an operation has been evaluated, the next key press will clear the display.

To improve:
- UI is ugly and made to make flexbox layout easy.
- No error recognition for entering multiple consecutive operators.
- No divide by 0 error message.
- No decimal entry or backspace functionality.
- No limit of decimal places.
- No keyboard entry capability.



