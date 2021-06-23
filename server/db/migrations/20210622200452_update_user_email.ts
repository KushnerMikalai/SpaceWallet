import { AbstractMigration, ClientMySQL } from "https://deno.land/x/nessie@2.0.0-rc5/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    async up(): Promise<void> {
        await this.client.query(`
            ALTER TABLE users
            ADD UNIQUE email_unique (email)
        `);
    }

    async down(): Promise<void> {
        await this.client.query("ALTER TABLE users DROP INDEX email_unique");
    }
}
