import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Test from 'App/Models/Test'

export default class TestSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Test.createMany(
      [
    {
      title:'Test Data 1',
      posterImage:'testimg1.com',
      realeaseYear:'1998',
      genres:'test Genere 1',
      
      movieReview:'Super cool'
    },
    {
      title:'Test Data 2',
      posterImage:'testimg2.com',
      realeaseYear:'1999',
      genres:'test Genere 2',
      
      movieReview:'Super cool marvellous'
    },
    {
      title:'Test Data 3',
      posterImage:'testimg3.com',
      realeaseYear:'2000',
      genres:'test Genere 3',
      movieReview:'Super cool awesome'
    }
  ]
  )
  }
}
