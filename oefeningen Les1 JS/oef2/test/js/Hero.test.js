import Point from "../../src/js/game/Point";
import Hero from "../../src/js/game/Hero";

test("moveRight should add +1 to x axis", () => {
    let point = new Point(96, 24);
    let hero = new Hero(point);
    hero.moveRight();
    expect(hero.getX()).toBe(point.x + 1);
})

test("moveLeft should detract 1 to x axis", () => {
    let point = new Point(96, 24);
    let hero = new Hero(point);
    hero.moveLeft();
    expect(hero.getX()).toBe(point.x - 1);
})


