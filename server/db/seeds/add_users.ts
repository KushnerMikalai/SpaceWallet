import { AbstractSeed, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc5/mod.ts";

export default class extends AbstractSeed<ClientMySQL> {
    async run(): Promise<void> {
        await this.client.query(`
            INSERT into users VALUES
            (DEFAULT, 'Asad Rahman', 'asad.dk.bd@gmail.com', 1, 'User', DEFAULT, DEFAULT, DEFAULT),
            (DEFAULT, 'Ida Watson', 'ida.watson@example.com',  1, 'User', DEFAULT, DEFAULT, DEFAULT),
            (DEFAULT, 'Marshall Barrett', 'marshall.barrett@example.com',  1, 'User', DEFAULT, DEFAULT, DEFAULT),
            (DEFAULT, 'John Doe', 'john@example.com', 1, 'User', DEFAULT, DEFAULT, DEFAULT)
        `);
    }
}
