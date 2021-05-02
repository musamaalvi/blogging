using API.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class AboutUsService
    {
        private readonly IMongoCollection<AboutUs> _books;

        public AboutUsService(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _books = database.GetCollection<AboutUs>(settings.AboutusCollectionName);
        }

        public List<AboutUs> Get() =>
            _books.Find(book => true).ToList();

        public AboutUs Get(string id) =>
            _books.Find<AboutUs>(book => book.Id == id).FirstOrDefault();

        public AboutUs Create(AboutUs book)
        {
            _books.InsertOne(book);
            return book;
        }

        public void Update(string id, AboutUs bookIn) =>
            _books.ReplaceOne(book => book.Id == id, bookIn);

        public void Remove(AboutUs bookIn) =>
            _books.DeleteOne(book => book.Id == bookIn.Id);

        public void Remove(string id) =>
            _books.DeleteOne(book => book.Id == id);
    }
}
