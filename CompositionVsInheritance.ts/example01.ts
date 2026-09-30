interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class FlyingAbility implements Flyable {
  fly(): void {
    console.log("Flying through the sky.");
  }
}

class SwimmingAbility implements Swimmable {
  swim(): void {
    console.log("Swimming through water.");
  }
}

// Now build characters by COMPOSING the abilities they actually have
class Duck {
  constructor(
    private flyAbility: Flyable,
    private swimAbility: Swimmable
  ) {}

  fly(): void {
    this.flyAbility.fly();
  }

  swim(): void {
    this.swimAbility.swim();
  }
}

class Penguin {
  constructor(private swimAbility: Swimmable) {} // no flyAbility — genuinely can't fly, and the type system reflects that!

  swim(): void {
    this.swimAbility.swim();
  }
}

const duck = new Duck(new FlyingAbility(), new SwimmingAbility());
duck.fly();  // "Flying through the sky."
duck.swim(); // "Swimming through water."

const penguin = new Penguin(new SwimmingAbility());
penguin.swim(); // "Swimming through water."
// penguin.fly(); // doesn't even exist — no awkward override-and-throw needed