/**6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.**/

const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

const fib = memoize((n) => n < 2 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(10));

