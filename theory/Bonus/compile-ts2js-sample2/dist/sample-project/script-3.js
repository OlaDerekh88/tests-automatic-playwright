// Define an enum for basic math operations
export var MathOperation;
(function (MathOperation) {
    MathOperation["Addition"] = "add";
    MathOperation["Subtraction"] = "subtract";
    MathOperation["Multiplication"] = "multiply";
    MathOperation["Division"] = "divide";
})(MathOperation || (MathOperation = {}));
// Helper function to perform basic math operations
export function performMathOperation(operation, ...operands) {
    let result = 0;
    switch (operation) {
        case MathOperation.Addition:
            result = operands.reduce((total, num) => total + num, 0);
            break;
        case MathOperation.Subtraction:
            result = operands.reduce((total, num) => total - num);
            break;
        case MathOperation.Multiplication:
            result = operands.reduce((total, num) => total * num, 1);
            break;
        case MathOperation.Division:
            result = operands.reduce((total, num) => total / num);
            break;
    }
    return {
        operation,
        operands,
        result
    };
}
