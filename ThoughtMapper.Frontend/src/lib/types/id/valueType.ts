import {Result, Maybe} from "typescript-functional-extensions";
import {v4} from "uuid";

const idRegex: RegExp = /^([a-f0-9]{8})-?([a-f0-9]{4})-?([a-f0-9]{4})-?([a-f0-9]{4})-?([a-f0-9]{12})$/i;

export class Id {
    readonly idString: string;

    private constructor(value: string) {
        this.idString = value;
    }

    static newId() : Id {
        return new Id(v4());
    }

    static from(raw: Maybe<string>): Result<Id> {
        return raw
            .toResult("an id cannot be empty")
            .ensure(s => s.length > 0, "an id cannot be empty")
            .map(s => s.toLowerCase())
            .ensure(value => idRegex.test(value), "invalid id format")
            .map(value => value.replace(idRegex, "$1-$2-$3-$4-$5"))
            .map(s => new Id(s));
    }

    toString(): string {
        return this.idString;
    }
}
