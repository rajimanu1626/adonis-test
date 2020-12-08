import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Test extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title:String

  @column()
  public posterImage:String

  @column()
  public realeaseYear:String

  @column()
  public genres:String


  @column()
  public movieReview:String


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
