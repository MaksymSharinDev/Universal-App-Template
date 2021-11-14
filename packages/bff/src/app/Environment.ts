export class Environment {
    public static isLocal(): boolean {
        return Environment.getStage() === 'local'
    }

    public static isStage(): boolean {
        return Environment.getStage() === 'staging'
    }

    public static isProd(): boolean {
        return Environment.getStage() === 'production'
    }

    public static getStage(): string {
        return process.env.ENVIRONMENT || 'local'
    }

    public static getPort(): number {
        return (process.env.PORT as any) || 8000
    }

}
