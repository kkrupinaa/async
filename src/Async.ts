import { rejects } from 'assert';
import { error } from 'console';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    const promice = new Promise<number>((resolve, rejects) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return promice;
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];
    return Promise.all([mock(100), mock(200), mock(300)]).then((data) => {
        for (let i = 0; i < data.length; i++) {
            result.push(data[i]);
        }
        return result;
    });
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return err.message;
    }
}
