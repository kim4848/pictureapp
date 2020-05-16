using System.Collections.Generic;
using System.ComponentModel;
using System;
using System.Linq;
using Microsoft.Azure.Cosmos;

namespace pictureuploader.Services {
    public class DBService {
        private CosmosClient client;

        public DBService () {
            client = new CosmosClient ("AccountEndpoint=https://uge5.documents.azure.com:443/;AccountKey=cdZnxB4QbHKKErnJ52MnClcDQgwoIGtadoisgklgaBhasicHzPkhDiRQ508H4OjDPXyPdtzE136t2ginJg0AeA==;");
        }

        public async System.Threading.Tasks.Task<bool> AddDocAsync (Models.DocumentationDTO documentationDTO) {
            var container = client.GetContainer ("dockersosmos", "cosmositems");

            var documentation = new Models.Documentation ();
            documentation.id = Guid.NewGuid ();
            documentation.Images = new System.Collections.Generic.List<dynamic> ();
            documentation.Images = documentationDTO.Images.Select (x => new { id=Guid.NewGuid(), ImageName = "Image", ExifData = x.ExifData as dynamic } as dynamic).ToList() ;
            
            documentation.Info = documentationDTO.Info;

            await container.CreateItemAsync (documentation);

            return true;
        }
    }
}