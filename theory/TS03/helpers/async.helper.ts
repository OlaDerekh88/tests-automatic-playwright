export async function loadUserDataAsync(): Promise<string[]> {
    console.log("loadUserData: entering function")
    const sampleData = ["Dale", "Harry S. Truman", "Hawk"]

    return new Promise((resolve) => {
        console.log("loadUserData: entering Promise and waiting for 2 seconds...")
        setTimeout(() => {
            console.log("loadUserData: Promise done - returning value!")
            resolve(sampleData)
        }, 2000)
    })
}

export async function returnsUndefined(): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined)
        }, 2000)
    })
}

export function loadUserDataSync(): string[] {
    console.log("loadUserDataSync: entering function")
    const sampleData = ["Dale", "Harry S. Truman", "Hawk"]
    sleep(2000)
    return sampleData
}

export async function loadProjectData(): Promise<string[]> {
    console.log("loadProjectData: entering function")
    const sampleData = ["Python", "Java", "JavaScript", "C#"]
    return new Promise((resolve) => {
        console.log("loadProjectData: entering Promise and waiting for 2 seconds...")
        setTimeout(() => {
            console.log("loadProjectData: Promise done - returning value!")
            resolve(sampleData)
        }, 2000)
    })
}

function sleep(milliseconds: number): void {
    let start = new Date().getTime()
    for (let i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break
        }
    }
}
