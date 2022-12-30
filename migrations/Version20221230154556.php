<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221230154556 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, image_url VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie_recette (categorie_id INT NOT NULL, recette_id INT NOT NULL, INDEX IDX_1638CD32BCF5E72D (categorie_id), INDEX IDX_1638CD3289312FE9 (recette_id), PRIMARY KEY(categorie_id, recette_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categorie_recette ADD CONSTRAINT FK_1638CD32BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE categorie_recette ADD CONSTRAINT FK_1638CD3289312FE9 FOREIGN KEY (recette_id) REFERENCES recette (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE recette ADD author_id INT NOT NULL');
        $this->addSql('ALTER TABLE recette ADD CONSTRAINT FK_49BB6390F675F31B FOREIGN KEY (author_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_49BB6390F675F31B ON recette (author_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categorie_recette DROP FOREIGN KEY FK_1638CD32BCF5E72D');
        $this->addSql('ALTER TABLE categorie_recette DROP FOREIGN KEY FK_1638CD3289312FE9');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE categorie_recette');
        $this->addSql('ALTER TABLE recette DROP FOREIGN KEY FK_49BB6390F675F31B');
        $this->addSql('DROP INDEX IDX_49BB6390F675F31B ON recette');
        $this->addSql('ALTER TABLE recette DROP author_id');
    }
}
