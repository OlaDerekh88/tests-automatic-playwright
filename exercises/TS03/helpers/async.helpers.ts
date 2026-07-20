interface Settings {
    [key: string]: string
}

const projectSettings: Settings = { headless: "1" }

export function cheatAndPeekProjectSettings(): void {
    console.log("> Peaking Project settings:", projectSettings)
}

export async function loadProjectSettings(): Promise<Settings> {
    console.log("> loadProjectSettings...")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(projectSettings)
        }, 500)
    })
}

export async function saveProjectSettings(key: string, value: string): Promise<boolean> {
    console.log("> saveProjectSettings...")
    return new Promise((resolve) => {
        setTimeout(() => {
            if (projectSettings[key] !== undefined) {
                resolve(false)
            }
            projectSettings[key] = value
            resolve(true)
        }, 500)
    })
}
