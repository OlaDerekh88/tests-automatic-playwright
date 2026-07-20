// Define an enum for basic math operations
export enum MathOperation {
    Addition = "add",
    Subtraction = "subtract",
    Multiplication = "multiply",
    Division = "divide"
}

// Define an interface for a math operation result
export interface MathResult {
    operation: MathOperation
    operands: number[]
    result: number
}

// Helper function to perform basic math operations
export function performMathOperation(operation: MathOperation, ...operands: number[]): MathResult {
    let result = 0
    switch (operation) {
        case MathOperation.Addition:
            result = operands.reduce((total, num) => total + num, 0)
            break
        case MathOperation.Subtraction:
            result = operands.reduce((total, num) => total - num)
            break
        case MathOperation.Multiplication:
            result = operands.reduce((total, num) => total * num, 1)
            break
        case MathOperation.Division:
            result = operands.reduce((total, num) => total / num)
            break
    }
    return {
        operation,
        operands,
        result
    }
}
