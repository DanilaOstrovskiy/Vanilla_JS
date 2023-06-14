function wait(ms: number): Promise<void> {
    return new Promise((res: () => void) => {
        setTimeout(() => {
            res();
        }, ms);
    });
}

export async function run(): Promise<void> {
    await wait(1000);
    console.log(1);
    await wait(1000);
    console.log(2);
    await wait(1000);
    console.log(3);
}

run();