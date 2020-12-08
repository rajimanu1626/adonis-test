import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tests extends BaseSchema {
  protected tableName = 'tests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)

      table.string('title').notNullable()
      table.string('posterImage').notNullable()
      table.string('realeaseYear').notNullable()
      table.string('genres').notNullable()
      
      table.string('movieReview').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
