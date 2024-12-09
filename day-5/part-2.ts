let [rules, updates] = Deno.readTextFileSync('input.txt')
    .split('\n\n');

rules = rules
    .split('\n')
    .map(el => el.split('|')
        .map(Number));
updates = updates
    .split('\n')
    .map(el => el.split(',')
        .map(Number));

let sum = 0;

for (const update of updates) {
    const relevantRules = rules.filter(([X, Y]) => update.includes(X) && update.includes(Y));
    const graph = new Map();
    const inDegree = new Map();

    for (const rule of relevantRules) {
        let indexX = update.findIndex()
    }

    for (const page of update) {
        graph.set(page, []);
        inDegree.set(page, 0);
    }

    for (const [X, Y] of relevantRules) {
        graph.get(X).push(Y);
        inDegree.set(Y, inDegree.get(Y) + 1);
    }


}

console.log(sum);