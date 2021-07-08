import { AbstractMigration, Info, ClientMySQL } from 'https://deno.land/x/nessie@2.0.0-rc5/mod.ts'

export default class extends AbstractMigration<ClientMySQL> {
    async up(info: Info): Promise<void> {
        await this.client.query(`
            CREATE TABLE users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                is_active BOOLEAN,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
    }

    async down(info: Info): Promise<void> {
        await this.client.query('DROP TABLE users')
    }
}
