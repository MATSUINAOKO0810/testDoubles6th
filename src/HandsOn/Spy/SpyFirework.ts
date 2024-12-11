import {Firework} from "./Types";

// 正しくSpyの役割を果たすように書き換えてください
export class SpyFirework implements Firework {
    fire_wasCalled = false
    fire() {
        this.fire_wasCalled = true
    }
}